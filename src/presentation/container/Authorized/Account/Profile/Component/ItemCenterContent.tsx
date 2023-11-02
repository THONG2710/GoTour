import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EVALUTE } from '../../../../../resource/assets/images'

interface ItemCenterContentProps {
    image: string;
    text: string
}
const ItemCenterContent: React.FC<ItemCenterContentProps> = (props) => {
    const { image, text } = props;
    return (
        <TouchableOpacity>
            <View style={styles.grItem}>
                <Image style={styles.img} source={{ uri: image }}></Image>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCenterContent

const styles = StyleSheet.create({
    grItem:
    {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:
    {
        marginTop: 10,
        textAlign: 'center'
    },

    img:
    {
        width:24,
        height:24
    }
})