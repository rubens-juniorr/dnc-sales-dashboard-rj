import { StyledButton, StyledInput } from '@/componets'
import { FormComponentProps } from '@/types'

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <button key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </form>
  )
}
export default FormComponent
