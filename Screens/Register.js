import React from 'react';
import { Text, View, SafeAreaView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet,StatusBar } from 'react-native';
import Theme from '../Constants/Theme';

const { width, height } = Dimensions.get('screen');
export default function Register({navigation}) {
    return (
        <SafeAreaView style={styles.Container}>
              <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
              <KeyboardAvoidingView style={styles.Form}>
                  <View style={styles.InputView}>
                      <TextInput placeholder="Nome" placeholderTextColor='rgba(900,008,00,0.3)' style={styles.Input}/>
                  </View>
                  <View style={styles.InputView}>
                      <TextInput placeholder="Sobrenome" placeholderTextColor='rgba(900,008,00,0.3)' style={styles.Input}/>
                  </View>
                  <View style={styles.InputView}>
                      <TextInput placeholder="RM" placeholderTextColor='rgba(900,008,00,0.3)' style={styles.Input}/>
                  </View>
                  <View style={styles.InputView}>
                      <TextInput placeholder="Senha" placeholderTextColor='rgba(900,008,00,0.3)' style={styles.Input}/>
                  </View>
                  <TouchableOpacity style={styles.Button} onPress={() =>{navigation.popToTop()}}>
                    <Text style={styles.ButtonText}>Registrar</Text>
                  </TouchableOpacity>
              </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Form:{
        marginTop:20,
    },
    InputView: {
        
         marginVertical:20,
        borderBottomColor: Theme.COLORS.DEFAULT,
        borderBottomWidth:2,
    },
    Input:{
    
        width: width /1.3,
        color: Theme.COLORS.DEFAULT,
        textAlign: 'center',
    },
    Button:{
        borderColor:Theme.COLORS.DEFAULT,
        borderWidth:2,
        borderRadius:20,
        alignItems:'center',
        marginTop:20,
        paddingVertical:10,
    },
    ButtonText:{
        color:Theme.COLORS.DEFAULT,
    }
   
})