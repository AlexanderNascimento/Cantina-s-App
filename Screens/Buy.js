import React, { useState } from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import Theme from '../Constants/Theme';
import Images from '../Constants/Images';


const { width, height } = Dimensions.get('screen');
export default function Buy({route, navigation}) {
    const {itensToBuy,Price,Qtn}=route.params;
    const [payment, setPayment] = useState('pix');
    const [copiedText, setCopiedText] = useState('');
    const [notify, setNotify] = useState(false);

    function copyToClipboard(text) {
        Clipboard.setString(text);
    };



    return (
        <SafeAreaView style={styles.Container}>

        <View style={styles.Header}>
            <Text>29/10/ 2005</Text>
            <Text>{Qtn}</Text>
           
        </View>


            <View style={styles.MethodsPayment}>
                <TouchableWithoutFeedback onPress={() => { setPayment('pix') }}>
                    <View style={[styles.MethodPayment, payment == 'pix' && { borderWidth: 2 }]}>
                        <Image source={Images.Pix} style={styles.Image} />
                        <Text>Pix</Text>
                    </View>
                </TouchableWithoutFeedback>
                {payment == 'pix' &&
                    <View style={styles.Pix}>
                        {notify && <Text style={styles.PixTextNotification}>Copiado</Text>}
                        <Text style={styles.PixText} onPress={() => {
                            copyToClipboard('47185604829');
                            setNotify(true)
                            setTimeout(() => {
                                setNotify(false)
                            }, 1000)
                        }}>47185604829</Text>

                    </View>
                }
                <TouchableWithoutFeedback style={[styles.MethodPayment, payment == 'money' && { borderWidth: 2 }]} onPress={() => { setPayment('money') }}>
                    <View style={[styles.MethodPayment, payment == 'money' && { borderWidth: 2 }]}>
                        <FontAwesome5 name="money-bill-wave" size={40} color="#3e9c35" />
                        <Text>dinheiro</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

                <View style={styles.Footer}>
                <TouchableOpacity >
                    <Text>Comprar</Text>
                </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    Header:{
        marginTop:30,
        marginBottom:50,
    },
    Image: {
        width: 50,
        height: 50,
    },
    MethodsPayment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 60,
        marginHorizontal: 30
    },
    MethodPayment: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Theme.COLORS.DEFAULT,
        borderRadius: 10,
        padding: 10
    },
    Pix: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    PixText: {
        fontSize: 25
    },
    PixTextNotification: {
        color: Theme.COLORS.MUTED,
        fontSize: 13
    }
})