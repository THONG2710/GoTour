import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";


const News = () => {
    const [searchText, setsearchText] = useState('')


    const search = () => {
        console.log(searchText)
    }
    const notification = () => {
        console.log('notification')
    }
    const itemFlatList = (itemid: Number) => {
        console.log(itemid);

    }
    const itemMap = (itemid: Number) => {
        console.log(itemid)
    }

   
    return (

        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* //============header================ */}
                <View style={{ height: 150 }}>
                    <Image style={styles.imgTittle} source={require("../resource/images/new1.webp")} />
                    <Image style={styles.imgLogo} source={require("../resource/images/logo.png")} />
                    <Pressable onPress={notification} style={styles.imgBell}>
                        <Image style={styles.imgBell} source={require("../resource/images/bell.png")} />

                    </Pressable>

                </View>
                {/* //============seachbox================ */}
                <View style={styles.boxSearch}>
                    <TextInput
                        placeholder="Tìm kiếm"
                        style={styles.txtInputSearch}
                        onChangeText={setsearchText}
                    />
                    <Pressable onPress={search}>

                        <Image style={styles.imgSearch} source={require("../resource/images/search.png")} />
                    </Pressable>
                </View>
                {/* //============news================ */}
                <Text style={styles.txtNews}>Tin tức mới nhất</Text>
                <View>
                    <FlatList
                        data={images}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        style={{}}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => itemFlatList(item.id)}>
                                <View style={styles.viewSlide} key={item.id}>
                                    <Image style={styles.imgSlide} source={item.img} />
                                    <Text style={{ color: 'blue', fontWeight: '600' }}>{item.date}</Text>
                                    <Text style={styles.txtSlideTittle} numberOfLines={3}>{item.title}</Text>
                                </View>
                            </Pressable>

                        )}
                    />

                </View>
                {/* //============news================ */}
                <Text style={styles.txtNews}>Gần đây</Text>
         
                    {images.map((item) => {
                        return (
                            <Pressable key={item.id} onPress={() => itemMap(item.id)}>
                                <View  style={[styles.viewSlide, { flexDirection: 'row', width: 250, marginBottom: 10 }]}>
                                    <Image style={[styles.imgSlide, { width: 100, height: 100 }]} source={item.img} />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ color: 'blue', fontWeight: '600' }}>{item.date}</Text>
                                        <Text style={styles.txtSlideTittle} numberOfLines={3}>{item.title}</Text>
                                    </View>

                                </View>
                            </Pressable>

                        )
                    })}
       

                <Text>Xem thêm</Text>
            </ScrollView>
        </View>
    )
}
export default News;
const images = [
    { id: 1, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },
    { id: 2, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },
    { id: 3, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },
    { id: 4, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },
    { id: 5, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },
    { id: 6, img: require("../resource/images/new1.webp"), date: '12/12/2021', title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày' },



];
const styles = StyleSheet.create({
    // =============header=================
    imgLogo: {
        width: 100,
        height: 100,


    },
    imgTittle: {
        width: '100%',
        height: 150,
        position: 'absolute',


    },
    imgBell: {
        width: 20,
        height: 20,
        right: 0,
        position: 'absolute',
        margin: 10,


    },
    // =============searchbox=================
    boxSearch: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: -20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        shadowColor: '#000',
        elevation: 10,
    },
    imgSearch: {
        width: 20,
        height: 20,
        opacity: 0.6,
    },
    txtInputSearch: {
        width: '90%',

    },
    // =============news=================
    txtNews: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '800',
        color: 'black',

    },
    imgSlide: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        marginBottom: 10,

    },
    viewSlide: {
        marginLeft: 10,
        width: 300,
        marginRight: 10,

    },
    txtSlideTittle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },

})