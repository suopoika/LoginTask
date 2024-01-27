import React, { useState } from 'react';  // Add import for useState
import { Appbar } from 'react-native-paper';

import MainAppbar from '../components/MainAppbar';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showError, setShowError] = useState(false);

    const validateAndSubmit = () => {
        setShowError(true);
        if (formData.username.length > 0 && formData.password.length > 0) {
            setFormData({ username: '', password: '' });
            setShowError(false);
        }
    };

    return (
        <>
            <MainAppbar title="Login" />
            <View style={styles.container}>
                <TextInput
                    label="Username"
                    style={styles.input_field}
                    value={formData.username}
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                />
                <TextInput
                    label="Password"
                    style={styles.input_field}
                    keyboardType='visible-password'
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                />
                <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>
                    Submit
                </Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 24,
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: 16,
        borderBottomColor: '#2196f3',
    },
    button: {
        margin: 16,
        backgroundColor: '#2196f3',
    },
});
