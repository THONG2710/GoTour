import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
interface ItemListShareProps {
    item: { image: any, title: string, name: string, time: string, day: string, turn: string, namePlace: string }

}
const ItemListShare: React.FC<ItemListShareProps> = (props) => {
    const { item } = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.Poster}>
                    <Image source={item.image}></Image>
                    <View>
                        <Text style={[styles.text, { fontSize: 16, }]}>{item.name}</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>{item.time}</Text>
                            <Text style={styles.text}>{item.day}</Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../resource/assets/images/menu.png')}></Image>
            </View>

            <View style={styles.center}>
                <Text numberOfLines={2} style={{ marginHorizontal: 10 }}>{item.title}</Text>
                <Image style={styles.imgPoster} source={require('../resource/assets/images/imgPoster.png')}></Image>
                <View style={styles.groupText}>
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: 'bold', marginLeft: 10 }}>{item.namePlace}</Text>
                    <Text>{item.turn}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                        <Text>Chi tiết  </Text>
                        <Image source={require('../resource/assets/images/arrowRight.png')}></Image>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Image source={require('../resource/assets/images/like.png')}></Image>
                    <Image source={require('../resource/assets/images/comment.png')}></Image>
                </View>
            </View>

        </View>
    )
}

export default ItemListShare

const styles = StyleSheet.create({
    container:
    {
        marginHorizontal: 10,
        marginBottom: 40,
        width: '95%',
        height:550,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1
    },

    header:
    {
        marginTop: 15,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    row:
    {
        flexDirection: 'row',
    },
    text:
    {
        fontSize: 12,
        color: '#000',
        marginLeft: 10
    },
    Poster:
    {
        flexDirection: 'row',

    },

    center:
    {
        width: '100%',
        marginTop: 5
    },

    imgPoster:
    {
        width: '100%',
        height: '70%',
        marginTop: 10
    },

    groupText:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },

    footer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    }
})