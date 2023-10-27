import React, { useState } from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const HotelDetail = () => {

    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <ScrollView >
            {/* //========header====== */}
            <View style={styles.header}>
                {/* //========imageHotel====== */}
                <Image style={styles.image} source={dataHotel.image} />
                {/* //========BoxHeader====== */}
                <View style={styles.boxHeader}>
                    <Text style={styles.txtName}>{dataHotel.nameHotel}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require("../resource/images/address.png")} style={styles.iconAddress} />
                        <Text style={styles.txtAddress}>{dataHotel.addressHotel}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require("../resource/images/phonewhite.png")} style={styles.iconPhone} />
                        <Text style={styles.txtPhone}>{dataHotel.phoneHotel}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            Array.from({ length: dataHotel.starHotel }, (_, index) => (
                                <Image key={index} style={styles.imgStarHotel} source={require('../resource/images/star.png')} />
                            ))

                        }
                        {
                            Array.from({ length: 5 - dataHotel.starHotel }, (_, index) => (
                                <Image key={index} style={styles.imgStarHotel} source={require('../resource/images/starwhite.png')} />
                            ))
                        }
                    </View>

                </View>
            </View>
            {/* //========price====== */}
            <View style={styles.boxPrice}>
                <Text style={styles.txtPrice}>{dataHotel.priceHotel} VNĐ</Text>
            </View>
            {/* //========detail====== */}
            <View style={styles.divHotel}>
                <Text style={styles.txtHotel}>Khách sạn</Text>
                <Text style={styles.txtDetailHotel}
                    numberOfLines={showFullText ? undefined : 8}
                >
                    {dataHotel.detailHotel}
                </Text>
                <Pressable onPress={toggleShowFullText}>
                    <Text style={styles.txtSeeMore}>{showFullText ? 'Ẩn' : 'Xem thêm'}</Text>
                </Pressable>
            </View>
            {/* //========amenities====== */}
            <View style={styles.divAmenities}>
                <Text style={styles.txtAmenities}>Tiện Nghi</Text>
                <FlatList
                    data={dataHotel.amenities}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    style={styles.flatListAmenities}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.itemAmenities}>
                                <Image style={styles.iconAmenities} source={item.icon} />
                                <Text style={styles.txtItemAmenities}>{item.name}</Text>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
            {/* //========comment====== */}
            <View style={styles.divComment}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.txtCommentTittle}>Nhận xét </Text>
                    <Text style={styles.txtCommentTittle}>
                        (
                        {(dataComment.reduce((total, item) => total + item.star, 0) / dataComment.length).toFixed(1)}
                    </Text>
                    <Image style={[styles.imgStarComment, { width: 20, height: 20 }]} source={require('../resource/images/star.png')} />
                    <Text style={styles.txtCommentTittle}>)</Text>

                </View>

                {dataComment.map((item) => {
                    return (
                        <View key={item.id}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <Image style={styles.avatar} source={item.avatar} />
                                <View style={styles.boxComment}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.txtnameComment}>{item.name} </Text>
                                        <Text style={styles.txtStarComment}>
                                            ({item.star}
                                        </Text>
                                        <Image style={styles.imgStarComment} source={require('../resource/images/star.png')} />
                                        <Text style={styles.txtStarComment}>)</Text>
                                    </View>

                                    <Text style={styles.txtComment} >{item.comment}</Text>
                                </View>
                            </View>
                        </View>


                    )
                })}
            </View>
        </ScrollView>
    )
}
export default HotelDetail;
const dataHotel = {
    image: require("../resource/images/new1.webp"),
    nameHotel: `Sedona Suites Ho Chi Minh City`,
    addressHotel: `65 Le Loi, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam`,
    phoneHotel: `+84 28 3822 9666`,
    starHotel: 4,
    priceHotel: `10.000.000`,
    detailHotel: `Tìm kiếm một khách sạn dành cho gia đình lý tưởng ở Thành phố Hồ Chí Minh không phải là quá khó. Chào đón bạn đến với Sedona Suites Ho Chi Minh City, một lựa chọn đúng đắn cho những du khách như bạn.
Nằm gần những địa danh yêu thích như Phố đi bộ Nguyễn Huệ (0,3 km) và Chợ Ẩm Thực Đường Phố Bến Thành (0,4 km), du khách tại Sedona Suites Ho Chi Minh City có thể dễ dàng đến thăm những điểm đến nổi tiếng này ở Thành phố Hồ Chí Minh
Tìm kiếm một khách sạn dành cho gia đình lý tưởng ở Thành phố Hồ Chí Minh không phải là quá khó. Chào đón bạn đến với Sedona Suites Ho Chi Minh City, một lựa chọn đúng đắn cho những du khách như bạn.
Nằm gần những địa danh yêu thích như Phố đi bộ Nguyễn Huệ (0,3 km) và Chợ Ẩm Thực Đường Phố Bến Thành (0,4 km), du khách tại Sedona Suites Ho Chi Minh City có thể dễ dàng đến thăm những điểm đến nổi tiếng này ở Thành phố Hồ Chí Minh`,
    amenities: [
        { name: `Bữa sáng`, id: 1, icon: require("../resource/images/star.png") },
        { name: `Bữa sáng`, id: 2, icon: require("../resource/images/star.png") },
        { name: `Bữa sáng`, id: 3, icon: require("../resource/images/star.png") },
        { name: `Bữa sáng`, id: 4, icon: require("../resource/images/star.png") },
        { name: `Bữa sáng`, id: 5, icon: require("../resource/images/star.png") },
        { name: `Bữa sáng`, id: 6, icon: require("../resource/images/star.png") },


    ]





};
const dataComment = [
    {
        id: 1,
        avatar: require("../resource/images/avatar.png"),
        name: `Nguyễn Văn Thông Đít`,
        star: 5,
        comment: `View đẹp ,không gian sang trọng. Nhìn được toàn cảnh thành phố , đa dạng về món ăn như món Singapore, Malaysia , Việt Nam, ... Luôn là sự lựa chọn hàng đầu cho các cuộc gặp gỡ gia đình, bạn bè hoặc đi một mình cũng rất ok.`,

    },
    {
        id: 2,
        avatar: require("../resource/images/avatar.png"),
        name: `Nguyễn Văn Thông Đít`,
        star: 2,
        comment: `View đẹp ,không gian sang trọng. Nhìn được toàn cảnh thành phố , đa dạng về món ăn như món Singapore, Malaysia , Việt Nam, ... Luôn là sự lựa chọn hàng đầu cho các cuộc gặp gỡ gia đình, bạn bè hoặc đi một mình cũng rất ok.`,

    },
    {
        id: 3,
        avatar: require("../resource/images/avatar.png"),
        name: `Nguyễn Văn Thông Đít`,
        star: 3,
        comment: `View đẹp ,không gian sang trọng. Nhìn được toàn cảnh thành phố , đa dạng về món ăn như món Singapore, Malaysia , Việt Nam, ... Luôn là sự lựa chọn hàng đầu cho các cuộc gặp gỡ gia đình, bạn bè hoặc đi một mình cũng rất ok.`,

    }
]
const styles = StyleSheet.create({
    //========header======
    header: {
        height: 250,
        width: '100%',
        justifyContent: 'flex-end',
    },
    //========imageHotel======
    image: {
        height: 250,
        width: '100%',
        position: 'absolute',
        opacity: 0.9,
    },
    //========BoxHeader======
    boxHeader: {

        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,


    },
    txtName: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'justify',
    },
    iconAddress: {
        width: 10,
        height: 12.3,
        marginRight: 5,
        marginTop: 3,

    },
    iconPhone: {
        width: 10,
        height: 10,
        marginRight: 5,
        marginTop: 5,
    },
    txtAddress: {
        color: 'white',
        fontSize: 13,
    },
    txtPhone: {
        fontSize: 13,
        color: 'white',
    },
    imgStarHotel: {
        height: 15,
        width: 15,
        marginRight: 5,
    },
    //========price======
    boxPrice: {
        alignItems: 'flex-end',

    },
    txtPrice: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#6A9C89',
        padding: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginTop: -30,
        fontWeight: 'bold',
        maxWidth: '60%',
    },
    //========detail======
    divHotel: {
        marginLeft: 20,
        marginRight: 20,
    },
    txtHotel: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'justify',
    },
    txtDetailHotel: {
        marginTop: 10,
        color: 'black',
        textAlign: 'justify',
        fontWeight: '500',
        fontSize: 15,

    },
    txtSeeMore: {
        color: '#6A9C89',
    },
    //========amenities======
    divAmenities: {

    },
    txtAmenities: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'justify',
        marginLeft: 20,
    },
    itemAmenities: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        elevation: 5,
        marginBottom: 10,
        width: 80,
        height: 80,
        shadowColor: '#000',
        marginRight: 5,
        marginLeft: 5,

    },
    iconAmenities: {
        width: 40,
        height: 40,
    },
    txtItemAmenities: {
        fontSize: 13,
        color: 'black',
        fontWeight: '500',
        textAlign: 'center',
    },
    flatListAmenities: {
       
        
        marginTop: 10,
    },
    //========comment======
    divComment: {
        marginLeft: 20,
        marginRight: 20,
    },
    txtCommentTittle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'justify',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    txtnameComment: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    txtComment: {
        fontSize: 15,
        color: 'black',
    },
    boxComment: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        elevation: 5,
        shadowColor: '#000',

    },
    txtStarComment: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    imgStarComment: {
        width: 15,
        height: 15,
        marginTop: 3,
    },

});
