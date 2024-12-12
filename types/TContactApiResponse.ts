import type TValidationError from '~/types/TValidationError'

export default interface TContactApiResponse {
  status: 'success' | 'error'
  type?: 'validation' | 'server'
  message?: string
  errors?: TValidationError[]
}
