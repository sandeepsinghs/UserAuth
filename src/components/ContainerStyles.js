import { StyleSheet, } from "react-native";
import Colors from './Colors';

const loginStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.gray_bg,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyle: {
        width: '84%',
        height: "44%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: Colors.white
    },

    textInputs: {
        width: "90%",
        height: 52,
        color: Colors.black,
        fontSize: 16,
        backgroundColor: Colors.gray_1,
        paddingLeft: 8,
        margin: 4,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    deviderStyle: {
        width: '84%',
        margin: 4,
        backgroundColor: Colors.gray_bg,
        height: 0.5,
    },

    textLabelStyle: {
        color: Colors.black,
        fontSize: 20,
        alignItems: 'center',
        margin: 8,
        fontWeight: 'bold'
    },

    buttonStyle: {
        width: "50%",
        height: 40,
        color: Colors.white,
        backgroundColor: Colors.primeryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 7
    },
    buttonText: {
        alignItems: 'center',
        padding: 10,
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },


});

const homeStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: Colors.gray_bg,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    itemData: {
        fontSize: 16,
        color: Colors.black,
        margin: 4,
        fontFamily: "Montserrat-SemiBold",
    },

    itemNormalData: {
        fontSize: 16,
        color: Colors.gray_5,
        margin: 4,
        alignItems: 'center',
        fontFamily: "Montserrat-Regular",
        justifyContent: 'center'
    },

});

export { loginStyle, homeStyle };
