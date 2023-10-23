import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Train = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../img/background.png')} />
            <View style={styles.header}>
                <Image source={require('../img/logo.png')} />
                <Image style={{ marginStart: 250, marginTop: 20 }} source={require('../img/bell.png')} />

            </View>
            <View style={styles.search}>
                <Text>Tìm kiếm...</Text>
                <Image source={require('../img/search.png')} />
            </View>
            <View style={styles.tab}>
                <Text style={styles.textChoose}>Khách Sạn</Text>
                <Text style={styles.text}>Chuyến bay</Text>
                <Text style={styles.text}>Vé tàu</Text>
            </View>
            <View style={styles.book}>
                <View style={styles.item1}>
                    <Image source={require('../img/marker.png')} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>Nhập/Chọn điểm đến</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={require('../img/user.png')} />
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
                    <Image source={require('../img/star.png')} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}> 0 sao</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={require('../img/coin.png')} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>0đ </Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 25, color: 'orange', textAlign: 'center' }}>
                        Tìm
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 100 }}>
                <Image style={{ marginTop: 20 }} source={require('../img/hotel1.png')} />
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 10, marginTop: 20 }}>Hãy lựa chọn khách sạn phù hợp cho bạn</Text>
            </View>
            <View style={styles.list}>
                <View style={styles.item3}>
                    <Image source={require('../img/hotel2.png')} />
                    <View style={{ margin: 'auto', marginHorizontal: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Seashell Hotel & Spa Phú Quốc</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../img/rating.png')} />
                            <Text style={{marginLeft:75}}>233 đánh giá</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <Image source={require('../img/maker1.png')} />
                            <Text style={{marginLeft:5}}>253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam</Text>
                        </View>
                        <View style={{ marginStart:150}}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>2.326.500 đ</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.item3}>
                    <Image source={require('../img/hotel2.png')} />
                    <View style={{ margin: 'auto', marginHorizontal: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Seashell Hotel & Spa Phú Quốc</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../img/rating.png')} />
                            <Text style={{marginLeft:75}}>233 đánh giá</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <Image source={require('../img/maker1.png')} />
                            <Text style={{marginLeft:5}}>253 Phạm Văn Thuận, Tân Mai, Thành phố Biên Hòa, Đồng Nai, Việt Nam</Text>
                        </View>
                        <View style={{ marginStart:150}}>
                            <Text style={{ color: 'blue', fontSize: 18 }}>2.326.500 đ</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Train

const styles = StyleSheet.create({
    container: {

    },
    img: {
        height: '50%',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute'
    },
    search: {
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'space-between',
        width: '90%',
        padding: 8,
        borderRadius: 10,
        marginVertical: 65,
        marginStart: 20
    },
    tab: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 120,
        backgroundColor: 'white',
        height: 40,
        borderBottomWidth: 3,
        borderColor: '#FFBC7F',
        position: 'absolute',
        width: '100%'
    },
    text: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'black',

    },
    textChoose: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#FFBC7F',


    },
    book: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 'auto',
        marginVertical: 180,
        borderRadius: 20,
        padding: 13,
        position: 'absolute',
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
        margin:5
    },
    list: {
        marginTop: 450,
        position: 'absolute',
        width: '100%',

    }
})