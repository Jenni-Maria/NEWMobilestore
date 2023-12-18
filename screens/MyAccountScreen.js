import React, { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import { getAuth, updatePassword } from 'firebase/auth';

const MyAccountScreen = () => {

const auth = getAuth();

const [newPassword, setNewPassword] = useState('');

const handleChangePassword = async () => {

try {

await updatePassword(auth.currentUser, newPassword);

console.log('Password updated successfully');

Alert.alert('Success', 'Password updated successfully!');

} catch (error) {

console.error('Error updating password:', error.message);

Alert.alert('Error', 'Failed to update password. Please try again.');

}

};

return (

<View style={styles.container}>

<View style={styles.titleBox}>

<Text style={styles.title}>My Account</Text>

</View>

{auth.currentUser ? (

<>

<View style={styles.emailBox}>

<Text style={styles.emailLabel}>Email:</Text>

<Text style={styles.emailText}>{auth.currentUser.email}</Text>

</View>

<View style={styles.changePasswordBox}>

<Text style={styles.changePasswordTitle}>Change Password</Text>

<TextInput

style={styles.input}

placeholder="New Password"

secureTextEntry

value={newPassword}

onChangeText={text => setNewPassword(text)}

/>

<Button title="Change Password" onPress={handleChangePassword} />

</View>

</>

) : (

<Text style={styles.signInMessage}>

Please sign in or create an account to access this feature.

</Text>

)}

</View>

);

};

const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: 'flex-start',

alignItems: 'center',

padding: 16,

},

titleBox: {

backgroundColor: '#6ea133',

padding: 16,

borderRadius: 10,

marginBottom: 16,

},

title: {

fontSize: 24,

fontWeight: 'bold',

color: '#fff',

},

emailBox: {

backgroundColor: '#e0e0e0',

padding: 16,

borderRadius: 10,

marginBottom: 16,

width: '100%',

},

emailLabel: {

fontSize: 16,

fontWeight: 'bold',

},

emailText: {

fontSize: 16,

},

changePasswordBox: {

backgroundColor: '#e0e0e0',

padding: 16,

borderRadius: 10,

marginBottom: 16,

width: '100%',

},

changePasswordTitle: {

fontSize: 20,

fontWeight: 'bold',

marginBottom: 8,

},

input: {

height: 40,

borderColor: 'gray',

borderWidth: 1,

marginBottom: 16,

padding: 8,

width: '100%',

},

signInMessage: {

marginTop: 20,

fontSize: 16,

textAlign: 'center',

},

});

export default MyAccountScreen