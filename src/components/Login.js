import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Keyboard, Image, Text, TextInput, TouchableOpacity } from 'react-native'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            email: '', 
            password: '',
            signInDisabled: false,
            showLogo: 'flex',
            emailError: 'no email error',
            passwordError: 'no password error',
        }
        this.inputs = {}
    }

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow)
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide)
    }

    componentWillUnmount() {
        this.keyboadDidShowListener.remove()
        this.keyboadDidHideListener.remove()
    }

    _keyboardWillShow = () => {
        this.setState({showLogo: 'none'})
    }

    _keyboardWillHide = () => {
        this.setState({showLogo: 'flex'})
    }

    _focusNextField = (id) => {
        this.inputs[id].focus()
    }

    _onSignIn = () => {
        Keyboard.dismiss()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCenter}>
                    <Image 
                        source={require('../../assets/logo.png')}
                        style={{display: this.state.showLogo}}
                    />
                </View>
                <KeyboardAvoidingView style={styles.form} behavior='padding' keyboardVerticalOffset={20}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Input email address'
                        value={this.state.email}
                        onChange={(email) => this.setState({email})}
                        autoFocus={false}
                        blurOnSubmit={false}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        returnKeyType='next'
                        underlineColorAndroid='transparent'
                        selectionColor='#6F51A1'
                        onSubmitEditing={() => this._focusNextField('pw')}
                        style={styles.input}
                    />
                    <Text style={styles.errorMessage}>{this.state.emailError}</Text>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Input password'
                        value={this.state.password}
                        onChange={(password) => this.setState({password})}
                        ref={(pw) => this.inputs['pw'] = pw}
                        maxLength={12}
                        underlineColorAndroid='transparent'
                        selectionColor='#6F51A1'
                        style={styles.input}
                    />
                    <Text style={styles.errorMessage}>{this.state.emailError}</Text>
                    <TouchableOpacity 
                        onPress={this._onSignIn} 
                        disabled={this.state.signInDisabled}
                        style={styles.button}
                    >
                    <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 18,
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#6F51A1',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#6F51A1',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    errorMessage: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#D1021B'
    }
})


export default Login