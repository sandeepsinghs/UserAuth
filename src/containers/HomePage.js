import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    FlatList,
    Dimensions,
    BackHandler,
    Alert,
    TouchableOpacity
} from 'react-native';
import { homeStyle } from '../components/ContainerStyles';
import UserData from '../components/UserData';
import { userDetails } from '../Actions/LoginActions'
import { connect } from 'react-redux'
import Colors from "../components/Colors";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
        };
    }

    componentDidMount() {
        this.props.getUserDetails();
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        Alert.alert(null,
            " Do you want to exit?",
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        BackHandler.removeEventListener()
                        BackHandler.exitApp()
                    }
                },
            ]);

        return true
    }

    renderItem(data) {
        let { item, index } = data;
        return (
            <View style={{ backgroundColor: Colors.white, width: Dimensions.get('window').width - 10, marginTop: 5 }}>

                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={homeStyle.itemData}>Employee Name </Text>
                    <Text style={homeStyle.itemNormalData}>{item.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Age</Text>
                        <Text style={homeStyle.itemNormalData}>{item.age}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Gender </Text>
                        <Text style={homeStyle.itemNormalData}>{item.gender}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Email-ID </Text>
                        <Text style={homeStyle.itemNormalData}>{item.email}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={homeStyle.itemData}>Mobile</Text>
                        <Text style={homeStyle.itemNormalData}>{item.phoneNo}</Text>
                    </View>
                </View>

            </View>
        )
    }

    render() {
        return (
            <View style={homeStyle.mainContainer}>
                <FlatList
                    data={this.props.employeeList}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        employeeList: state.employeeList
    }
}

const mapDispatchToProps = dispatch => ({
    getUserDetails: () => dispatch(userDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
