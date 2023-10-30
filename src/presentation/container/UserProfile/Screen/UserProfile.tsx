import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Shadow } from 'react-native-shadow-2'

import ItemFavouriteUser from '../ItemList/ItemFavouriteUser'
import { TEXT_HEADER_USERPROFILE_VN } from '../Text/TextUserProfileVN'
import { ICON_BACK, ICON_HOME, ICON_SEARCH_BLACK } from '../../../resource/assets/images'


const UserProfile = () => {
    // interface Props {
    //     item: { title: string, price: string, time: string, turn: string, image: any }
    // }
    return (
        // CONTAINER
        <View style={styles.container}>

            {/* HEADER */}
            <LinearGradient style={styles.header} colors={['#FF380D', '#F9B889', '#FFEBDD']}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity>
                        <Image source={{uri: ICON_BACK}} style={styles.imgTitle}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>{TEXT_HEADER_USERPROFILE_VN}</Text>
                    <TouchableOpacity>
                        <Image source={{uri: ICON_HOME}} style={styles.imgTitle}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerFind}>
                    <Shadow distance={8} style={styles.gr_findHeader}>
                        <TextInput placeholder='Tìm kiếm ...' />
                        <TouchableOpacity style={styles.imgFind}>
                            <Image style={styles.imgIcon} source={{uri: ICON_SEARCH_BLACK}}></Image>
                        </TouchableOpacity>
                    </Shadow>
                </View>
            </LinearGradient>

            {/* FOOTER */}
            <View style={styles.footer}>
                <FlatList
                    data={dataListFavouriteUser}
                    renderItem={({ item }) => <ItemFavouriteUser item={item} />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    // CONTAINER
    container:
    {
        flex: 1
    },

    //HEADER

    header:
    {
        flex: 0.25,
    },

    headerTitle:
    {
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    imgTitle:
    {
        width: 24,
        height: 24
    },

    textHeader:
    {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    headerFind:
    {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
    },

    gr_findHeader:
    {
        width: 300,
        borderRadius: 10,
        paddingLeft: 20,
        height: 40,
        backgroundColor: '#fff'

    },

    imgFind:
    {
        position: 'absolute',
        right: 15,
        top: 8,
    },

    imgIcon:
    {
        width: 24,
        height: 24
    },

    // FOOTER
    footer:
    {
        flex: 0.75,
    },

})


const dataListFavouriteUser = [

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

    {

        _id: "3",
        title: "Bãi biển nha Trang",
        price: '1.990.000đ',
        time: '3N3Đ',
        turn: '588 lượt đi',
        image: require('../../../resource/assets/images/slide4.png')


    },

    {

        _id: "4",
        title: "Bãi biển nha Trang",
        price: '1.990.000đ',
        time: '3N3Đ',
        turn: '588 lượt đi',
        image: require('../../../resource/assets/images/slide4.png')


    },

]