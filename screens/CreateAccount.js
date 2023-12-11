import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';

export default function CreateAccount() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const save = async() => {
    const docRef = await addDoc(collection(firestrore, USERS), {
      text: email,
      text:password,
      created: serverTimestamp()
    }).catch(error => console.log(error))
    setEmail('')
    setPassword('')
    console.log('New account saved.')
  }

  /*useEffect(() => {

    

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempUsers =[]

      querySnapshot.forEach((doc) => {
        const usersObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFireBaseTimeStampToJS(doc.data().created)
        }
        tempUsers.push(usersObject)
      })
      setUsers(tempUsers)
    })
    return () => {
      unsubscribe()
    }
  },[])*/


  return (
    
    <KeyboardAvoidingView
      style={styles.container}>
      
      <SafeAreaView>
          <ScrollView keyboardDismissMode='interactive'>


      <Text style={styles.heading}>
              Create your account
            </Text>

            {/*<Text style={styles.label}>
              First name
            </Text>
            <TextInput placeholder='Type first name here...' style={styles.input}/>

            <Text style= {styles.label}>
              Phone
            </Text>
            <TextInput placeholder='050 123 4567' style={styles.input}
            keyboardType='phone-pad' />

            <Text style={styles.label}>
              Last name
            </Text>
            <TextInput placeholder='Type last name here...' style={styles.input}/>*/}

            <Text style={styles.label}>
              Email
            </Text>
            <TextInput placeholder='Email is your username' value={email} onChange={String => setEmail(String)} style={styles.input} keyboardType='email-address' />
            
            <Text style={styles.label}>
              Password
            </Text>
            <TextInput placeholder='Example' value={password} onChange={String => setPassword(String)} style={styles.input} secureTextEntry />

            <Button title='Submit' onPress={save}/>
            </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
  heading: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
  },
  label: {
    margin: 8,
  },
  input: {
    //fontStyle: 'italic',
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#F0F0F0',
    backgroundColor: '#FAFAFA',
  },
});
