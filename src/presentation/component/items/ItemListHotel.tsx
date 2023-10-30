import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FRAME_HOTEL, ICON_MARKER2, RATING } from '../../resource/assets/images';

interface Item {
    nameHotel: string,
    countRating: number,
    location: string,
    price: string,

}


const ItemListHotel: React.FC<Item> = (props: any) => {
   
    const { nameHotel, countRating, location,  price } = props;

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image source={{uri: FRAME_HOTEL}} />
                <View style={styles.rightContent}>
                    <Text style={styles.nameHotel}>{nameHotel}</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image source={{uri: RATING}} />
                        <Text style={{ marginLeft:60 }}>{countRating} đánh giá</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={{uri: ICON_MARKER2}} />
                        <Text style={{width:'75%',marginStart:5}}>{location}</Text>
                    </View>
                    <View style={{justifyContent:'flex-end'}}>
                        <Text style={styles.price}>{price} đ</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default ItemListHotel


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#8F8F8F',
        borderRadius: 10,
        height: 'auto',
       
    },
    rightContent: {
        marginHorizontal: 10,
        marginRight:10
    },
    nameHotel: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        width:'80%'
    },
    price:{
        fontSize:18,
        color:'blue',
        textAlign:'center'
    }
});