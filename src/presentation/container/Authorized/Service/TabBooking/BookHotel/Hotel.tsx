import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import ItemListHotel from '../../../../../component/Items/ItemListHotel'
import { ICON_COIN, ICON_HOTEL, ICON_MARKER2, ICON_USER2 } from '../../../../../resource/assets/images'

const Hotel = () => {
    const render = ({ item }: { item: (typeof DATA)[0] }) => (
        <ItemListHotel {...item} />

    )
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../../img/background2.png')} />
            <View style={styles.book}>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_MARKER2}} style={{width:25,height:25}} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>Nhập/Chọn điểm đến</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_USER2}} style={{width:25,height:25}}/>
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>1 </Text>
                        phòng
                        <Text style={{ fontWeight: 'bold', color: 'black' }}> 2 </Text>
                        người lớn
                        <Text style={{ fontWeight: 'bold', color: 'black' }}> 0 </Text>
                        trẻ em
                    </Text>
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_USER2}} style={{width:25,height:25}} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}> 0 sao</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={{uri: ICON_COIN}} style={{width:25,height:25}}/>
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>0đ </Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 25, color: 'orange', textAlign: 'center' }}>
                        Tìm
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal:15 }}>
                <Image source={{uri: ICON_HOTEL}} />
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 5, marginTop: -5 }}>Hãy lựa chọn khách sạn phù hợp cho bạn</Text>
            </View>
            <View style={{ height: 300 }}>
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

export default Hotel

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
    item3: {
        marginTop: 20,
        backgroundColor: '#8F8F8F',
        borderRadius: 10,
        height: 'auto',
        flexDirection: 'row',
        paddingRight: 10,
        margin: 5
    },
    list: {
        marginTop: 450,

        width: '100%',

    }
})
const DATA = [
    { id: '1', nameHotel: "Seashell Hotel&Spa Phú Quốc", countRating: 233, location: "253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam", price: "4.462.000" },
    { id: '2', nameHotel: "Seashell Hotel&Spa Phú Quốc", countRating: 244, location: "253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam", price: "5.462.000" },
    { id: '3', nameHotel: "Seashell Hotel&Spa Phú Quốc", countRating: 255, location: "253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam", price: "6.462.000" },

    
    

]