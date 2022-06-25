import React from 'react';
import Routes from '../../utils/Routes';
import StyleConstants from '../../global-styles/StyleConstants';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp, RouteProp } from '@react-navigation/native';

const AddNoteButton = () => {
  const navigation = useNavigation();

  // TODO: Create a Modal to create notes instead of a screen, so with Redux create flag to display or not
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate(Routes.CreateNote)}
    >
      <FontAwesomeIcon icon="plus" size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddNoteButton;

const styles = StyleSheet.create({
  btn: {
    marginRight: 12,
  },
  icon: {
    color: StyleConstants.aqua,
  },
});
