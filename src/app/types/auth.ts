export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number,
    username: string,
    role: string
  }
}

export interface Auth {
  token: string;
  role: string;
}