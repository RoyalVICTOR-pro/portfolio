export default interface ValidationError {
  message: string
  rule: string
  field: string
  meta: Record<string, any>
}
