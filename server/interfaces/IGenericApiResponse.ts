export default interface IGenericApiResponse {
  success: boolean
  error?: {
    code: string
    message: string
    details?: Array<{ path: string[]; message: string }>
  }
  status: number
}
