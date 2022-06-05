import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import StyleConstants from '../../global-styles/StyleConstants';

const BackButton = () => {
  // TODO: Hide BackButton while loading sign in/up
  const navigation = useNavigation();
  // const route = useRoute()
  return (
    <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
        icon="chevron-circle-left"
        size={24}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btn: {
    marginLeft: 12,
  },
  icon: {
    color: StyleConstants.wedgeWood,
  },
});
