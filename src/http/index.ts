import cookie from 'js-cookie';
import queryString, { StringifiableRecord } from 'query-string';

import { handleErrors, logNetworkError } from './handle-error';
import { NetworkError } from './network-error';

const authKey = '__auth_token__';

export const getToken = (): string => {
  return cookie.get(authKey) || '';
};

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Payload = Record<string, unknown>;

class Http {
  private readonly baseUrl: string;
  private needAuth?: boolean;

  constructor(baseUrl: string, needAuth?: boolean) {
    this.baseUrl = baseUrl;
    this.needAuth = needAuth || false;
  }

  get<T>({
    path,
    query,
  }: {
    path: string;
    query?: StringifiableRecord;
  }): Promise<T> {
    return this.execute<T>({
      method: HTTP_METHODS.GET,
      path,
      data: undefined,
      query,
    });
  }

  post<T>({
    path,
    data,
    query,
  }: {
    path: string;
    data: Payload;
    query?: StringifiableRecord;
  }): Promise<T> {
    return this.execute<T>({ method: HTTP_METHODS.POST, path, data, query });
  }

  put<T>({ path, data }: { path: string; data: Payload }): Promise<T> {
    return this.execute<T>({ method: HTTP_METHODS.PUT, path, data });
  }

  patch<T>({
    path,
    data,
    query,
  }: {
    path: string;
    data?: Payload;
    query?: StringifiableRecord;
  }): Promise<T> {
    return this.execute<T>({ method: HTTP_METHODS.PATCH, path, data, query });
  }

  delete<T>(path: string): Promise<T> {
    return this.execute<T>({ method: HTTP_METHODS.DELETE, path });
  }

  execute<T>({
    method,
    path,
    data,
    query,
  }: {
    method: HTTP_METHODS;
    path: string;
    data?: Payload;
    query?: StringifiableRecord;
  }): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token: string = this.needAuth ? getToken() : '';
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // credentials: 'include', TODO: there is an issue regarding token not being included for imageServer
        ...headers, //  todo: make sure not to overwrite Authorization
      },
      body: JSON.stringify(data),
    };

    const apiPath = this.baseUrl ? `${this.baseUrl}/${path}` : path;
    const fullPath = queryString.stringifyUrl(
      {
        url: apiPath,
        query: { ...query },
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );

    return fetch(fullPath, options)
      .then(async (response: Response) => {
        if (!response.ok) {
          const status = response.status || 500;
          const message = (await response.json())?.detail;
          logNetworkError(fullPath, status, message);
          throw new NetworkError({ status, message, response });
        }
        // not error, just not modified
        if (response.status === 204) {
          return null;
        }
        return response.json();
      })
      .catch(handleErrors);
  }
}

const baseApi = new Http('https://jsonplaceholder.typicode.com', false);

export default baseApi;
