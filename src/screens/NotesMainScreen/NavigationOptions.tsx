import React from 'react';
import AddNoteButton from '../../components/AddNoteButton/AddNoteButton';

const NavigationOptions = {
  title: 'Notes',
  headerLeft: () => null,
  headerRight: () => <AddNoteButton />,
};

export default NavigationOptions;
