import React from 'react'
import { ArrowLeft, Bold, Mail, LockKeyhole } from 'lucide-react-native';
import { StyleSheet, View, Text, Button, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const LoginScreen = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>

            <View style={{ paddingHorizontal: 40 }}>

            </View>

            {/* Login Screen Top Heading */}
            <TouchableOpacity size={20} style={{
                marginHorizontal: 20,
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#2463EB',
                padding: 5,
                alignSelf: 'flex-start',
                fontWeight:'normal'
            }} ><ArrowLeft style={{ color: 'white' }} /></TouchableOpacity>

            <Text style={styles.heading}>Go ahead and set up {"\n"} your account</Text>
            <Text style={{
                color: '#8994A7', marginTop: 5, marginHorizontal: 20, marginTop: 5,
                marginBottom: 30
            }}>Sign in-up to enjoy the st managing experience</Text>

            {/* White panel with login details  */}
            <View style={styles.whitePanel}>
                <Button title='Login'></Button>

                <View style={styles.inputContainer}>
                    < Mail style={{ color: 'lightblue' }} />
                    <TextInput style={{ marginLeft: 7 }}
                        placeholder='E-mail ID'
                        keyboardType="email-address"
                        autoCapitalize="none" />
                </View>
                <View style={styles.inputContainer}>
                    <LockKeyhole style={{ color: 'lightblue' }} />
                    <TextInput style={{ marginLeft: 7 }}
                        placeholder='Password'
                        keyboardType="password"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Pressable
                        onPress={() => setChecked(!checked)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <View
                            style={{
                                width: 22,
                                height: 22,
                                borderWidth: 2,
                                borderColor: '#36A2EB',
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: checked ? '#36A2EB' : 'white',
                            }}
                        >
                            {checked && (
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
                            )}
                        </View>

                        <Text style={{ color: 'grey', fontWeight: 'bold' }}>Remember me</Text>
                    </Pressable>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Forgot Password?</Text>
                </View>

                <Pressable
                    style={({ pressed }) => [
                        styles.loginButton,
                        pressed && { opacity: 0.7 },
                    ]}>

                    <Text style={styles.loginText}>Login</Text>
                </Pressable>

                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.dividerText}>or login with</Text>
                    <View style={styles.line} />
                </View>

                {/* login optons */}
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <View style={styles.loginOption}>
                        <Image source={require('../assets/google.png')}
                            style={styles.logo}
                            resizeMode="contain" />
                        <Text >Google</Text>

                    </View>

                    <View style={styles.loginOption}>
                        <Image source={require('../assets/apple.png')}
                            style={styles.logo}
                            resizeMode="contain" />
                        <Text >Apple</Text>

                    </View>
                </View>

            </View>


        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        paddingTop: 30
    },
    ArrowLeft: {
        paddingVertical: 40,
        color: 'white'
    },
    heading: {
        marginTop: 50,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 20
    },
    whitePanel: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 25,
        borderRadius: 50,
        paddingVertical: 8,
        letterSpacing: 2,
    },
    loginButton: {
        backgroundColor: '#2463EB',
        paddingVertical: 18,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 35
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 15,
        fontSize: 13,
        color: '#777',
        fontWeight: '600',
        letterSpacing: 1,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    loginOption: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 45,
        marginTop: 25,
        borderRadius: 50,
        paddingVertical: 13,
        letterSpacing: 2,
        justifyContent: 'space-between'
    }

})