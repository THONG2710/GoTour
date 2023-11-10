import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ripple from 'react-native-material-ripple';
import { AVT, HOI_AN, ICON_COMMENT, ICON_LIKE, ICON_LIKED, ICON_MENU_POINT, ICON_RIGHT, ICON_START_HOTEL } from '../../../resource/assets/images';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DetailSocial = () => {

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

        <ScrollView>

            <View style={styles.container}>
                {/* HEADER */}
                <View style={styles.header}>
                    <View style={styles.Poster}>
                        <Image style={styles.imgPoster} source={{ uri: AVT }}></Image>
                        <View>
                            <Text style={[styles.text, { fontSize: 16, }]}>truong</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>14:00</Text>
                                <Text style={styles.text}>14/9/2023</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.iconMenu} source={{ uri: ICON_MENU_POINT }}></Image>
                    </TouchableOpacity>
                </View>
                {/* CENTER */}

                <View style={styles.center}>
                    <Text numberOfLines={2} style={{ marginHorizontal: 10 }}>Đêm yên ắng, đêm Hamburg, khác với sự ồn ào vốn có của một thành phố cảng, đêm Hamburg thật êm ả với một ít lữ  khách hoặc người đi làm về muộn.</Text>
                    <Image style={styles.imgAddress} source={{ uri: HOI_AN }}></Image>
                    <Ripple>
                        <View style={styles.groupText}>
                            <Text style={{ fontSize: 16, color: 'orange', fontWeight: 'bold', marginLeft: 10 }}>Hội An</Text>
                            <Text>200 lượt đi</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                                <Text>Chi tiết  </Text>
                                <Image style={{}} source={{ uri: ICON_RIGHT }}></Image>
                            </View>
                        </View>
                    </Ripple>

                    {/* FOOTER */}
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={handleImagePress}>
                            <Image style={styles.iconSocial} source={{ uri: getImageUri() }}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.iconSocial} source={{ uri: ICON_COMMENT }}></Image>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <Text style={styles.textComment}>Bình luận</Text>
            <View style={{paddingBottom:100}}>
                {dataFeedBack.map((item) => (
                    <View key={item._id}>
                        <View style={styles.feedBack}>
                            <View style={styles.reviewer}>
                                <Image style={styles.avtFeedBack} source={{ uri: item.imageAVT }}></Image>
                                <View style={styles.backgroundFeedBack}>
                                    <Text style={styles.nameReviewer}>{item.name}</Text>
                                    <Text numberOfLines={3} style={styles.textReviewer}>{item.textFeedBack}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>


    )
}

export default DetailSocial

const styles = StyleSheet.create({

    container:
    {
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height:windowHeight - (windowHeight *25) / 100,
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
    },

    textComment:
    {
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
        marginLeft:10
    },

    feedBack:
    {
        marginTop:10
    },

  
    reviewer:
    {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    avtFeedBack:
    {
        width: 30,
        height: 30
    },

    textReviewer:
    {
        fontSize: 14,
        marginLeft: 10
    },

    backgroundFeedBack:
    {
        backgroundColor: '#fff',
        shadowColor: '#ccc',
        elevation: 5,
        marginLeft: 10,
        borderRadius: 20,
        width: windowWidth - (windowWidth * 20) / 100,
        padding:12
    },

    grHeaderReviewer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 15,
        marginTop: 5
    },

    star:
    {
        flexDirection: 'row'
    },

    textStar:
    {
        color: '#000',
        marginRight: 2
    },


    starEvaluate:
    {
        width: 20,
        height: 20
    },

    nameReviewer:
    {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
})

const dataFeedBack = [
    {
        _id: '1',
        name: 'Nguyễn Trường',
        imageAVT: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/avt.png?alt=media&token=4d78d6ff-96e0-4c3e-bc8a-1ada70e08743&_gl=1*1hq0i3o*_ga*MTU0ODY5NjM2NS4xNjk4MzIxNzE4*_ga_CW55HF8NVT*MTY5OTAwNTE1Ny42LjAuMTY5OTAwNTE1Ny42MC4wLjA.',
        textFeedBack: 'Tour ngon bổ rẻ như gái 18 mới lớn',
    },

    {
        _id: '2',
        name: 'Nguyễn Thông',
        imageAVT: 'https://firebasestorage.googleapis.com/v0/b/gotour-72bca.appspot.com/o/avt.png?alt=media&token=4d78d6ff-96e0-4c3e-bc8a-1ada70e08743&_gl=1*1hq0i3o*_ga*MTU0ODY5NjM2NS4xNjk4MzIxNzE4*_ga_CW55HF8NVT*MTY5OTAwNTE1Ny42LjAuMTY5OTAwNTE1Ny42MC4wLjA.',
        textFeedBack: 'Tour ngon bổ rẻ như gái 18 mới lớn',
    },
]
