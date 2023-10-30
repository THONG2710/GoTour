import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgBackground:{
        position:'absolute',
        width:'100%',
        height:250
    },
    iconHeader:{
        marginHorizontal:10,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    backBtn:{
        width:30,
        height:30
    },
    titleText:{
        fontSize:26,
        fontWeight:'700',
        color:'white'
    },
    search:{
        marginHorizontal:30,
        backgroundColor:'white',
        borderRadius:10,
        paddingHorizontal:10,
        justifyContent:'space-between',
        marginTop:20,
        flexDirection:'row'
    },
    inputSearch:{
        width:'90%',
       
    },
    searchBtn:{
        width:25,
        height:25,
        alignSelf:'center',
        marginEnd:10
    },
    bodyRating:{
        height:550,
        marginTop:80,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        backgroundColor:'white'
    }
})

export default styles
