import { ensure } from 'src/utils/typeHelper';

import { NetworkError } from './network-error';

export enum ClientErrorCode {
  UNEXPECTED = 'UNEXPECTED',
  NETWORK_FAILURE = 'NETWORK_FAILURE',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  BAD_REQUEST = 'BAD_REQUEST',
  NO_PROJECT_ASSIGNED = 'NO_PROJECT_ASSIGNED',
  NO_JOBS_TO_ENQUEUE = 'NO_JOBS_TO_ENQUEUE',
  REVIEWER_ASSOCIATE_HAS_NO_JOBS = 'REVIEWER_ASSOCIATE_HAS_NO_JOBS',
  INVALID_NEXT_JOB_ID = 'INVALID_NEXT_JOB_ID',
  INVALID_PREV_JOB_ID = 'INVALID_PREV_JOB_ID',
  INVALID_FIRST_JOB_ID = 'INVALID_FIRST_JOB_ID',
  INVALID_LAST_JOB_ID = 'INVALID_LAST_JOB_ID',
  INVALID_JOB_ID = 'INVALID_JOB_ID',
  INVALID_PROJECT = 'INVALID_PROJECT',
  INVALID_JOB = 'INVALID_JOB',
  INVALID_CASE = 'INVALID_CASE',
  INVALID_IMAGE = 'INVALID_IMAGE',
  REPORTED_JOB = 'REPORTED_JOB',
}

const MESSAGES: Record<ClientErrorCode, string> = {
  [ClientErrorCode.UNEXPECTED]: 'Unexpected error happen.',
  [ClientErrorCode.NETWORK_FAILURE]:
    'Fail to reach server. Please check your network connection.',
  [ClientErrorCode.UNAUTHENTICATED]:
    'Your authentication seems expired. Please try login again.',
  [ClientErrorCode.UNAUTHORIZED]:
    'You are not allowed with this. Please try with another account.',
  [ClientErrorCode.BAD_REQUEST]: 'Wrong request format.',
  [ClientErrorCode.NO_PROJECT_ASSIGNED]:
    'You do not have any project assigned. Please ask the administrator to assign some projects.',
  [ClientErrorCode.NO_JOBS_TO_ENQUEUE]: 'There is no more jobs to enqueue.',
  [ClientErrorCode.REVIEWER_ASSOCIATE_HAS_NO_JOBS]:
    'There is no jobs in requested project.',
  [ClientErrorCode.INVALID_NEXT_JOB_ID]:
    'Failed to move to next. Please refresh it.',
  [ClientErrorCode.INVALID_PREV_JOB_ID]:
    'Failed to move to previous. Please refresh it.',
  [ClientErrorCode.INVALID_FIRST_JOB_ID]: 'Failed to move to the first job.',
  [ClientErrorCode.INVALID_LAST_JOB_ID]: 'Failed to move to the last job.',
  [ClientErrorCode.INVALID_JOB_ID]: 'Invalidated job id has give.',
  [ClientErrorCode.INVALID_PROJECT]: 'Failed to load the project.',
  [ClientErrorCode.INVALID_JOB]: 'Failed to load the job.',
  [ClientErrorCode.INVALID_CASE]: 'Failed to load the case.',
  [ClientErrorCode.INVALID_IMAGE]: 'Failed to load the image.',
  [ClientErrorCode.REPORTED_JOB]: 'This job has been reported.',
};

export const ClientErrorUtil = (() => {
  const getMessage = (code: ClientErrorCode): string =>
    MESSAGES[code] || ensure(MESSAGES[ClientErrorCode.UNEXPECTED]);

  return Object.freeze({
    getMessage,
  });
})();

interface ConstructorParams {
  code: ClientErrorCode;
  networkError?: NetworkError;
  message?: string;
}

export class ClientError extends Error {
  public code: ClientErrorCode;
  public message: string;
  public networkError?: NetworkError;

  constructor({ code, message, networkError }: ConstructorParams) {
    super();
    this.code = code;
    this.message = message || ClientErrorUtil.getMessage(code);
    this.networkError = networkError;
    Object.setPrototypeOf(this, ClientError.prototype);
  }
}
