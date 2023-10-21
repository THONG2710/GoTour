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
                <Text style={styles.text}>Khách Sạn</Text>
                <Text style={styles.textChoose}>Chuyến bay</Text>
                <Text style={styles.text}>Vé tàu</Text>
            </View>
            <View style={styles.book}>
                <View style={styles.item}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm khởi hành</Text>
                    <Image style={{ marginTop: -10 }} source={require('../img/train.png')} />
                    <Text style={{ fontSize: 15, color: 'black' }}>Điểm đến</Text>
                </View>
                <View style={styles.item1}>
                    <Image source={require('../img/calendar.png')} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>T6,20 thg10</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                    <Image style={{marginTop:10,marginLeft:5}} source={require('../img/checkbox.png')} />
                    <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>Vé khứ hồi</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontSize: 25, color: 'orange', textAlign: 'center' }}>
                        Tìm
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 100 }}>
                <Image style={{ marginTop: 20 }} source={require('../img/plane.png')} />
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginStart: 5, marginTop: 20 }}>Hãy lựa chọn chuyến bay phù hợp cho bạn</Text>
            </View>
            <View style={styles.list}>
                <View style={styles.item3} >
                <View style={styles.item2}>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>05:35</Text>
                            <View style={{ margin: 10 }}>
                                <Image source={require('../img/line.png')} />
                                <Text style={{ textAlign: 'center' }}>6h 40p</Text>
                            </View>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>12:15</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>Tp.Hồ Chí Minh</Text>
                            <Text style={{ color: 'black', fontSize: 15 }}>Hà Nội</Text>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>4.462.000 đ</Text>
                    </View>
                    
                </View>  
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../img/vietjet.png')}/>
                            <Text>Vietjet</Text>
                        </View>
                        <Text style={{color:'orange'}}>Còn lại 5</Text>
                    </View>               
                </View>
                <View style={styles.item3} >
                <View style={styles.item2}>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>05:35</Text>
                            <View style={{ margin: 10 }}>
                                <Image source={require('../img/line.png')} />
                                <Text style={{ textAlign: 'center' }}>6h 40p</Text>
                            </View>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>12:15</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>Tp.Hồ Chí Minh</Text>
                            <Text style={{ color: 'black', fontSize: 15 }}>Hà Nội</Text>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>4.462.000 đ</Text>
                    </View>
                    
                </View>  
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../img/vietjet.png')}/>
                            <Text>Vietjet</Text>
                        </View>
                        <Text style={{color:'orange'}}>Còn lại 5</Text>
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
        position: 'absolute',
        width: '100%',

    }
})