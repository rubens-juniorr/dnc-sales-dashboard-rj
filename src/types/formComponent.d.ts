export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error' | 'succes'
}

export interface FormComponentProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
