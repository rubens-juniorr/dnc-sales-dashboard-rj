export type InputPros = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

export interface FormComponentProps {
  inputs: InputPros[]
  buttons: ButtonProps[]
  message?: MessageProps
}
