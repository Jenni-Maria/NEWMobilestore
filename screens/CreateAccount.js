import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import { firestrore, addDoc, collection, onSnapshot, query, USERS } from '../firebase/Config';

export default function CreateAccount() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const save = async() => {
    const docRef = await addDoc(collection(firestrore, USERS), {
      text: email,
      text: password,
      //created: serverTimestamp()
    }).catch(error => console.log(error))
    setEmail('')
    setPassword('')
    console.log('New account saved.')
  }

  useEffect(() => {
    const q = query(collection(firestrore,USERS))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempUsers =[]

      querySnapshot.forEach((doc) => {
        const usersObject = {
          id: doc.id,
          text: doc.data().text,
          //created: convertFireBaseTimeStampToJS(doc.data().created)
        }
        tempUsers.push(usersObject)
      })
      setEmail(tempUsers),
      setPassword(tempUsers)
    })
    return () => {
      unsubscribe()
    }
  },[])


  return (
    
    <KeyboardAvoidingView style={styles.container}>
        
      
      <SafeAreaView>
          <ScrollView keyboardDismissMode='interactive'>


      <Text style={styles.heading}>Create your own</Text>
            <Text style={styles.fruggies}>Fruggies</Text>
            <Text style={styles.account}>account</Text>


            <Text style={styles.label}>
              Email
            </Text>
            <TextInput placeholder='Email is your username' onChangeText={text => setEmail(text)} style={styles.input} keyboardType='email-address' />
            
            <Text style={styles.label}>
              Password
            </Text>
            <TextInput placeholder='Example' onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry />
  
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
    color: '#096901',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  account: {
    color: '#096901',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  fruggies: {
    color: '#096901',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'left',
    marginTop: 10,
    //marginBottom: 30,
    marginLeft: 10,

  },
  label: {
    marginLeft: 17,
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
  
});
