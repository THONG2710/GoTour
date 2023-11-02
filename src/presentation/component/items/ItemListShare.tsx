import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ripple from 'react-native-material-ripple';
import { HOI_AN, ICON_COMMENT, ICON_LIKE, ICON_LIKED, ICON_MENU_POINT, ICON_RIGHT } from '../../resource/assets/images';
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
        ICON_LIKED
        : 
        ICON_LIKE
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
        marginBottom: 20,
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