import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ripple from 'react-native-material-ripple';
import { HOI_AN, ICON_COMMENT, ICON_LIKE, ICON_MENU_POINT, ICON_RIGHT } from '../../resource/assets/images';
interface ItemListShareProps {
    item: { image: any, title: string, name: string, time: string, day: string, turn: string, namePlace: string }
}
const ItemListShare: React.FC<ItemListShareProps> = (props) => {

    const { item } = props;
    const [imageLike, setImageLike] = useState(false)
    const handleImagePress = () => {
        setImageLike(!imageLike);
    };
    const getImageUri = () => {
        return imageLike ? 
        'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_liked.png?alt=media&token=0a946f9e-a7e8-4a72-b34a-f6b91daf13d5&_gl=1*d8156g*_ga*MTU0ODY5NjM2NS4xNjk4MzIxNzE4*_ga_CW55HF8NVT*MTY5ODg1MjU2Ni40LjEuMTY5ODg1MjYzOC41MS4wLjA.'
        : 
        'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/icon_like.png?alt=media&token=7d7fac80-b1e7-4cbd-b90b-4d0718d39876&_gl=1*1g9jpou*_ga*NzI0MjkxNDY1LjE2OTE0NjY1MTQ.*_ga_CW55HF8NVT*MTY5ODMzMjI0OS44My4xLjE2OTgzMzUzNjEuNDcuMC4w' 

      };

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.Poster}>
                    <Image style={styles.imgPoster} source={{ uri: item.image }}></Image>
                    <View>
                        <Text style={[styles.text, { fontSize: 16, }]}>{item.name}</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>{item.time}</Text>
                            <Text style={styles.text}>{item.day}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image style={styles.iconMenu} source={{ uri: ICON_MENU_POINT }}></Image>
                </TouchableOpacity>
            </View>
            {/* CENTER */}

            <View style={styles.center}>
                <Text numberOfLines={2} style={{ marginHorizontal: 10 }}>{item.title}</Text>
                <Image style={styles.imgAddress} source={{ uri: HOI_AN }}></Image>
                <Ripple>
                    <View style={styles.groupText}>
                        <Text style={{ fontSize: 16, color: 'orange', fontWeight: 'bold', marginLeft: 10 }}>{item.namePlace}</Text>
                        <Text>{item.turn}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                            <Text>Chi tiết  </Text>
                            <Image style={{}} source={{ uri: ICON_RIGHT }}></Image>
                        </View>
                    </View>
                </Ripple>

                {/* FOOTER */}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleImagePress}>
                        <Image style={styles.iconSocial} source={{ uri:getImageUri() }}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconSocial} source={{ uri: ICON_COMMENT }}></Image>
                    </TouchableOpacity>
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
        height: 550,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1
    },

    // {/* HEADER */}

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

    iconMenu:
    {
        width: 20,
        height: 20
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

    imgPoster:
    {
        width: 40,
        height: 40
    },
    // CENTER

    center:
    {
        width: '100%',
        marginTop: 5
    },

    imgAddress:
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

    // {/* FOOTER */}

    footer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7
    },

    iconSocial:
    {
        width: 30,
        height: 30
    }
})