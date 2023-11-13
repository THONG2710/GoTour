import { StyleSheet, Text, View, Image, FlatList, ScrollView, VirtualizedList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { AVT, BAR_SCHEDULE, ICON_ADDRESS, ICON_CALENDAR, ICON_START_HOTEL, IMG_DETAIL_TOUR, IMG_HOTEL, VEHICLE } from '../../../../resource/assets/images';
import { DetailTourProp } from './type';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailTour: React.FC<DetailTourProp> = (props) => {
    interface Props {
        item: { textTitle: string, textContentDetail: string }
    }
    const {navigation} = props;
    return (

        // CONTAINER

        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Image source={{ uri: IMG_DETAIL_TOUR }} style={styles.imgHeader}></Image>
                </View>

                <View style={styles.center}>
                    <View style={styles.centerTitle}>
                        {/* GRROUP CENTER LEFT */}
                        <View style={styles.grCenterLeft}>
                            <Text style={styles.textName}>Hà Nội - Không phải bây giờ{`\n`}thì bao giờ</Text>
                            <View style={styles.overallSchedule}>
                                <View style={styles.grSchedule}>
                                    <Image style={styles.imgIconCenter} source={{ uri: ICON_CALENDAR }}></Image>
                                    <View style={styles.grTextSchedule}>
                                        <View style={styles.grDaySchedule}>
                                            <Text style={styles.textSchedule}>4/11/2023 - </Text>
                                            <Text style={styles.textSchedule}>4/14/2023</Text>
                                        </View>
                                        <Text style={styles.textSchedule}>Thời gian 3 ngày</Text>
                                    </View>
                                </View>

                                <View style={styles.grDepature}>
                                    <Image style={styles.imgIconCenter} source={{ uri: ICON_ADDRESS }}></Image>
                                    <View style={styles.grTextSchedule}>
                                        <View style={styles.grDaySchedule}>
                                            <Text style={styles.textSchedule}>Khởi hành:</Text>
                                            <Text style={styles.textSchedule}>TP:HCM</Text>
                                        </View>
                                        <Text style={styles.textSchedule}>Tập trung 15h, 4/11/2023</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* // GROUP CENTER RIGHT */}
                        <View style={styles.grCenterRight}>
                            <Text style={styles.price}>1.700.000VNĐ</Text>
                            <Text style={styles.remainingTickets}>Số vé còn{`\n`}lại : 10</Text>
                        </View>
                    </View>

                    {/* CENTER CONTENT */}

                    <View style={styles.centerContent}>
                        <Text style={styles.textHotel}>Khách sạn</Text>

                        <View style={{ flexDirection: 'row' }}>
                            {dataHotel.map((item) => (
                                <View key={item.id}>
                                    <TouchableOpacity>
                                        <View style={styles.hotel}>
                                            <Image style={styles.imgHotel} source={{ uri: item.image }}></Image>
                                            <Text style={styles.nameHotel}>{item.nameHotel}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>

                        <View style={styles.vehicle}>
                            <Text style={styles.textVehicle}>Phương tiện di chuyển</Text>
                            <Text style={styles.textVehicle}> (Máy Bay) </Text>
                            <Image style={styles.imgVehicle} source={{ uri: VEHICLE }}></Image>
                        </View>

                        <Text style={styles.textScheduleDetail}>Lịch Trình</Text>

                        <View>
                            {dataSchedule.map((item) => (
                                <View key={item.id}>
                                    <View style={styles.scheduleDetail}>
                                        <Image style={{ width: 3, height: '100%', marginRight: 10 }} source={{ uri: BAR_SCHEDULE }}></Image>
                                        <View style={{ marginRight: 40 }}>
                                            <Text style={styles.textTitleDetail}>{item.textTitleDetail}</Text>
                                            <Text style={styles.textContentDeatail}>{item.textContentDetail}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <Text style={styles.textScheduleDetail}>Nhận xét</Text>

                        <View style={{backgroundColor:'red', height:10000}}>
                            {dataFeedBack.map((item) => (
                                <View key={item._id}>
                                    <View style={styles.feedBack}>
                                        <View style={styles.reviewer}>
                                            <Image style={styles.avtFeedBack} source={{ uri: item.imageAVT }}></Image>
                                            <View style={styles.backgroundFeedBack}>
                                                <View style={styles.grHeaderReviewer}>
                                                    <Text style={styles.nameReviewer}>{item.name}</Text>
                                                    <View style={styles.star}>
                                                        <Text style={styles.textStar}>5</Text>
                                                        <Image style={styles.starEvaluate} source={{ uri: ICON_START_HOTEL }}></Image>
                                                    </View>
                                                </View>
                                                <Text numberOfLines={3} style={styles.textReviewer}>{item.textFeedBack}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnBuyTickets}>
                        <Text style={styles.textBuyTicket}>Mua Vé Nào</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default DetailTour

const styles = StyleSheet.create({
    // CONTAINER
    container:
    {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F4F3F3'

    },

    // HEADER
    header:
    {
        width: windowWidth,
        height: windowHeight - (windowHeight * 70) / 100,
    },

    imgHeader:
    {
        width: '100%',
        height: '100%',
    },
    // CENTER

    center:
    {
        paddingBottom: 100,
        backgroundColor:'#fff'

    },

    centerTitle:
    {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 5,
        width: windowWidth - 10
    },

    grCenterLeft:
    {
        marginRight: 2,
        marginLeft: 10
    },

    textName:
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },

    overallSchedule:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },

    imgIconCenter:
    {
        width: 18,
        height: 18,
        tintColor: '#ccc'
    },

    grTextSchedule:
    {
        marginLeft: 5
    },

    grDaySchedule:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },

    grSchedule:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },

    textSchedule:
    {
        fontSize: 9,
        color: '#888484',
        fontWeight: 'bold'
    },

    grDepature:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },



    // GROUP CENTER RIGHT

    grCenterRight:
    {
        width: 110,
        height: 80,
        backgroundColor: '#F6E5E5',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },

    price:
    {
        color: '#E8330B',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    remainingTickets:
    {
        color: '#888484',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: 3
    },

    // CENTER CONTENT

    centerContent:
    {
        backgroundColor: '#fff',
        width: windowWidth - 10,
        height: windowHeight,
        marginLeft: 5,
        borderRadius: 10,
        marginTop: 10
    },

    textHotel:
    {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    },

    hotel:
    {
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,

    },
    imgHotel:
    {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 5,
        alignItems: 'center'
    },

    nameHotel:
    {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },

    detailHotel:
    {
        marginLeft: 10,
        flexDirection: 'row'
    },


    vehicle:
    {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10
    },

    textVehicle:
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },

    imgVehicle:
    {
        width: 30,
        height: 30,
        marginLeft: 10
    },

    textScheduleDetail:
    {
        marginLeft: 10,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },

    scheduleDetail:
    {
        marginLeft: 20,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:20
    },

    textTitleDetail:
    {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },

    textContentDeatail:
    {
        fontSize: 14,
        fontWeight: '500',
        color: '#888484'
    },

    feedBack:
    {
        width:windowWidth,
    },

    textFeedBack:
    {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10
    },

    reviewer:
    {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight:20
    },

    avtFeedBack:
    {
        width: 30,
        height: 30
    },

    backgrounFeedBack:
    {
        backgroundColor: '#fff',
        shadowColor: '#ccc',
        elevation: 5,

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
        height: windowHeight - (windowHeight * 88) / 100,
        width: windowWidth - (windowWidth * 20) / 100
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
// FOOTER
    footer:
    {
        paddingBottom:120,
        alignItems:'center',
        backgroundColor:'#fff'
    },

    btnBuyTickets:
    {
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        width:windowWidth-150,
        height:50,
        borderRadius:30
    },

    textBuyTicket:
    {
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }





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


const dataSchedule = [
    {
        id: '1',
        textTitleDetail: 'Ngày 1 - Sân bay Tân Sơn Nhất ( Tự ăn uống )',
        textContentDetail: 'Quý khách tập trung tại sân bay Tân Sơn Nhất (ga trong nước)',
    },

    {
        id: '2',
        textTitleDetail: 'Ngày 2 - HÀ NỘI - SAPA - BẢN CÁT CÁT 03 bữa ăn: (Sáng, Trưa, Chiều)',
        textContentDetail: '- Lăng Hồ Chủ Tịch (không viếng vào thứ 2, thứ 6 hàng tuần và giai đoạn bảo trì định kì hàng năm) tham quan và tìm hiểu cuộc đời và sự nghiệp của vị cha già dân tộc tại Nhà Sàn Bác Hồ, Bảo Tàng Hồ Chí Minh, Chùa Một Cột. Tiếp tục hành trình, Quý khách khởi hành đi Sapa theo cao tốc Hà Nội – Lào Cai. Trên đường, Quý khách dùng cơm trưa tại nhà hàng địa phương. Đến nơi, Quý khách tham quan',
    },


]

const dataHotel = [
    {
        id: '1',
        image: IMG_DETAIL_TOUR,
        nameHotel: 'Kim Hoàng',
    },

    {
        id: '2',
        image: IMG_DETAIL_TOUR,
        nameHotel: 'Hoàng Yến',
    },


    {
        id: '3',
        image: IMG_DETAIL_TOUR,
        nameHotel: 'Phượng Hoàng',
    },

]


