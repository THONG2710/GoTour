import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgBackround:{
        position:'absolute',
        width:'100%',
        height:225,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
    },
    slogan:{
        height:225,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        fontSize:36,
        fontWeight:'900',
        color:'white',  
    },
    text2:{
        fontSize:18,
        fontWeight:'900',
        color:'white',   
    },
    title:{
        textAlign:'center',
        marginVertical:10,
        color:'black',
        fontSize:20,
        fontWeight:'900'
    },
    content:{
        paddingHorizontal:15,
        marginBottom:20
    }
})
export default styles

