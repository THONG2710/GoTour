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
                <Image source={item.image} style={styles.imgItem} ></Image>
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
        marginLeft: 20,

    },

    imgItem:
    {

    },

    textItem:
    {
        textAlign: 'center',
        marginTop: 3
    }
})