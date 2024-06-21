class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statuCode = statuCode
    this.data = data
    this.message = message
    this.success = statusCode < 400
  }
}