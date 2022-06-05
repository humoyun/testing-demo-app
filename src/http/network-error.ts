interface ConstructorParams {
  status: number;
  message: string;
  response: Response;
}

export class NetworkError extends Error {
  public status: number;
  public message: string;
  public response: Response;

  constructor({ status, message, response }: ConstructorParams) {
    super();
    this.status = status;
    this.message = message;
    this.response = response;
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}
