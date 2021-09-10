import React, { useState } from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, StatusBar, Image,
    TouchableOpacity, TouchableWithoutFeedback, Dimensions, TextInput
} from 'react-native';
import { Ionicons, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import Theme from '../Constants/Theme';
const { width, height } = Dimensions.get('screen');
export default function Profile({navigation}) {
    const [Password, setPassword] = useState(false);
    const [Email,setEmail] =useState(false);
    const [Name,setName]=useState(false);
    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
            <View style={styles.Header}>

                <View style={styles.HeaderText}>
                    <Text style={styles.HeaderName}>Cesár Jassente Pinto</Text>
                    <Text style={styles.HeaderRM}>6969666-24</Text>
                </View>
            </View>

            <View style={styles.Content}>
                <View>
                    <View style={styles.Iten}>
                        <TextInput
                            style={styles.ItenInput}
                            defaultValue='Cesár Jassente Pinto'
                            editable={Name} />
                        <TouchableWithoutFeedback
                            style={styles.ItenButton}
                            onPress={() => { setName(!Name) }}>
                            {Name ?
                                <Entypo name="check" size={24} color={Theme.COLORS.SECONDARY} />
                                : <FontAwesome5 name="pen" size={24} color={Theme.COLORS.SECONDARY} />}
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.Iten}>
                        <TextInput
                            style={styles.ItenInput}
                            defaultValue='cesar@tcc.com'
                            editable={Email} />
                        <TouchableWithoutFeedback
                            style={styles.ItenButton}
                            onPress={() => { setEmail(!Email) }}>
                            {Email ?
                                <Entypo name="check" size={24} color={Theme.COLORS.SECONDARY} />
                                : <FontAwesome5 name="pen" size={24} color={Theme.COLORS.SECONDARY} />}
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.Iten}>
                        <TextInput
                            style={styles.ItenInput}
                            defaultValue='126924'
                            secureTextEntry={!Password}
                            editable={Password} />
                        <TouchableWithoutFeedback
                            style={styles.ItenButton}
                            onPress={() => { setPassword(!Password) }}>
                            {Password ?
                                <Entypo name="check" size={24} color={Theme.COLORS.SECONDARY} />
                                : <FontAwesome5 name="pen" size={24} color={Theme.COLORS.SECONDARY} />}
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                               
                <View style={styles.Footer}>

                    <TouchableOpacity style={styles.LogOutButton} onPress={()=>{navigation.popToTop()}}>
                        <AntDesign name="logout" style={styles.Icon} size={20} color={Theme.COLORS.SECONDARY} />
                        <Text style={styles.TextButton}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

    function PasswordEdit() {

    }

}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        top: 0,
        backgroundColor: Theme.COLORS.DEFAULT
    },
    Text: {
        color: Theme.COLORS.SECONDARY,
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.COLORS.SECONDARY,
        padding: 10,
        elevation: 5,
    },
    HeaderText: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    Content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
    },
    LogOutButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: width / 3,
    },
    TextButton: {
        color: Theme.COLORS.SECONDARY,
        fontSize: 20,
        marginHorizontal: 10,
    },
    Icon: {
        marginHorizontal: 10
    },
    Footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    Iten: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: Theme.COLORS.SECONDARY,
        borderBottomWidth: 2,

        marginVertical: 20
    },
    ItenInput: {
        width: width / 1.7,
        color: Theme.COLORS.SECONDARY,
        textAlign: 'center',

    },
    HeaderName:{
        color:Theme.COLORS.DEFAULT,
        fontWeight: 'bold',
        fontSize:30
    },
    HeaderRM:{
        color:Theme.COLORS.MUTED,
    },
    Line:{
        flex: 1,
        height:1,
         borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Theme.COLORS.SECONDARY
    }
});