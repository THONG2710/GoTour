import { ImageBackground, StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemListShare from '../../../component/Items/ItemListShare'
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { AVATAR, AVT, ICON_SEARCH_BLACK, SPLASH_THREE } from '../../../resource/assets/images'
import { SocialProp } from './type'


const Social: React.FC<SocialProp> = (props) => {
    const {navigation} = props;
    interface Props {
        item: { image: any, title: string, name: string, time: string, day: string, turn: string, namePlace: string }
    }
    return (
        <ImageBackground source={{ uri: SPLASH_THREE }} style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <TextInput placeholder='Tìm kiếm ...' style={styles.findHeader}></TextInput>
                    <TouchableOpacity>
                        <Image style={styles.imgHeader} source={{ uri: ICON_SEARCH_BLACK }}></Image>
                    </TouchableOpacity>
                </View>
                <Image style={styles.imgAvatar} source={{ uri: AVT }}></Image>
            </View>

            <FlatList
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
        width:windowWidth,
        height:windowHeight

    },


    containerHeader:
    {
        width:windowWidth,
        height:windowHeight - (windowWidth * 165 ) / 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header:
    {
        borderRadius: 30,
        width: windowWidth-100,
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        marginHorizontal:20,
        alignItems:'center',
    },
    findHeader:
    {
        width: windowWidth-150,
        borderRadius: 30,
        paddingLeft: 20,
        position: 'relative',
        fontSize: 15,
    },

    imgHeader:
    {
        width: 25,
        height: 25,
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
        image: AVT,
        title: "Đêm yên ắng, đêm Hamburg, khác với sự ồn ào vốn có của một thành phố cảng, đêm Hamburg thật êm ả với một ít lữ  khách hoặc người đi làm về muộn.",
        name: 'Nguyễn Văn Thông',
        time: '23:28',
        day: '10/19/2023',
        turn: '216 lượt đi',
        namePlace: 'Phố Cổ Hội An'

    },

    {

        _id: "2",
        image: AVT,
        title: "Đêm yên ắng, đêm Hamburg, khác với sự ồn ào vốn có của một thành phố cảng, đêm Hamburg thật êm ả với một ít lữ  khách hoặc người đi làm về muộn.",
        name: 'Trường đẹp trai',
        time: '23:28',
        day: '2/25/2023',
        turn: '297 lượt đi',
        namePlace: 'Đà Lạt'

    },

]
