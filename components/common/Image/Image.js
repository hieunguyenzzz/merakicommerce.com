import imageHolder from 'assets/images/holder.webp'
import NextImage from 'next/image'
function Image({ src = imageHolder, layout = "fill", ...props }) {
  return (
    <NextImage src={src || imageHolder} layout={layout} alt="Picture" {...props} />
  )
}

export default Image