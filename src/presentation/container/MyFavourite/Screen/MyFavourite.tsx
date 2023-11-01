import { Image, ImageBackground, StyleSheet, Text, TextInput, View, FlatList, Dimensions, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import Ripple from 'react-native-material-ripple';
import { Shadow } from 'react-native-shadow-2';
import Carousel from 'react-native-snap-carousel';
import ItemExploreMyFavourite from '../ItemMyFavourite/ItemExploreMyFavourite';
import ItemTypeOfTravelMyFavourite from '../ItemMyFavourite/ItemTypeOfTravelMyFavourite';

const SLIDE_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDE_WIDTH * 0.6;

interface Props {
    item: { image: any, name: string, turn: string, price: string, time: string }
    index: number
}
const MyFavourite: React.FC<Props> = () => {
  

    function carouselCardItem({ item, index }: Props) {
        return (
            <View style={styles.cardCarousel} key={index}>
                <Image source={{ uri: item.image }} style={styles.imageSlide}></Image>
                <View style={styles.groupSlide}>
                    <View>
                        <View style={styles.groupHeader}>
                            <Text style={styles.textAddress}>{item.name}</Text>
                            <Image style={{ width: 24, height: 24 }} source={require('../../../resource/assets/images/heart.png')}></Image>
                        </View>
                        <Text style={styles.textTurn}>{item.turn}</Text>
                    </View>
                    <View>
                        <View style={styles.groupFooter}>
                            <Text style={styles.textPrice}>{item.price}</Text>
                            <Text style={styles.textTime}>{item.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgHeader} source={require('../../../resource/assets/images/imgFVR.png')}></Image>
                <View style={styles.iconHeader}>
                    <Ripple>
                        <Image source={require('../../../resource/assets/images/back.png')}></Image>
                    </Ripple>
                    <Ripple>
                        <Image source={require('../../../resource/assets/images/bell.png')}></Image>
                    </Ripple>
                </View>
                <Text style={styles.textHeader}>Lựa chọn chuyến đi phù hợp {`\n`}cho bạn nào !!!</Text>
                <View style={styles.menuMyFVT}>
                    <Shadow distance={1} endColor={'#ff00ff10'} offset={[20, 1]} style={styles.findMyFavourite}>
                        <TextInput placeholder='Tìm kiếm ...'></TextInput>
                    </Shadow>
                    <Image style={styles.find} source={require('../../../resource/assets/images/find.png')}></Image>
                    <Image style={styles.imgMenu} source={require('../../../resource/assets/images/menuMyFVR.png')}></Image>
                </View>
                <FlatList
                    style={{ marginTop: 190, marginRight: 15 }}
                    data={data}
                    renderItem={({ item }) => <ItemTypeOfTravelMyFavourite item={item} />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    horizontal
                />
            </View>


            <View style={styles.center}>
                <View style={styles.titleCenter}>
                    <Text style={styles.textTitle}>Điểm đến yêu thích</Text>
                    <Image source={require('../../../resource/assets/images/fire.png')}></Image>
                </View>
                <Carousel
                    data={dataSlide}
                    renderItem={carouselCardItem}
                    sliderWidth={SLIDE_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    useScrollView={true}
                >
                    <Text style={{ color: 'green', backgroundColor: 'red' }}>Trường đẹp trai</Text>
                </Carousel>
            </View>

            <View style={styles.footer}>
                <View style={styles.titleCenter}>
                    <Text style={styles.textTitle}>Khám phá thêm</Text>
                    <Image source={require('../../../resource/assets/images/explore.png')}></Image>
                </View>
                <FlatList
                    data={dataExplore}
                    renderItem={({ item }) => <ItemExploreMyFavourite item={item} />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}

export default MyFavourite

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },

    header:
    {
        flex: 0.45,
        alignItems: 'center',
        marginTop: 10,
    },

    imgHeader:
    {
        width: '95%',
        borderRadius: 20,
        position: 'absolute'
    },

    iconHeader:
    {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 7
    },

    textHeader:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 130,
        left: 40
    },

    menuMyFVT:
    {
        width: '90%',
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    findMyFavourite:
    {
        width: 290,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingLeft: 10,
        left: 20
    },

    imgMenu:
    {
        marginRight: 10
    },

    find:
    {
        marginRight: 35
    },

    center:
    {
        flex: 0.3,
    },

    titleCenter:
    {
        flexDirection: 'row',
        alignItems: 'center',

    },

    textTitle:
    {
        fontSize: 20,
        color: 'red',
        fontWeight: '500',
        marginLeft: 20
    },

    cardCarousel:
    {
        width: ITEM_WIDTH
    },

    imageSlide:
    {
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        position: 'relative',
    },

    textAddress:
    {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    textTurn:
    {
        color: 'white',
        fontWeight: '500',
        fontSize: 10,
        marginLeft: 10
    },

    groupSlide:
    {
        position: 'absolute',
        width: ITEM_WIDTH,
        justifyContent: 'space-between',
        height: '100%',

    },

    groupHeader:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10
    },

    groupFooter:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 5,
        alignItems: 'center',
    },

    textPrice:
    {
        color: '#fff',
        fontWeight: 'bold'
    },

    textTime:
    {
        color: '#fff',
        fontWeight: 'bold'
    },
    footer:
    {
        flex: 0.3,
    }
})







const data = [

    {

        _id: "1",
        title: "Núi",
        image: require('../../../resource/assets/images/mountain.png')

    },

    {

        _id: "2",
        title: "Biển",
        image: require('../../../resource/assets/images/sea.png')

    }, {

        _id: "3",
        title: "Đảo",
        image: require('../../../resource/assets/images/island.png')

    }, {

        _id: "4",
        title: "Cắm trại",
        image: require('../../../resource/assets/images/camp.png')

    }, {

        _id: "5",
        title: "Khác",
        image: require('../../../resource/assets/images/another.png')

    },

]


const dataSlide = [
    {
        id: 1,
        name: 'Sapa - Fansipan',
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/382311689_307788621862004_556719088667644762_n.png?_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rXzX-1ml0UkAX9G5efA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_e2o=f&oh=03_AdT8Gd7KFkwsZMwBqangHLaCITZIOh4mYjBqVDnDx41ZOA&oe=653F14D6',
        turn: '419 lượt đi',
        price: '12.190.000đ',
        time: '7N6Đ'
    },

    {
        id: 2,
        name: 'Sapa - Fansipan',
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/379651312_913087497102379_9131171402212862606_n.png?_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=UVwPqeKFuI4AX_RAsQ8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_e2o=f&oh=03_AdSjualEmNagrDHk3EIZqgzQ0YnvbJ4p3ZnZdmC8yJnmZA&oe=653F10B0',
        turn: '523 lượt đi',
        price: '14.190.000đ',
        time: '9N6Đ'
    },

    {
        id: 3,
        name: 'Sapa - Fansipan',
        image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/384832603_3429519510630991_3804720237746780536_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qCODopoP_MsAX_a9XtT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_e2o=f&oh=03_AdQydmL6mp6rIl1fPEGl3JW3ImGI1cf51VCZYnN9YK2YRA&oe=653F2427',
        turn: '680 lượt đi',
        price: '2.190.000đ',
        time: '3N2Đ'
    },
]

const dataExplore = [

    {

        _id: "1",
        title: "Bãi biển nha Trang",
        price: '1.790.000đ',
        time: '3N2Đ',
        turn: '518 lượt đi',
        image: require('../../../resource/assets/images/slide4.png')

    },

    {

        _id: "2",
        title: "Bãi biển nha Trang",
        price: '1.990.000đ',
        time: '3N3Đ',
        turn: '588 lượt đi',
        image: require('../../../resource/assets/images/slide4.png')

    },

]
