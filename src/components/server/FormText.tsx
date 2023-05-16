import { FontType } from '@/types'
import { CSSProperties, HTMLAttributes, ReactElement } from 'react'

type FormTextProps = {
  fontType?: FontType
} & HTMLAttributes<HTMLSpanElement>

const getFontStyle = (fontType: FontType): CSSProperties => {
  const weightType = fontType.split('.')[0]
  const fontSize = Number(fontType.split('.')[1])

  let fontWeight = 400
  if (weightType === 'B') {
    fontWeight = 600
  }

  return { fontSize, fontWeight }
}

const FormText = ({
  fontType = 'R.16',
  children,
  color,
  style,
  ...rest
}: FormTextProps): ReactElement => {
  const fontStyle = getFontStyle(fontType)

  return (
    <span style={{ color, ...fontStyle, ...style }} {...rest}>
      {children}
    </span>
  )
}

export default FormText
