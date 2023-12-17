import React, { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { auth } from './firebase'; // Import your Firebase configuration

import { useRoute } from '@react-navigation/native';

const MyAccountScreen = () => {

const route = useRoute();

const { userEmail } = route.params || {};

const [newPassword, setNewPassword] = useState('');

const [changePasswordMessage, setChangePasswordMessage] = useState({ message: '', color: 'black' });

const handleChangePassword = async () => {

try {

const user = auth.currentUser;

await user.updatePassword(newPassword);

setChangePasswordMessage({ message: 'Password changed successfully!', color: 'green' });

} catch (error) {

setChangePasswordMessage({ message: 'Failed to change password. ' + error.message, color: 'red' });

}

};

return (

<View style={styles.container}>

<Text style={styles.title}>Change Password</Text>

{userEmail && <Text style={styles.emailText}>Email: {userEmail}</Text>}

{/* Password change section */}

<TextInput

placeholder="Enter New Password"

value={newPassword}

onChangeText={(text) => setNewPassword(text)}

secureTextEntry

style={styles.input}

/>

<Button title="Change Password" onPress={handleChangePassword} />

<Text style={[styles.message, { color: changePasswordMessage.color }]}>

{changePasswordMessage.message}

</Text>

</View>

);

};

const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

padding: 16,

},

title: {

fontSize: 24,

marginBottom: 16,

},

emailText: {

fontSize: 18,

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

message: {

marginTop: 16,

},

});

export default MyAccountScreen;