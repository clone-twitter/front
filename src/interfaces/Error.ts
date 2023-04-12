export interface Error {
  data: string;
  error: _ErrorObject;
  internal: boolean;
  status: number;
  statusText: string;
}

interface _ErrorObject {
  message: string;
  stack: string;
}

