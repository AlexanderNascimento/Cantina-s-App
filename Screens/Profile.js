import React,{UseEffect} from 'react';
import {Text,View,StyleSheet,SafeAreaView,StatusBar} from 'react-native';

export default function Profile(){
    return(
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
            <View style={styles.Header}>
                <Image />
                <View style={styles.HeaderText}>
                    <Text>Name da Pessoa</Text>
                    <Text>Rm</Text>
                </View>
            </View>

            <View style={styles.Content}>
                
            </View>
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
    }
});