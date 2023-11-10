import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#D9D9D9',
        marginVertical:10,
       
    },
    img:{
        width:180.74,
        height:105,
        flex:1,
        borderRadius:10,
       
    },
    content:{
        marginLeft:5,
        flex:1.5
    },
    nameAndRating:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    txtPlaceName:{
        color:'black',
        fontSize:14
    },
    txtRating:{
        color:'black',
        fontSize:14,
        marginRight:5
    },
    star:{
        width:24,
        height:24
    },
    priceAndDate:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:10
    },
    txtPrice:{
        color:'red',
        fontSize:14,
        fontWeight:'bold'
    },
    btn:{
        width:170,
        height:28,
        backgroundColor:'#FF7A00',
        marginTop:5,
        alignSelf:'center',
        borderRadius:5,
      
    },
    inBtn:{
        flexDirection:'row',
        marginTop:5,
       
        justifyContent:'center'
    },
    txtBtn:{
        color:'white',
        fontSize:12
    },
    cart:{
        marginStart:5,
        width:14,
        height:12,
        alignSelf:'center'
    }

})

export default styles

