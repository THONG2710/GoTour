import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import ItemListPlane from '../../../../../component/Items/ItemListPlane'
import { ICON_CALENDAR, ICON_TRAIN, ICON_TRAIN2 } from '../../../../../resource/assets/images'




const Plane: React.FC = () => {
    const render = ({ item }: { item: (typeof DATA)[0] }) => (
        <ItemListPlane {...item} />
    )
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    return (
        <View style={styles.container}>
            {/* <Image style={styles.img} source={require('../img/background.png')} /> */}
            <Image style={styles.img} source={require('../../../../img/background2.png')} />

            <View style={styles.book}>
                <View style={styles.item}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm khởi hành</Text>
                    <Image style={{ marginTop: -10 ,width:35,height:35}} source={{uri: ICON_TRAIN2}} />
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm đến</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_CALENDAR} } style={{width:25,height:25}}/>
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>T6,20 thg10</Text>
                </View>
                <View style={styles.item1}>

                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>Vé khứ hồi</Text>
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
            <View style={{ height: 300 ,marginBottom:40}}>
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

export default Plane

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    img:{
        position:'absolute',
        width:'100%',
        height:200
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
        justifyContent: 'space-between',

    },
    item3: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#8F8F8F',
        borderRadius: 10,
        height: 'auto',
        paddingLeft: 10,
        paddingRight: 10,

    },
    list: {
        marginTop: 450,

        width: '100%',

    },
    checkbox: {
        alignSelf: 'center',
    },
})
const DATA = [
    { id: '1', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p",vietJet:3 },
    { id: '2', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p",vietJet:4 },
    { id: '3', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p",vietJet:5 },
    { id: '4', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p",vietJet:6 },
    { id: '5', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p",vietJet:7  },
]