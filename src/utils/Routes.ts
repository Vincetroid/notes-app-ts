interface RoutesInterface {
  CreateNote: string;
  Initial: string;
  Notes: string;
  NotesRoot: string;
  Settings: string;
  SignUp: string;
  SignIn: string;
}

const Routes: RoutesInterface = Object.freeze({
  CreateNote: 'CreateNote',
  Notes: 'Notes',
  NotesRoot: 'NotesRoot',
  Initial: 'Initial',
  Settings: 'Settings',
  SignUp: 'SignUp',
  SignIn: 'SignIn',
});

export default Routes;
