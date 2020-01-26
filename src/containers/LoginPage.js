import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    BackHandler,
    ActivityIndicator,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import { loginStyle } from '../components/ContainerStyles';
import { Card, } from 'native-base';
import UserData from '../components/UserData';
import { loginUser } from '../Actions/LoginActions'
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        BackHandler.removeEventListener()
        BackHandler.exitApp()
        return true
    }

    userLogin() {
        console.log(" User login status is as " + this.props.isValidUser);
        let { username, password } = this.state;
        if (username == '') {
            alert("Enter Valid User name");
        } else if (password == '') {
            alert("Enter Valid password");
        } else {
            this.props.loginUser(username, password);
            console.log(" user name " + username + " and password " + password + " and isValid user " + this.props.isValidUser);
            if ((username == UserData.UserLogin.username) && (password == UserData.UserLogin.password)) {
                this.props.navigation.navigate('HomePage');
                ToastAndroid.showWithGravity(
                    'Login Sucessful',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            } else {
                ToastAndroid.showWithGravity(
                    'User name and passwod is not valid. Try again',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            }
        }
    }

    render() {
        return (
            <View style={loginStyle.mainContainer}>
                <Card style={loginStyle.cardStyle}>
                    <Text style={loginStyle.textLabelStyle}>{"Login Page"}</Text>
                    <TextInput
                        placeholder='Username'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType='email-address'
                        value={this.state.username}
                        onChangeText={(text) => this.setState({ username: text })}
                        style={loginStyle.textInputs} />

                    <View style={loginStyle.deviderStyle} />

                    <TextInput
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        style={loginStyle.textInputs} />

                    <TouchableOpacity style={loginStyle.buttonStyle}
                        onPress={() => this.userLogin()}
                    >
                        <Text style={loginStyle.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: (username, password) => dispatch(loginUser(username, password))
})

const mapStateToProps = (state) => {
    return {
        isValidUser: state.isValidUser,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)


