import { ReactElement } from 'react'
import Image, { ImageProps } from 'next/image'

const FormImg = ({
  size,
  width,
  height,
  alt,
  ...rest
}: { size: number } & ImageProps): ReactElement => (
  <Image width={size || width} height={size || height} alt={alt} {...rest} />
)

export default FormImg
