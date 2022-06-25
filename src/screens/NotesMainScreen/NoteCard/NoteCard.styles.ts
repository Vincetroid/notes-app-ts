import { StyleSheet } from 'react-native';
import StyleConstants from '../../../global-styles/StyleConstants';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginBottom: 14,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    border: 1,
    borderRadius: 5,
    backgroundColor: StyleConstants.pictonBlue,
  },
  titleWrapper: {},
  noteTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  noteDesc: {
    color: '#1d1d1d',
    textAlign: 'justify',
  },
  iconsZone: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 4,
    marginLeft: 10,
  },
});

export default styles;
