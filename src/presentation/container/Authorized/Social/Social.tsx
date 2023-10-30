import { ImageBackground, StyleSheet, Text, TextInput, View, Image, FlatList } from 'react-native'
import React from 'react'
import ItemListShare from '../../../component/Items/ItemListShare'
import { AVATAR, ICON_SEARCH_BLACK, SPLASH_THREE } from '../../../resource/assets/images'


const Social = () => {
    interface Props {
        item: { image: any, title: string, name: string, time: string, day: string, turn: string,namePlace: string }
    }
    return (
        <ImageBackground source={{uri: SPLASH_THREE}} style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <TextInput placeholder='Tìm kiếm ...' style={styles.findHeader}></TextInput>
                    <Image style={styles.imgHeader} source={{uri: ICON_SEARCH_BLACK}}></Image>
                </View>
                <Image style={styles.imgAvatar} source={{uri: AVATAR}}></Image>
            </View>

            <FlatList
                style={{flex:0.85}}
                data={dataListPoster}
                renderItem={({ item }) => <ItemListShare item={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item._id}
            />
        </ImageBackground>
    )
}

export default Social

const styles = StyleSheet.create({
    container:
    {
        flex: 1,

    },


    containerHeader:
    {
        flex: 0.15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    header:
    {
        width: '85%',
        justifyContent: 'center'

    },
    findHeader:
    {
        borderWidth: 1,
        borderRadius: 20,
        width: '85%',
        paddingLeft: 20,
        position: 'relative',
        fontSize: 15,
        marginLeft: 20
    },

    imgHeader:
    {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 50,
        top: 12,
    },

    imgAvatar:
    {
        width: 50,
        height: 50,
    }
})

const dataListPoster = [

    {

        _id: "1",
        image: AVATAR,
        title: "Đêm yên ắng, đêm Hamburg, khác với sự ồn ào vốn có của một thành phố cảng, đêm Hamburg thật êm ả với một ít lữ  khách hoặc người đi làm về muộn.",
        name: 'Nguyễn Văn Thông',
        time: '23:28',
        day: '10/19/2023',
        turn: '216 lượt đi',
        namePlace:'Phố Cổ Hội An'

    },

    {

        _id: "2",
        image: AVATAR,
        title: "Đêm yên ắng, đêm Hamburg, khác với sự ồn ào vốn có của một thành phố cảng, đêm Hamburg thật êm ả với một ít lữ  khách hoặc người đi làm về muộn.",
        name: 'Trường đẹp trai',
        time: '23:28',
        day: '2/25/2023',
        turn: '297 lượt đi',
        namePlace:'Đà Lạt'

    },

]
