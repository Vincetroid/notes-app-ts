import React from 'react';
import BackButton from '../components/BackButton/BackButton';
import StyleConstants from '../global-styles/StyleConstants';

const CommonNavigationOptions = Object.freeze({
  headerLeft: () => <BackButton />,
  headerShadowVisible: true,
  headerStyle: {
    backgroundColor: StyleConstants.pictonBlue,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 16,
  },
  headerTintColor: StyleConstants.deepGray,
  headerTitleStyle: {
    fontSize: 24,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

export default CommonNavigationOptions;
