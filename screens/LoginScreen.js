import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 
import { auth, signInWithEmailAndPassword, signOut } from '../firebase/Config'
//import { useNavigation } from '@react-navigation/native';

    const LoginScreen = (props) => { 
    const { navigation, route } = props; 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [loginMessage, setLoginMessage] = useState({ message: '', color: 'black' });

console.log('Navigation prop in LoginScreen:', navigation);

    const handleLogin = async () => { 
console.log('handle login');

    try { 
        await signInWithEmailAndPassword(auth, email, password); 
        setLoginMessage({ message: 'Login successed!', color: 'green' }); 
            console.log('logging in'); 
        navigation.navigate('Create Account', { isAuthenticated: true }); 
            console.log('LOGGING IN'); 
    } catch (error) { 
    let errorMessage = 'Login failed'; 
    if (error.code === 'auth/user-not-found') { 
errorMessage = 'Login failed: User not found. Check your email address.';

    } else if (error.code === 'auth/wrong-password') { 
errorMessage = 'Login failed: Incorrect password. Check your password.'; 
    } 
setLoginMessage({ message: errorMessage, color: 'red' }); 
} 
}; 
    const handleLogout = async () => { 
        console.log('isAuthenticated in handleLogout:', route.params?.isAuthenticated); 
        console.log('Logging out...'); // Lisää tämä rivi 
        await signOut(auth); 
        console.log('Logged out successfully.'); // Lisää tämä rivi 
        setLoginMessage({ message: '', color: 'black' }); 
        navigation.navigate('Home', { isAuthenticated: false }); 
};

console.log('Rendering LoginScreen...');

return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>
            Log in
        </Text> 
        <TextInput 
            placeholder="Email" 
            value={email} 
            onChangeText={(text) => setEmail(text)} 
            style={styles.input} 
        /> 
        <TextInput 
            placeholder="Password" 
            value={password} 
            onChangeText={(text) => setPassword(text)} 
            secureTextEntry 
            style={styles.input} 
        /> 
        <Button 
            title="Log in" 
            onPress={handleLogin} 
        /> 
        <Text
            style={[styles.message,
            { color: loginMessage.color }]}>
                {loginMessage.message}
        </Text> 
            {route.params?.isAuthenticated ? ( 
            <Button
                title="Log Out"
                onPress={handleLogout}/> 
            ) : null} 
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

export default LoginScreen;
