export default interface TSubmitStatus {
  loading: boolean
  error: string
  success: boolean
  validationErrors: Record<string, string>
}
