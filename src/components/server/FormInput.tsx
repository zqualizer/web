import { HTMLAttributes, ReactElement } from 'react'
import View from './View'
import FormLabel from './FormLabel'

type FormInputProps = {
  label?: string
} & HTMLAttributes<HTMLInputElement>

const FormInput = ({ label, ...rest }: FormInputProps): ReactElement => (
  <View className="gap-2">
    {label && <FormLabel title={label} />}
    <input
      style={{
        padding: '0 10px',
        height: 40,
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        backgroundColor: 'transparent',
      }}
      {...rest}
    />
  </View>
)

export default FormInput
