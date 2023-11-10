import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View,ScrollView } from 'react-native'
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
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {/* <Image style={styles.img} source={require('../img/background.png')} /> */} 
            <Image style={styles.img} source={require('../../../../img/background2.png')} />
            
            <View style={styles.book}>
                <View style={styles.item}>
                    <TouchableOpacity>
                    <Text style={styles.txt_location}>Điểm khởi hành</Text>
                    </TouchableOpacity>              
                    <Image style={styles.icon_train2} source={{uri: ICON_TRAIN2}} />
                    <TouchableOpacity>
                    <Text style={styles.txt_location}>Điểm đến</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_CALENDAR}} style={styles.icon_calendar}/>
                    <TouchableOpacity>
                    <Text style={styles.date}>T6,20 thg10</Text>
                    </TouchableOpacity> 
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_find}>
                        Tìm
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.container_title}>
                <Image source={{uri: ICON_TRAIN2}} style={styles.icon_train}/>
                <Text style={styles.title}>Hãy lựa chọn chuyến tàu phụ hợp cho bạn</Text>
            </View>
            <View style={{}}>    
            <FlatList 
                data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                style={styles.flatlist}
                 />
            </View>
        </View>
        </ScrollView>

    )

}

export default Train

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
     
    },
    img:{
        position:'absolute',
        width:'100%',
        height:150
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
    txt_location:{
        fontSize: 15, color: 'black'
    },
    icon_train2:{
        width:35,height:35
    },
    icon_calendar:{
        width:25,height:25
    },
    date:{
        fontSize: 18, color: 'black', margin: 5
    },
    btn_find:{
        fontSize: 25, color: 'orange', textAlign: 'center'
    },
    container_title:{
        flexDirection: 'row', marginHorizontal: 10
    },
    icon_train:{
        width:40,height:40
    },
    title:{
        fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 5, marginTop: -5
    },
    flatlist:{
        backgroundColor:'#EBEBEB'
    }
})
const DATA = [
    { id: '1', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '2', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '3', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '4', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },
    { id: '5', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p" },

    

]
