import { ClientError, ClientErrorCode } from './client-error';
import { NetworkError } from './network-error';

export const logNetworkError = (
  url: string,
  status: number,
  message: string
): void => {
  if (process.env.REACT_APP_DEPLOYMENT_PHASE === 'production') {
    return;
  }

  console.error(
    `[NetworkError] Network error has happened with url ${url}. status: ${status}, message: ${message}`
  );
};

export const logUnexpectedError = (error: ClientError): void => {
  console.error(`[ClientError] Unhandled client error has caught. ${error}`);
};

export const handleErrors = (error: NetworkError): void => {
  if (error.message === 'Failed to fetch') {
    // In case of fetch API has failed with non API reason.
    // Message 'Failed to fetch' is from Fetch itself.
    throw new ClientError({
      code: ClientErrorCode.NETWORK_FAILURE,
      networkError: error,
    });
  }

  if (error.status === 401) {
    throw new ClientError({
      code: ClientErrorCode.UNAUTHENTICATED,
      networkError: error,
    });
  }

  if (error.status === 403) {
    throw new ClientError({
      code: ClientErrorCode.UNAUTHORIZED,
      networkError: error,
    });
  }

  throw new ClientError({
    code: ClientErrorCode.UNEXPECTED,
    networkError: error,
  });
};
