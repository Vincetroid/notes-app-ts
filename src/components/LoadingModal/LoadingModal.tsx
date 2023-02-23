import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';
import StyleConstants from '../../global-styles/StyleConstants';
import styles from './LoadingModal.styles';

interface ModalProps {
  loading: boolean;
  loadingMessage?: string;
  size?: number | 'small' | 'large' | undefined;
}

const LoadingModal = ({
  loading = false,
  loadingMessage = 'Loading...',
  size = 'small',
}: ModalProps) => {
  return (
    <Modal isVisible={loading} style={styles.modal}>
      <ActivityIndicator size={size} color={StyleConstants.putty} />
      <Text style={styles.modalText}>{loadingMessage}</Text>
    </Modal>
  );
};

export default LoadingModal;
