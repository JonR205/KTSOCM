export interface ApiResponse<Data> {
  data?: Data
  error?: string | 'Unknown error'
}
