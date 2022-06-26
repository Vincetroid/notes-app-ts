import { StyleSheet } from 'react-native';
import StyleConstants from '../../global-styles/StyleConstants';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: StyleConstants.aqua,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: StyleConstants.labelFontSize,
    color: StyleConstants.deepGray,
    fontWeight: 'bold',
  },
  noteFieldsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  createNoteBtn: {
    margin: 10,
    padding: 16,
    backgroundColor: StyleConstants.solidPink,
    borderRadius: 5,
  },
  createNoteBtnText: {
    textAlign: 'center',
    color: StyleConstants.putty,
  },
});

export default styles;
