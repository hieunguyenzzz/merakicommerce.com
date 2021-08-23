import { fetchGraphql } from 'react-tinacms-strapi'

export const fetcher = async ({
  url = process.env.STRAPI_URL,
  query,
  variables,
}) => {
  // console.log({ variables })
  try {
    const result = await fetchGraphql(url, query, variables)
    const { data, errors } = result
    // console.log({ result })
    if (errors) {
      console.error(errors)
      throw new Error(JSON.stringify(errors))
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

//page
export const getPageInfoBySlug = async ({ locale, pageId }) => {
  const { pages } = await fetcher({
    query: `
        query getPageInfo($locale:String $pageId:String){
          pages(locale: $locale where:{pageId: $pageId}){
            id
            title
            slug
            data
            locale
          }
        }
      `,
    variables: {
      locale,
      pageId,
    },
  })
  return pages && pages[0]
}

// mmutation
export const updatePageInfo = async (variables, pageInfo) => {
  // console.log({ variables, pageInfo })
  const saveMutation = `
      mutation updatePage(
            $data: JSON
            $id: ID!
        ) {
            updatePage(input: {data: {data: $data} where :{id:$id}} ) {
                page{
                    id
                    title
                    data
                }
            }
      }`
  return await fetcher({
    query: saveMutation,
    variables: {
      ...variables,
      id: pageInfo.id,
    },
  })
}


//seo
export const updateSeoApi = async (variables, router, id) => {
  let pageId = 'seo:' + id
  const createPageMutation = `
      mutation createPage(
            $data: JSON
            $title:String
            $pageId:String
            $locale:String
        ) {
          createPage(input: {data: {data: $data locale:$locale title:$title pageId:$pageId} } ) {
                page{
                  id
                  title
                  data
                  pageId
                  locale
                }
            }
      }`
  return await fetcher({
    query: createPageMutation,
    variables: {
      ...variables,
      title: pageId,
      pageId,
      locale: router.locale,
    },
  })
}
export const getSeoApi = async ({ router, id }) => {
  let pageId = 'seo:' + id
  let result
  const { pages } = await fetcher({
    query: `
        query getPageInfo($locale:String $pageId:String ){
          pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
            data
            title
             pageId
          }
        }
      `,
    variables: {
      locale: router.locale,
      pageId,
    },
  })
  result = pages && pages[0]
  if (!result) {
    const { pages } = await fetcher({
      query: `
          query getPageInfo($locale:String $pageId:String ){
            pages(locale:$locale where:{pageId:$pageId} sort:"created_at:DESC" limit:1){
              data
              title
               pageId
            }
          }
        `,
      variables: {
        locale: 'en',
        pageId,
      },
    })
    result = pages && pages[0]
  }
  return result
}
