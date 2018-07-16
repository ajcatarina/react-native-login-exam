import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Keyboard, Image, Text, TextInput, TouchableOpacity, Alert, Platform } from 'react-native'

import UserAPI from '../api/users.js'
import validate from '../api/validator.js'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            email: '', 
            password: '',
            emailError: '',
            passwordError: '',
            emailTextChangeValidation: false,
            passwordTextChangeValidation: false,
            signInDisabled: true,
            showLogo: true,
        }
        this.inputs = {}
    }

    componentDidMount() {
        const keyboardShow = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
        const keyboardHide = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'

        this.keyboardShowListener = Keyboard.addListener(keyboardShow, this._keyboardShow)
        this.keyboardHideListener = Keyboard.addListener(keyboardHide, this._keyboardHide)
    }

    componentWillUnmount() {
        this.keyboadShowListener.remove()
        this.keyboadHideListener.remove()
    }

    _keyboardShow = () => {
        this.setState({showLogo: false})
    }

    _keyboardHide = () => {
        this.setState({showLogo: true})
    }

    _focusNextField = (id) => {
        this.inputs[id].focus()
    }

    _handleOnChange = (field, value) => {   
        let otherField = ''
        let currentField = field+'Error'
        let currentFieldError = ''

        if (field == 'email'){
            otherField = this.state.password,
            currentFieldError = this.state.emailTextChangeValidation ? validate(field, value) : ''
        } else if (field == 'password'){
            otherField = this.state.email,
            currentFieldError = this.state.passwordTextChangeValidation ? validate(field, value) : ''
        } else {
            return
        }

        this.setState({[currentField]: currentFieldError},() => {
            otherField.length == 0 
            || value.length == 0
            || currentFieldError.length > 0
            || this.state.emailError.length > 0 
            || this.state.passwordError.length > 0 ? (
                this.setState({signInDisabled: true})
            ) : (
                this.setState({signInDisabled: false})
            )
        })
    }

    _onSignIn = () => {
        Keyboard.dismiss()

        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)

        return emailError.length > 0 || passwordError.length > 0 ? this.setState({signInDisabled: true}) : (
            UserAPI.users.find((user) => user.email == this.state.email && user.password == this.state.password) ? (
                Alert.alert(
                    'Sign In',
                    'You have successfully signed in as ' + this.state.email + '!',
                    [{text: 'OK'}],
                    {cancelable: false}
                )
            ) : (
                Alert.alert(
                    'Sign In',
                    'The username and password you entered did not match our records.',
                    [{text: 'OK', }],
                    {cancelable: false}
                )
            )
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={this.state.showLogo ? styles.logo : {flex: 0}}>
                    <Image 
                        source={require('../../assets/logo.png')}
                        style={this.state.showLogo ? '' : {height: 0}}
                        resizeMode='contain'
                    />
                </View>
                <KeyboardAvoidingView style={styles.form} behavior='padding'>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder='Input email address'
                            value={this.state.email}
                            onChangeText={(email) => {
                                this.setState({email})
                                this._handleOnChange('email', email)
                            }}
                            onEndEditing={(e) => {
                                this.setState({emailError: validate('email',e.nativeEvent.text)})
                                this.setState({emailTextChangeValidation: true})
                            }}
                            underlineColorAndroid='transparent'
                            selectionColor='#6F51A1'
                            style={[styles.input, this.state.email.length == 0 ? {fontStyle: 'italic'} : {fontStyle: 'normal'}]}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            autoFocus={false}
                            blurOnSubmit={false}
                            returnKeyType='next'
                            onSubmitEditing={() => this._focusNextField('pw')}
                        />
                        <Text style={styles.errorMessage}>{this.state.emailError}</Text>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder='Input password'
                            value={this.state.password}
                            onChangeText={(password) => {
                                this.setState({password})
                                this._handleOnChange('password', password)
                            }}
                            onEndEditing={(e) => {
                                this.setState({passwordError: validate('password',e.nativeEvent.text)})
                                this.setState({passwordTextChangeValidation: true})
                            }}
                            clearTextOnFocus={false}
                            underlineColorAndroid='transparent'
                            selectionColor='#6F51A1'
                            style={[styles.input, {fontStyle: 'italic'}]}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            ref={(pw) => this.inputs['pw'] = pw}
                            maxLength={12}
                        />
                        <Text style={styles.errorMessage}>{this.state.passwordError}</Text>
                        <View style={{height: 20}}/>
                        <TouchableOpacity 
                            onPress={this._onSignIn} 
                            disabled={this.state.signInDisabled}
                            style={[styles.button, this.state.signInDisabled ? {opacity: .2} : '']}
                        >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <View style={{height: 40}}/>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    form: {
        flex: 1,
        padding: 12,
        justifyContent: 'flex-end',
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
        fontWeight: 'bold',
        color: '#FFF'
    },
    errorMessage: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#D1021B'
    }
})


export default Login