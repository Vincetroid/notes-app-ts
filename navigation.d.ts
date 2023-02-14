import { NotesStackParamsList } from './src/navigators/TabBottomNavigator';

declare global {
  namespace ReactNavigation {
    interface NotesParamsList extends NotesStackParamsList {}
  }
}
