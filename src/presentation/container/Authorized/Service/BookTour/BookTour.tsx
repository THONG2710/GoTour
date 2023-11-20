import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { IMG_HOTEL, IMG_HOTEL2 } from '../../../../resource/assets/images';
import { Shadow } from 'react-native-shadow-2';
import { BookTourProp } from './type';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BookTour:React.FC<BookTourProp> = (props) => {
    return (
        <ScrollView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Image style={styles.imgHotel} source={{ uri: IMG_HOTEL2 }}></Image>
            </View>
            {/* CENTER */}
            <View style={styles.center}>
                <Text numberOfLines={1} style={styles.textTitleCenter}>Đà Nẵng và những em gái mới lớn</Text>
                <Text numberOfLines={2} style={styles.textContentCenter}>Đồng hành cùng chúng tôi để gặp gỡ và trải nghiệm làm tình cực đỉnh cùng những em gái mới lớn nào</Text>
                <Text style={styles.textPrice}>5.000.000 VNĐ</Text>
                <View style={styles.remainingTickets}>
                    <Text style={styles.textRemainingTickets}>Số vé còn lại : 7</Text>
                    <TouchableOpacity style={styles.btnMorePassengers}>
                        <Text style={styles.textMorePassengers}>Thêm hành khách</Text>
                    </TouchableOpacity>
                </View>

                <Shadow startColor={'#fefefe'} endColor={'#d9d9d9'} offset={[0, 0]} distance={10} containerStyle={{ marginLeft: 20, marginTop: 20 }}>
                    <View style={styles.passengerInformation}>
                        <Text style={styles.textPassengerInformation}>Nguyễn Quang Trường</Text>
                        <TouchableOpacity>
                            <Text style={styles.editPassengerInformation}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </Shadow>
            </View>
            {/* FOOTER */}
            <View style={styles.footer}>
                <View style={styles.form}>
                    <View style={styles.formHeader}>
                        <Text style={styles.day}>4/11/2023 - 4/14/2023</Text>
                        <Text style={styles.numberOfDays}>3 ngày 2 đêm</Text>
                    </View>
                    <Text style={styles.textFormInformation}>Thông tin khách hàng</Text>
                    <TextInput style={[styles.ipForm, {marginTop:15}]} placeholder='Họ và tên' />
                    <TextInput style={styles.ipForm} placeholder='Email' />
                    <TextInput style={styles.ipForm} placeholder='Số điện thoại' keyboardType='phone-pad' />
                </View>
                <TouchableOpacity style={styles.btnBuyTickets}>
                    <Text style={styles.textBuyTickets}>Đặt vé</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default BookTour

const styles = StyleSheet.create({
    container:
    {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F9F7F7'
    },

    // HEADER
    header:
    {
        width: windowWidth,
        height: windowHeight - (windowHeight * 65) / 100
    },

    imgHotel:
    {
        width: windowWidth,
        height: windowHeight - (windowHeight * 65) / 100
    },

    // CENTER
    center:
    {
        backgroundColor: '#F9F7F7',
        width: windowWidth,
        height: windowHeight - (windowHeight * 65) / 100,
        borderRadius: 20,
        marginTop: -30,

    },

    textTitleCenter:
    {
        marginTop: 20,
        width: windowWidth - (windowWidth * 40) / 100,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginHorizontal: 20,

    },

    textContentCenter:
    {
        marginHorizontal: 20,
        fontWeight: '500',
        marginTop: 5
    },

    textPrice:
    {
        marginHorizontal: 20,
        marginTop: 15,
        color: '#F83131',
        fontSize: 18,
        fontWeight: '500'
    },

    remainingTickets:
    {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },

    textRemainingTickets:
    {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },

    btnMorePassengers:
    {
        backgroundColor: '#3C60BF',
        borderRadius: 5
    },

    textMorePassengers:
    {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#fff',
        fontWeight: '400',
        fontSize: 14
    },

    passengerInformation:
    {
        height: 30,
        borderRadius: 5,
        width: windowWidth - 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    textPassengerInformation:
    {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },

    editPassengerInformation:
    {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3C60BF'
    },

    // FOOTER
    footer:
    {
        paddingBottom: 80,
        backgroundColor: '#F9F7F7'
    },

    form:
    {
        width: windowWidth - 35,
        height: windowHeight - (windowHeight * 62) / 100,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal: 15,

    },

    formHeader:
    {
        backgroundColor: '#F8B5B5',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        flexDirection:'row',
        alignItems:'center'
    },

    day:
    {
        fontSize:15,
        marginHorizontal:20,
        paddingVertical:10,
        fontWeight:'bold',
        color:'#000'
    },

    numberOfDays:
    {
        fontSize:13,
        marginHorizontal:10,
        paddingVertical:10,
        fontWeight:'bold',
    },

    textFormInformation:
    {
        marginHorizontal:20,
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        marginTop:10
    },

    ipForm:
    {
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'#577DE0',
        borderRadius:5,
        padding:10,
        marginTop:15,
        height:45  ,
        fontWeight:'400',
        fontSize:15 
    },

    btnBuyTickets:
    {
        backgroundColor:'#FA602F',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:100,
        marginTop:20,
        borderRadius:20

    },

    textBuyTickets:
    {
        padding:10,
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
})