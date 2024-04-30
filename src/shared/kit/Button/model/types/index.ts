export type SizeButton = 's' | 'm' | 'l' | 'xl'
export type VariantButton =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'accent'
  | 'transparent'
  | 'inline'

export interface ButtonProps {
  size?: SizeButton
  variant?: VariantButton
  disabled?: boolean
}
