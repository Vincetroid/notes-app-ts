import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 16,
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    border: 1,
    borderRadius: 5,
    backgroundColor: 'aquamarine',
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
});

export default styles;
