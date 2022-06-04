interface ErrorCodesInterface {
  duplicatedEmail: string;
  networkRequestFailed: string;
}

const ErrorCodes: ErrorCodesInterface = Object.freeze({
  duplicatedEmail: 'auth/email-already-in-use',
  networkRequestFailed: 'auth/network-request-failed',
});

export default ErrorCodes;
