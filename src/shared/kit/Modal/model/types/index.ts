export type SizeModal = 'small' | 'medium' | 'large'

export interface ModalProps {
  open: boolean
  size?: SizeModal
  header: string
}
