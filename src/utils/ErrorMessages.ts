interface ErrorMessagesInterface {
  duplicatedEmail: string;
  networkRequestFailed: string;
}

const ErrorMessages: ErrorMessagesInterface = Object.freeze({
  duplicatedEmail: 'Email already in use, please provide another one',
  networkRequestFailed:
    'Error, please check your internnet connection and try again',
});

export default ErrorMessages;
