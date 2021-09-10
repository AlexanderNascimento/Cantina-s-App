import React, { useState, useRef } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, StatusBar, View, Dimensions, FlatList, TouchableWithoutFeedback, Animated } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import Theme from '../Constants/Theme';
import { PanGestureHandler } from 'react-native-gesture-handler';

import homeJson from '../testes/home';
import classi from '../testes/Classifications';

const { width, height } = Dimensions.get('screen');

export default function Home() {

    const [clas, setClas] = useState(classi); //classificações dos itens
    const [data, setData] = useState(homeJson); //itens
    const [helper, setHelper] = useState(0) //quantidade dde itens selecionados 
    const [price, setPrice] = useState(0); //preço total
    const [itensToBuy, setItensToBuy] = useState([]); //lista de itens selecionados
    const [dontAsk, setDontAsk] = useState([]);
    const [n, setN] = useState(0);
    const sizeHeight = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar barStyle='light-content' backgroundColor={Theme.COLORS.DEFAULT} />
            <View style={styles.HeaderBar}>
                <View style={styles.ViewInput}>
                    <TextInput style={styles.Input} placeholder="Nome do Lanche" placeholderTextColor={Theme.COLORS.PLACEHOLDER}
                        onChangeText={text => { Searching(text) }} />
                </View>
            </View>
            <View style={styles.Content}>
                <FlatList
                    data={clas}
                    keyExtractor={iten => { 'Key'+iten.id }}
                    renderItem={({ item }) => (
                        <ClassiList item={item} />)}
                />
            </View>
           
                <TouchableWithoutFeedback onPress={() => { CarOpen() }}>
                    <Animated.View style={[styles.Car, { height: sizeHeight }]}>
                        <View style={styles.CarHeader}>
                            <Text style={styles.CarText}>{helper}</Text>
                            <Text style={[styles.Total, styles.CarText]}>Total</Text>
                            <Text style={styles.CarText}>R$ {price}</Text>
                        </View>
                        <FlatList
                            data={itensToBuy}
                            keyExtractor={iten => { iten.id }}
                            renderItem={({ item }) => (
                                <CarList item={item} />)}
                        />

                        <TouchableOpacity style={styles.Button} >
                            <Text style={styles.ButtonText}>Comprar</Text>
                        </TouchableOpacity>
                    </Animated.View>

                </TouchableWithoutFeedback>
           
        </SafeAreaView>
    );
    function ClassiList({ item }) {
        const list = data.filter(i => i.classification == item.id)

        if (list.length == 0) {
            return (<View></View>)
        } else {
            return (
                <>

                    <View style={styles.Classification}>
                        <Text style={styles.ClassificationText}>{item.name}</Text>
                        <TouchableWithoutFeedback onPress={() => { Open(item) }}>
                            <Feather name="arrow-up" size={30} color={Theme.COLORS.DEFAULT} />
                        </TouchableWithoutFeedback>
                    </View>

                    {!item.selected &&
                        list.map(i => (

                            <View style={styles.Iten}>
                                <View style={styles.ItenText}>
                                    <View style={styles.ItenHeader}>
                                        <Text style={styles.ItenTittle}>{i.name}</Text>
                                        <Text style={styles.ItenPrice}>{i.price}</Text>
                                    </View>

                                    <Text style={styles.ItenDescription}>{i.description}</Text>
                                </View>

                                <TouchableOpacity style={styles.ItenButton} onPress={() => { Select(i) }}>
                                    <Ionicons name="add" size={25} color={Theme.COLORS.SECONDARY} />
                                </TouchableOpacity>
                            </View>

                        ))}
                </>);
        }
    }
    function CarList({ item }) {
        return (

            <View style={styles.CarContent}>
                <Text style={[styles.CarText, { fontSize: 20 }]}>{item.name}</Text>
                <Text style={[styles.CarText, { fontSize: 15 }]}>{item.price}</Text>
                <View style={styles.CarQuantidade}>
                    <TouchableWithoutFeedback onPress={() => { PlusIten(item) }}>
                        <Text style={[styles.CarText, { fontSize: 25 }]}>+</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.CarText}>{item.quantidade}</Text>
                    <TouchableWithoutFeedback onPress={() => { SubIten(item) }}>
                        <Text style={[styles.CarText, { fontSize: 25 }]}>-</Text>
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={() => { RemoveItem(item) }} >
                    <MaterialIcons name="cancel" size={25} color={Theme.COLORS.SECONDARY} />
                </TouchableWithoutFeedback>
            </View>
        );
    }

    function RemoveItem(itemSelected) {
        const newData = itensToBuy.map(item => {
            if (itemSelected.id == item.id) {
                setHelper(helper - itemSelected.quantidade);
                if (price - (itemSelected.price * itemSelected.quantidade) <= 0) {
                    setPrice(0);
                } else {
                    setPrice(price - (itemSelected.price * itemSelected.quantidade));
                }
                return {
                    ...itemSelected,
                    quantidade: 0,
                }

            }
            return {
                ...item,
                quantidade: item.quantidade
            }
        });
        const Gambiarra = newData.filter(i => i.quantidade > 0);
        if (Gambiarra.length > 0) {
            setItensToBuy(Gambiarra);
        } else {
            CloseCar(true);
        }
    }
    function SubIten(itemSelected) {
        const newData = itensToBuy.map(item => {
            if (itemSelected.id == item.id) {
                return {
                    ...itemSelected,
                    quantidade: itemSelected.quantidade - 1,
                }

            }
            return {
                ...item,
                quantidade: item.quantidade
            }
        });
        const Gambiarra = newData.filter(i => i.quantidade > 0);

        if (Gambiarra.length > 0) {
            setItensToBuy(Gambiarra);
        } else {
            CloseCar(true);
        }

        if (price - itemSelected.price <= 0) {
            setPrice(0);

        } else {
            setPrice(price - itemSelected.price);
        }
        setHelper(helper - 1);

    }
    function PlusIten(itemSelected) {
        const newData = itensToBuy.map(item => {
            if (itemSelected.id == item.id) {
                return {
                    ...itemSelected,
                    quantidade: itemSelected.quantidade + 1,
                }
            }
            return {
                ...item,
                quantidade: item.quantidade
            }
        });

        setItensToBuy(newData);
        setPrice(price + itemSelected.price);
        setHelper(helper + 1);

    }


    function Searching(text) {

        if (text.length > 0) {
            n == 0 && setDontAsk(data);
            setN(n + 1);
            setData(data.filter(i => (
                i.name.toLowerCase().includes(text.toLowerCase())
            )));
        } else {
            setData(dontAsk);
            setN(0);
        }
    }
    function Select(itemSelected) {

        const newData = data.map(item => {
            if (item.id == itemSelected.id) {
                if (item.quantidade >= 1) {
                    return {
                        ...item,
                        quantidade: item.quantidade + 1
                    }
                }
                return {
                    ...item,

                    quantidade: 1
                }
            }
            return {
                ...item,
                quantidade: item.quantidade
            }

        })


        setData(newData);
        setPrice(price + itemSelected.price);
        setHelper(helper + 1)

        Animated.timing(sizeHeight, {
            toValue: 50,
            duration: 2000,
            useNativeDriver: false
        }).start();


    }
    function Open(SelectedItem) {
        const newData = clas.map(item => {
            if (item.id == SelectedItem.id) {
                return {
                    ...item,
                    selected: !item.selected
                }
            }
            return {
                ...item,
                selected: item.selected
            }
        })
        setClas(newData);
    }
    function CarOpen() {
        setItensToBuy(data.filter(i => i.quantidade > 0));
        Animated.timing(sizeHeight, {
            toValue: height / 1.7,
            duration: 2500,
            useNativeDriver: false
        }).start();
    }
    function CloseCar(noItens = false) {
        if (noItens) {
            setItensToBuy([]);
            setData(homeJson);
        }
        Animated.timing(sizeHeight, {
            toValue: noItens ? 0 : 50,
            duration: 2500,
            useNativeDriver: false
        }).start();

    }


}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    HeaderBar: {
        top: 0,
        width: width,
        maxHeight: 50,
        height: 50,
        backgroundColor: Theme.COLORS.DEFAULT,
        justifyContent: 'center',
        position: 'relative',
        elevation: 5,


    },
    ViewInput: {
        borderBottomColor: Theme.COLORS.SECONDARY,
        borderBottomWidth: 2,
        width: width / 1.5,
        paddingHorizontal: 10,
        marginHorizontal: 20,
    },
    Input: {
        color: Theme.COLORS.SECONDARY,

    },
    Content: {
        flex: 1,
        marginTop: 15,
    },
    Iten: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginVertical: 5,
    },
    ItenText: {
        flexDirection: 'column'
    },
    ItenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    ItenTittle: {
        color: Theme.COLORS.DEFAULT,
        fontSize: 25
    },
    ItenPrice: {
        color: Theme.COLORS.DEFAULT,
        fontSize: 18,
    },
    ItenDescription: {
        color: Theme.COLORS.MUTED,
        fontSize: 13
    },
    ItenButton: {
        borderRadius: 50,
        backgroundColor: Theme.COLORS.DEFAULT,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Car: {
        backgroundColor: Theme.COLORS.DEFAULT,
        width: width,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        color: 'white',

    },
    CarHeader: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    CarText: {
        color: Theme.COLORS.SECONDARY,

    },
    Total: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    Classification: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: width - 20
    },
    ClassificationText: {
        color: Theme.COLORS.DEFAULT,
        fontWeight: 'bold',
        fontSize: 30
    },
    CarContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
    },
    CarQuantidade: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    Button: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        margin: 20,
        paddingVertical: 10,
    },
    ButtonText: {
        color: 'white',
    }

})