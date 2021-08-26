import imageHolder from 'assets/images/holder.webp'
import NextImage from 'next/image'
function Image({ provider, image, src = imageHolder, layout = "fill", ...props }) {
  if (provider === 'strapi' && image) {
    return <NextImage src={'https://strapi.merakicommerce.com' + image.url || imageHolder} layout={layout} {...props} />
  }
  return (
    <NextImage src={src || imageHolder} layout={layout} alt="Picture" {...props} />
  )
}

export default Image