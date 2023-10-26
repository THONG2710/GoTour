import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Item{
    nameFrom:string,
    timeFrom:string,
    nameTo:string,
    timeTo:string,
    price:string,
    timecount:string
}


const ItemListTrain:React.FC<Item>= (props:any) => {
  
    const {nameFrom,timeFrom,nameTo,timeTo,price,timecount}=props;

    return (
        <View>
            <View style={styles.item2}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{timeFrom}</Text>
                        <View style={{ margin: 10 }}>
                            <Image source={require('../img/line.png')} />
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

        </View>
    )
}

export default ItemListTrain


const styles = StyleSheet.create({
    item2: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#8F8F8F',
        borderRadius: 10,
        height: 70,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
});