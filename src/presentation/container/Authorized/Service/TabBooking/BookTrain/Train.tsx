import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ItemListTrain from '../../../../../component/Items/ItemListTrain';
import TabViewItem from '../../../../components/custom/TabViewItem';
import Plane from '../BookPlane/Plane';
import Hotel from '../BookHotel/Hotel';
import { ICON_CALENDAR, ICON_TRAIN2 } from '../../../../../resource/assets/images';

const Train: React.FC = () => {
    const render = ({ item }: { item: (typeof DATA)[0] }) => (
        <ItemListTrain {...item} />

    )

    return (
        <View style={styles.container}>
            {/* <Image style={styles.img} source={require('../img/background.png')} /> */} 
            
            <View style={styles.book}>
                <View style={styles.item}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm khởi hành</Text>
                    <Image style={{ marginTop: -10 }} source={{uri: ICON_TRAIN2}} />
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm đến</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_CALENDAR}} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>T6,20 thg10</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 25, color: 'orange', textAlign: 'center' }}>
                        Tìm
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <Image source={{uri: ICON_TRAIN2}} />
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 5, marginTop: -5 }}>Hãy lựa chọn chuyến tàu phụ hợp cho bạn</Text>
            </View>
            <View style={{height:280}}>    
            <FlatList 
                data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                
                 />
            </View>
        </View>

    )

}

export default Train

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    book: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 'auto',
        marginVertical: 10,
        borderRadius: 20,
        padding: 13,
        width: '95%',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    item1: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#F7DEC6',
        marginTop: 10,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
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
})
const DATA = [
    { id: '1', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '2', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '3', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '4', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '5', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },

    

]
