import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LINE, VIETJET } from '../../resource/assets/images';

interface Item {
    nameFrom: string,
    timeFrom: string,
    nameTo: string,
    timeTo: string,
    price: string,
    timecount: string,
    vietJet:number
}


const ItemListPlane: React.FC<Item> = (props: any) => {

    const { nameFrom, timeFrom, nameTo, timeTo, price, timecount, vietJet } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.item2}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{timeFrom}</Text>
                        <View style={{ margin: 10 }}>
                            <Image source={{uri: LINE}} style={styles.line} />
                            <Text style={{ textAlign: 'center' }}>{timecount}</Text>
                        </View>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{timeTo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>{nameFrom}</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>{nameTo}</Text>
                    </View>

                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>{price}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 5 }}>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri: VIETJET}} style={styles.vietjet} />
                    <Text style={{marginStart:10}}>Vietjet</Text>
                </View>

                <Text style={{color:'orange'}}>Còn lại {vietJet}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default ItemListPlane


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        height: 'auto',
        borderRadius: 10,
    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    vietjet:{
        width:22,
        height:20
    },
    line:{
        width:64,
        height:5
    }
});