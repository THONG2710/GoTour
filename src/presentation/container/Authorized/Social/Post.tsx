import React, { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, VirtualizedList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Post: React.FC = () => {
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
    const edit = (id:any) => {
        console.log('edit',id)
    }
    //============HeaderComponent================
    const HeaderComponent = () => {
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#FF380D', '#FFD1BE']}
            >
                <View style={styles.header}>
                    <Pressable onPress={back}>
                        <Image style={styles.imgHeader} source={require('../../resource/images/back.png')} />
                    </Pressable>
                    <Text style={styles.txtHeader}>Bài đăng của tôi</Text>
                    <Pressable onPress={home}>
                        <Image style={styles.imgHeader} source={require('../../resource/images/home.png')} />
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

                        <Image style={styles.imgSearch} source={require("../../resource/images/search.png")} />
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
                <View style={styles.boxPost}>
                    {/* //=============name,heart================ */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={styles.txtName}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.txtHeart}>{item.like}</Text>
                            <Image style={styles.imgHeart} source={require('../../resource/images/heart.png')} />
                        </View>

                    </View>
                    {/* //=============main================ */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* //=============image,type,price================ */}
                        <View style={styles.divBox1}>
                            <Image style={styles.imageLocation} source={item.img} />
                            <Text style={styles.txtType}>{item.type}</Text>
                            <Text style={styles.txtPrice}>{item.price.toLocaleString('vi-VN')} VND</Text>
                        </View>
                        {/* //=============location,detail,time================ */}
                        <View style={styles.divBox2}>
                            <Text style={styles.txtLocation}>{item.location}</Text>
                            <Text style={styles.txtDetail} numberOfLines={2}>{item.detail}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.imgTime} source={require('../../resource/images/calendar.png')} />
                                <Text style={styles.txtTime}>{item.time}</Text>

                            </View>
                            {/* //=============button edit================ */}
                            <Pressable style={styles.btnEdit} onPress={() => edit(item.id)}>
                                <Text style={styles.txtButtonEdit}>Chỉnh sửa bài đăng</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )} />







    );
};
const data = [
    {
        id: 1,
        name: 'Chồn Lường',
        like: 100,
        img: require('../../resource/images/new1.webp'),
        location: 'Đà Lạt',
        detail: `Thành phố không có em Ngày trôi qua chẳng êm đềm Dây đàn buông lơi chẳng còn cất lênNắng như hững hờ đường về chợt thờ ơ`,
        time: '3 ngày 2 đêm',
        type: 'Du lịch núi',
        price: 2000000,
    },
    {
        id: 2,
        name: 'Chồn Lường',
        like: 100,
        img: require('../../resource/images/new1.webp'),
        location: 'Đà Lạt',
        detail: `Thành phố không có em Ngày trôi qua chẳng êm đềm Dây đàn buông lơi chẳng còn cất lênNắng như hững hờ đường về chợt thờ ơ`,
        time: '3 ngày 2 đêm',
        type: 'Du lịch núi',
        price: 2000000,
    },
    {
        id: 3,
        name: 'Chồn Lường',
        like: 100,
        img: require('../../resource/images/new1.webp'),
        location: 'Đà Lạt',
        detail: `Thành phố không có em Ngày trôi qua chẳng êm đềm Dây đàn buông lơi chẳng còn cất lênNắng như hững hờ đường về chợt thờ ơ`,
        time: '3 ngày 2 đêm',
        type: 'Du lịch núi',
        price: 2000000,
    },
]

export default Post;

const styles = StyleSheet.create({
    //============header=================
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
    //============searchbox=================
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
    //============item=================
    boxPost: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingTop: 10,
        marginBottom: 20,
        elevation: 5,
        shadowColor: 'black',
        borderRadius: 10,
    },
    divBox1: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divBox2: {
        width: '70%',
        marginLeft: 10,
    },
    imageLocation: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    txtName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F0774'
    },
    txtHeart: {
        color: 'red',
        fontSize: 14,
        fontWeight: '500',
    },
    imgHeart: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    txtLocation: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#03228F',
        marginBottom: 10,
    },
    txtDetail: {
        fontSize: 15,
        fontWeight: '600',
        color: '#6C4444',
        textAlign: 'justify',
        marginBottom: 10,
        marginRight: 10,

    },
    imgTime: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    txtTime: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    txtType: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#686565'
    },
    txtPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0A61E3'
    },
    //============button edit=================
    btnEdit: {
        width: '80%',
        height: 45,
        backgroundColor: '#FF542D',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    txtButtonEdit: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})