import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FRAME_HOTEL, ICON_MARKER2, RATING } from '../../resource/assets/images';
import { Shadow } from 'react-native-shadow-2';

interface Item {
    nameHotel: string,
    countRating: number,
    location: string,
    price: string,

}


const ItemListHotel: React.FC<Item> = (props: any) => {

    const { nameHotel, countRating, location, price } = props;

    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image source={{ uri: FRAME_HOTEL }} style={styles.img} />
                    <View style={styles.rightContent}>
                        <Text style={styles.nameHotel}>{nameHotel}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: RATING }} />
                            <Text style={{ marginLeft: 60 }}>{countRating} đánh giá</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: ICON_MARKER2 }} />
                            <Text style={{ width: '75%', marginStart: 5 }}>{location}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Text style={styles.price}>{price} đ</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        </View >

    )
}

export default ItemListHotel


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 'auto',

    },
    rightContent: {
        marginHorizontal: 10,
        marginRight: 10
    },
    nameHotel: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        width: '80%'
    },
    price: {
        fontSize: 18,
        color: 'blue',
        textAlign: 'center'
    },
    img: {
        width: 116,
        height: 140
    }
});