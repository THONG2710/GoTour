import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FRAME_HOTEL, ICON_MARKER2, RATING } from '../../resource/assets/images';
import { Shadow } from 'react-native-shadow-2';

interface Item {
    nameHotel: string,
    countRating: number,
    location: string,
    price: string,
    navigation: any

}


const ItemListHotel: React.FC<Item> = (props) => {

    const { nameHotel, countRating, location, price, navigation } = props;
  
    const onMoveToHotelDetail = () => {
       navigation.navigate('s_detailhotel');
    
    };

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onMoveToHotelDetail}>
                <View style={styles.item}>
                    <Image source={{ uri: FRAME_HOTEL }} style={styles.img} />
                    <View style={styles.rightContent}>
                        <Text style={styles.nameHotel}>{nameHotel}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: RATING }} />
                            <Text style={{marginLeft:12, fontWeight:'500'}}>{countRating} đánh giá</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: ICON_MARKER2 }} />
                            <Text style={{marginLeft:12, fontWeight:'500'}}>{location}</Text>
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
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 'auto',
        alignItems:'center',
        marginHorizontal:10

    },
    rightContent: {
        width:'66%',
    },
    nameHotel: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign:'center',
    },
    price: {
        fontSize: 18,
        color: 'blue',
        textAlign: 'center',
        marginRight:18,
        fontWeight:'bold'
    },
    img: {
        width: 120,
        height: 120,
        marginLeft:5,
        borderRadius:10,
        marginVertical:5
    }
});