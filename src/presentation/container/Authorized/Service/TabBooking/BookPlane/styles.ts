import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        marginHorizontal: 10
    },
    itemDetail: {
        backgroundColor:'red',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textBtn: {
        color: 'white',
        backgroundColor: '#3C60BF',
        width: '15%',
        borderRadius: 5,
        height: 20,
        marginVertical: 5
    },
    dateTime: {
        marginHorizontal: 10,
    },
    childItem: {
        flexDirection: 'row',
        marginVertical: 3
    },
    childItem1: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 3
    },
    passengerEvent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    Btn: {
        backgroundColor: '#3C60BF',
        width: 200,
        height: 40,
        borderRadius: 10
    },
    detailPassenger: {
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'red',
        height: 90,
        paddingHorizontal: 10,
        paddingTop: 10,
        marginHorizontal: 10
    },
    seatView:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal: 10
    },
    numberSeatView:{
        width:30,
        height:30,
        backgroundColor:'#3C60BF',
        marginStart:10,
        borderRadius:5,
        paddingTop:3
    },
    pay:{
        flexDirection:'row',
        height:'12%',
        borderTopWidth:1,
        paddingHorizontal:15,
        justifyContent:'space-between'
    },
    next:{
        color:'white',
        backgroundColor:'#487BFF',
        width:120,
        height:40,
        borderRadius:10,
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:8,
        marginVertical:20
    }

})


export default styles

