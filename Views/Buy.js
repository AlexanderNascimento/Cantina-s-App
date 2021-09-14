import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import Theme from '../Constants/Theme';
import Images from '../Constants/Images';


const { width, height } = Dimensions.get('screen');
export default function Buy({ route, navigation }) {
    const { itensToBuy, Price, Qtn } = route.params;
    const [payment, setPayment] = useState('pix');
    const [copiedText, setCopiedText] = useState('');
    const [notify, setNotify] = useState(false);


    function DataAtual() {
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        let data = new Date();
        let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
        return dataFormatada;
    }

    function copyToClipboard(text) {
        Clipboard.setString(text);
    };

    return (
        <SafeAreaView style={styles.Container}>

            <View style={styles.Header}>
                <Text style={styles.TextData}>{DataAtual()}</Text>
                <Text style={styles.TextQtn}>{Qtn} itens selecionados</Text>

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
            <View style={styles.ListItens}>
                {itensToBuy.map(i => (
                    <View style={styles.Itens}>
                        <View style={styles.ItensInfo}>
                            <Text style={styles.ItenQtn}>{i.quantidade} </Text>
                            <Text style={styles.ItenName}>{i.name} </Text>
                        </View>

                        <Text style={styles.ItenPrice}>{i.price} </Text>
                    </View>
                ))}
            </View>
            <View style={styles.Footer}>
                <View style={styles.Total}>
                    <Text style={styles.TotalText}>Total : R${Price}</Text>
                </View>
                <TouchableOpacity style={styles.Button} onPress={() => { navigation.navigate('Home') }}>
                    <Text style={styles.ButtonText}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Header: {
        marginTop: 30,
        marginBottom: 50,
        width: width - 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    TextData: {
        color: Theme.COLORS.DEFAULT,
        fontSize: 20
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
    },
    ListItens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Itens: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Theme.COLORS.MUTED

    },
    ItensInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    ItenQtn: {
        marginLeft: 50,
        borderRadius: 40,
        width: 20,
        height: 20,
        textAlign: 'center',
        backgroundColor: Theme.COLORS.DEFAULT,
        color: Theme.COLORS.SECONDARY,
    },
    ItenName: {
        marginLeft: 5,
        color: Theme.COLORS.DEFAULT,
        fontSize: 20
    },
    ItenPrice: {
        marginRight: 50
    },
    Footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: Theme.COLORS.DEFAULT,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: width / 3 - 40,
        marginBottom: 20,

    },
    ButtonText: {
        color: Theme.COLORS.DEFAULT,
        fontSize: 20,

    },
    Total: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,

    },
    TotalText: {
        textAlign: 'center',
        fontSize: 40,
        color: Theme.COLORS.DEFAULT
    }
})