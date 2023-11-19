import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'

interface ItemMyFavouriteProps {
    item: { _id: string, title: string, image: any }
}
const ItemMyFavourite: React.FC<ItemMyFavouriteProps> = (props) => {
    const { item } = props
    return (
        <View style={styles.itemListMyFVR}>
            <Ripple>
                <Image source={{uri: item.image}} style={styles.imgItem} ></Image>
            </Ripple>
            <Text style={styles.textItem}>{item.title}</Text>
        </View>
    )
}

export default ItemMyFavourite

const styles = StyleSheet.create({
    itemListMyFVR:
    {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,
        backgroundColor:'#fff',
        width:60,
        height:60,
        borderRadius:10
    },

    imgItem:
    {
        width:40,
        height:40,
        borderRadius:20,
    },

    textItem:
    {
        textAlign: 'center',
    }
})