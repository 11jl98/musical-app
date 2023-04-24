import { useContext } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ContextTrack } from '../../context/track';

export default function EmojiPicker() {
  const { isOpen, setIsOpen } = useContext(ContextTrack)

  return (
    <Pressable onPress={() => setIsOpen(false)} >
      {/* <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modalContent}>
          
        </View>
      </Modal> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '88%',
    width: '98%',
    backgroundColor: '#000000ba',
    borderRadius: 10,
    position: 'absolute',
    bottom: 82,
    margin:4
  },
 
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },

})