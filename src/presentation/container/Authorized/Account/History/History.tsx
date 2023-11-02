import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { HEART, ICON_BACK, ICON_HOME, ICON_SEARCH, NEW1, SHOPPING } from "../../../../resource/assets/images";

const History: React.FC = () => {
    const [searchText, setsearchText] = useState('')

    const back = () => {
        console.log('back')
    }
    const home = () => {
        console.log('home')
    }
    const search = () => {
        console.log(searchText)
    }

    const HeaderComponent = () => {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#FF380D', '#FFD1BE']}
            >
                <View style={styles.header}>
                    <Pressable onPress={back}>
                        <Image style={styles.imgHeader} source={{uri: ICON_BACK}} />
                    </Pressable>
                    <Text style={styles.txtHeader}>Bài đăng của tôi</Text>
                    <Pressable onPress={home}>
                        <Image style={styles.imgHeader} source={{uri: ICON_HOME}} />
                    </Pressable>
                </View>
                {/* //============Searchbox================ */}
                <View style={styles.boxSearch}>
                    <TextInput
                        placeholder="Tìm kiếm bài đăng..."
                        style={styles.txtInputSearch}
                        onChangeText={setsearchText}
                    />
                    <Pressable onPress={search}>

                        <Image style={styles.imgSearch} source={{uri: ICON_SEARCH}} />
                    </Pressable>
                </View>
            </LinearGradient>
        )

    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            style={{}}
            //=============Header================
            ListHeaderComponent={HeaderComponent}
            //=============Item================
            renderItem={({ item }) => (
                <View style={styles.boxHistory}>

                    <Image style={styles.img} source={{uri: item.img}} />

                    <View style={styles.boxMain}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txtName}>{item.name}</Text>
                            <Image style={styles.imgHeart} source={{uri: HEART}} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.txtPrice}>{item.price.toLocaleString('vi-VN')} VND</Text>
                            <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                        <Text style={styles.txtTurn}>{item.turn} lượt đi</Text>
                        <Pressable style={styles.btnEdit}>
                            <Text style={styles.txtButtonEdit}>Đặt ngay</Text>
                            <Image style={styles.imgShopping} source={{uri: SHOPPING}} />
                        </Pressable>

                    </View>





                </View>
            )} />


    )
};
export default History;
const data = [
    {
        id: 1,
        name: 'Đà Lạt',
        img: NEW1,
        price: 1500000,
        time: '3N2Đ',
        turn: 999,

    },
    {
        id: 2,
        name: 'Đà Lạt',
        img: NEW1,
        price: 15000000,
        time: '3N2Đ',
        turn: 999,
    }
]
const styles = StyleSheet.create({
    //============header================
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    imgHeader: {
        width: 30,
        height: 30,
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    //============boxSearch================
    boxSearch: {
        width: '70%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        shadowColor: 'black',
        elevation: 10,
        marginBottom: 50,
    },
    txtInputSearch: {
        width: '90%',

    },
    imgSearch: {
        width: 20,
        height: 20,
        opacity: 0.6,
    },

    //============boxHistory================
    boxHistory: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        paddingRight: 20,
        paddingTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        elevation: 5,
        shadowColor: 'black',
        borderRadius: 10,
    },
    img: {
        width: '50%',
        height:'100%',
        borderRadius: 20,
        marginBottom: 10,
    },
    boxMain: {
        
        marginLeft: 10,
        width: '50%',
    },
    
    txtName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    imgHeart: {
        width: 20,
        height: 20,
    },
    txtPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
    },
    txtTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    txtTurn: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
    },
    btnEdit: {
        backgroundColor: '#FF542D',
        borderRadius: 10,
        width: 150,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButtonEdit: {
        textAlign: 'center',
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    imgShopping: {
        width: 17,
        height: 17,
        marginTop: 2,
    }

});