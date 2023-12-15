import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TextInput, Button } from 'react-native';

export default function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);

  function close() {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <Modal
      visible={modalVisible}
      onRequestClose = {close}
      >
        <View style={styles.modal}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder='Email is your username' style={styles.input} keyboardType='email-address' />

        <Text style={styles.label}>Password</Text>
            <TextInput placeholder='Example' style={styles.input} secureTextEntry />
            <Button title='Submit'/>
        

        <Pressable onPress={() => {
          setModalVisible(false);
      }}>
        <Text style={styles.close}>Go back</Text>
      </Pressable>
      </View>
    </Modal>

    <Pressable onPress={() => {
      setModalVisible(true);
    }}>
      <Text>Paina</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modal: {
    marginTop: 100,
    padding: 20,
    backgroundColor: '#a4e09f',
    justifyContent: 'center',
    //alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
    close: {
      margin: 8,
      marginTop: 20,
      color: '#096901',
      fontWeight: 'bold',
    },
    input: {
      //fontStyle: 'italic',
      color: '#096901',
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#F0F0F0',
      backgroundColor: '#FAFAFA',
    },
    label: {
      color: '#096901',
      margin: 8,
      fontWeight: 'bold',
    },
  }
);
