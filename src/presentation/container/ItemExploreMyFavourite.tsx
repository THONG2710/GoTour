import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import Ripple from 'react-native-material-ripple'

interface ItemExploreMyFavouriteProps {
    item: { _id: string, title: string, image: any, price: string, time: string, turn: string }
}
const ItemExploreMyFavourite: React.FC<ItemExploreMyFavouriteProps> = (props) => {
    const { item } = props
    return (

        <View style={styles.container}>
            <View>
                <Image style={styles.imageAddress} source={require('../resource/assets/images/slide4.png')}></Image>
            </View>
            <View>
                <View style={styles.groupHeader}>
                    <Text style={styles.textAddress}>{item.title}</Text>
                    <Ripple>

                        <Image style={styles.iconNoHeart} source={require('../resource/assets/images/noHeart.png')}></Image>
                    </Ripple>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                    <View>
                        <Text style={{ color: 'red', fontWeight: '400', fontSize: 15 }}>{item.price}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>{item.turn}</Text>
                    </View>
                    <Text>{item.time}</Text>
                </View>

                <TouchableOpacity>

                    <View style={{ flexDirection: 'row', borderRadius: 5, backgroundColor: '#ff7a00', alignItems: 'center', justifyContent: 'center', marginHorizontal: 25, marginTop: 10, paddingLeft: 10, padding: 3 }}>
                        <Text style={{ color: '#fff', marginBottom: 3 }}>Đặt ngay</Text>
                        <Image style={{ marginLeft: 5 }} source={require('../resource/assets/images/cart.png')}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemExploreMyFavourite

const styles = StyleSheet.create({

    container:
    {
        width: '95%',
        height: 140,
        marginLeft: 10,
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',

    },
    imageAddress:
    {
        marginTop: 20,
        marginLeft: 15,
        width: 150,
        height: 100,
        borderRadius: 15
    },

    groupHeader:
    {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    textAddress:
    {
        marginTop: 20,
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    iconNoHeart:
    {
        marginLeft: 20,
        marginTop: 15
    }
})