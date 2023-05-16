import { HTMLAttributes, ReactElement } from 'react'
import View from './View'

const Card = ({
  style,
  ...rest
}: HTMLAttributes<HTMLDivElement>): ReactElement => (
  <View
    style={{
      borderRadius: 40,
      background:
        'linear-gradient(180deg, rgba(116, 116, 130, 0.2) 0%, rgba(116, 116, 130, 0.04) 92.11%)',
      padding: 20,
      ...style,
    }}
    {...rest}
  />
)

export default Card
