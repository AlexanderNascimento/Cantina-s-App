import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, StatusBar, Modal, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Theme from '../Constants/Theme';

const { width, height } = Dimensions.get('screen');
export default function Register({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [send, setSend] = useState(true);
    const [mensage,setMensage] = useState(<ActivityIndicator color={Theme.COLORS.DEFAULT} size="large" />);
    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {send ?
                        <>
                      {mensage}
                      </>
                            : <>
                                <Text style={{ color: Theme.COLORS.DEFAULT }}>Rm já cadastrado</Text>
                                <TouchableOpacity style={styles.Button} onPress={() =>{setModalVisible(false); setSend(true)}}>
                                    <Text style={styles.ButtonText}> Ok </Text>
                                </TouchableOpacity>
                            </>
                        }
                    </View>
                </View>



            </Modal>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    rm: '',
                    password: '',
                }}
               
                onSubmit={(values, actions) => {
                 
                     RegisterUser(values,actions);
                }}
            >
                {(FormikProps) => (
                    <KeyboardAvoidingView style={styles.Form}>
                        <View style={styles.InputView}>
                            <TextInput
                                placeholder="Nome"
                                placeholderTextColor='rgba(900,008,00,0.3)'
                                style={styles.Input}
                                onChangeText={FormikProps.handleChange('name')}
                                name="name"
                                value={FormikProps.values.name}
                            />
                        </View>
                        <View style={styles.InputView}>
                            <TextInput
                                placeholder="Sobrenome"
                                placeholderTextColor='rgba(900,008,00,0.3)'
                                style={styles.Input}
                                onChangeText={FormikProps.handleChange('lastName')}
                                name="lastName"
                                value={FormikProps.values.lastName} />
                        </View>
                        <View style={styles.InputView}>
                            <TextInput
                                placeholder="RM"
                                placeholderTextColor='rgba(900,008,00,0.3)'
                                style={styles.Input}
                                onChangeText={FormikProps.handleChange('rm')}
                                name="rm"
                                value={FormikProps.values.rm} />
                        </View>
                        <View style={styles.InputView}>
                            <TextInput
                                placeholder="Senha"
                                placeholderTextColor='rgba(900,008,00,0.3)'
                                style={styles.Input}
                                onChangeText={FormikProps.handleChange('password')}
                                name="password"
                                value={FormikProps.values.password} />
                        </View>
                        <TouchableOpacity style={styles.Button} onPress={
                            FormikProps.handleSubmit}>
                            <Text style={styles.ButtonText}>Registrar</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </SafeAreaView>
    );

    async function RegisterUser(values,actions) {
        setModalVisible(true);
        const registerUser = await fetch('http://192.168.0.102:3000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                lastName: values.lastName,
                rm: values.rm,
                password: values.password
            })
        });
       
       const data = await registerUser.json();
       
      
    
       
        if(data.aproved){
            setSend(true);
            setMensage(<Text style={{color:Theme.COLORS.DEFAULT}}>Cadastro realizado com sucesso</Text>);
            setTimeout(()=>{
                setModalVisible(false);
               
                navigation.popToTop();
            },2000)
        }else{
             setSend(false);
             setModalVisible(false);
        }
       
       
    }


}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Form: {
        marginTop: 20,
    },
    InputView: {

        marginVertical: 20,
        borderBottomColor: Theme.COLORS.DEFAULT,
        borderBottomWidth: 2,
    },
    Input: {

        width: width / 1.3,
        color: Theme.COLORS.DEFAULT,
        textAlign: 'center',
    },
    Button: {
        borderColor: Theme.COLORS.DEFAULT,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
    },
    ButtonText: {
        color: Theme.COLORS.DEFAULT,
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

});

const Validations = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    Rm: yup.string().required(),
    password: yup.string().min(8).required(),
})
