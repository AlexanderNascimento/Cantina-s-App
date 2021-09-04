import React from 'react';
import {Text,View,SafeAreaView,KeyboardAvoidingView,
    TextInput,TouchableOpacity,TouchableWithoutFeedback,
    StyleSheet,Dimensions,StatusBar}
     from 'react-native';

     const {width, height} =Dimensions.get('screen');
export default function Login({navigation}){
    return(
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor="red" />
            <View style={styles.ViewForm}>
                <View style={styles.ViewInput}>
                    <TextInput style={styles.Input} placeholder="RM" placeholderTextColor='rgba(255,255,255,0.5)'/>

                </View>
                <View style={styles.ViewInput}>
                    <TextInput style={styles.Input}  placeholder="Senha"
                    placeholderTextColor='rgba(255,255,255,0.5)'/>
                    
                </View>
                <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate('Dashboard')}}>
                <Text style={styles.ButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
           
            <TouchableWithoutFeedback style={styles.RegisterButton}>
             <Text style={styles.ButtonText}>register</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red',
    },
    ViewForm:{
        marginVertical:20,
        
    },
    ViewInput:{
        borderBottomColor:'white',
        borderBottomWidth:1,
        marginVertical:10,
    },
    Input:{
        width:width/1.7,
        color:'white',
        textAlign:'center',
    },
    Button:{
        borderColor:'white',
        borderWidth:1,
        borderRadius:20,
        alignItems:'center',
        marginTop:20,
        paddingVertical:10,
    },
    ButtonText:{
        color:'white',
    },
    RegisterButton:{
       
        bottom:0,
        
    }
})