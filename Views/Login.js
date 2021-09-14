import React,{useState,useEffect} from 'react';
import {
    Text, View, SafeAreaView, KeyboardAvoidingView,
    TextInput, TouchableOpacity, TouchableWithoutFeedback,
    StyleSheet, Dimensions, StatusBar,Modal,ActivityIndicator 
}
    from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import Theme from '../Constants/Theme';

const { width, height } = Dimensions.get('screen');
export default function Login({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

useEffect(()=>{
    async function logIn(){
        setModalVisible(true);
        let response = await AsyncStorage.getItem('userData');
        let json= await JSON.parse(response);
        if(json !== null){
            navigation.navigate('Dashboard');
        }else{
            setModalVisible(false);
        }
    }
    logIn();
},[]);

    return (
        <SafeAreaView style={styles.Container}>
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator color={Theme.COLORS.DEFAULT} size="large" />
                    </View>
                </View>



            </Modal>
            <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
            <Formik
                initialValues={{
                    rm: '',
                    password: ''
                }}
                onSubmit={(values,actions)=>{
                    Login(values,actions);
                }}>
                {(FormikProps) => (
                    <KeyboardAvoidingView style={styles.ViewForm}>
                        <View style={styles.ViewInput}>
                            <TextInput
                                style={styles.Input}
                                placeholder="RM"
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                onChangeText={FormikProps.handleChange('rm')}
                                name="rm"
                                value={FormikProps.values.rm} />

                        </View>
                        <View style={styles.ViewInput}>
                            <TextInput
                                style={styles.Input}
                                placeholder="Senha"
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                onChangeText={FormikProps.handleChange('password')}
                                name="password"
                                value={FormikProps.values.password} />

                        </View>
                        <TouchableOpacity style={styles.Button} onPress={
                            FormikProps.handleSubmit
                        }>
                            <Text style={styles.ButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
            <TouchableWithoutFeedback style={styles.RegisterButton} onPress={() => { navigation.navigate('Register') }}>
                <Text style={styles.ButtonText}>register</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
async function Login(values,actions){
    setModalVisible(true);
        const login = await fetch('http://192.168.0.101:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                rm: values.rm,
                password: values.password
            })
        });
       
       const data = await login.json();

       if(data.aproved){
           const user= JSON.stringify(data.message);
            await AsyncStorage.setItem('userData', user);
            actions.resetForm();
           navigation.navigate('Dashboard');
       }
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.COLORS.DEFAULT,
    },
    ViewForm: {
        marginVertical: 20,

    },
    ViewInput: {
        borderBottomColor: Theme.COLORS.SECONDARY,
        borderBottomWidth: 2,
        marginVertical: 10,
    },
    Input: {
        width: width / 1.7,
        color: Theme.COLORS.SECONDARY,
        textAlign: 'center',
    },
    Button: {
        borderColor: Theme.COLORS.SECONDARY,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
    },
    ButtonText: {
        color: Theme.COLORS.SECONDARY,
    },
    RegisterButton: {

        bottom: 0,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})