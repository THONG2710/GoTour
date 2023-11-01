import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import { AVATAR, CONTACT, EVALUTE, FAVORITES, HISTORY, ICON_NEXT, ICON_RIGHT, ICON_SETTING, INTRODUCE, LOGO_GOTOUR, MEDAL_S, POST, VOUCHER } from '../../../../resource/assets/images'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.row}>

                    <View style={styles.avtHeader}>
                        <View style={{ backgroundColor: '#6A9C89', width: 220, height: 70, position: 'relative', borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                            <Image style={{ position: 'absolute', marginLeft: -30, width: 70, height: 70 }} source={require('../../../resource/assets/images/avatar.png')}></Image>
                            <View style={styles.grPoint}>
                                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold' }}>102 Điểm</Text>
                                <Image style={{ width: 40, height: 40 }} source={require('../../../resource/assets/images/point.png')}></Image>
========
                            <Image style={{ position: 'absolute', marginLeft: -30, width: 70, height: 70 }} source={{uri: AVATAR}}></Image>
                            <View style={styles.grPoint}>
                                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold' }}>102 Điểm</Text>
                                <Image style={{ width: 40, height: 40 }} source={{uri: MEDAL_S}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx

                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>

<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                        <Image source={require('../../../resource/assets/images/setting.png')}></Image>
========
                        <Image source={{uri: ICON_SETTING}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                    </TouchableOpacity>
                </View>
                <View style={styles.grText}>
                    <Text style={styles.text}>Xin Chào </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nguyễn Văn Thông</Text>
                </View>
                <View style={styles.grProfile}>
                    <Text style={styles.text}>Thông tin cá nhân</Text>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                    <Image style={{ marginLeft: 20 }} source={require('../../../resource/assets/images/arrowRight.png')}></Image>
========
                    <Image style={{ marginLeft: 20 }} source={{uri: ICON_RIGHT}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                </View>
            </View>

            <View style={styles.center}>
                <TouchableOpacity>
                    <View style={{ height: 60, width: '100%', backgroundColor: '#6A9C89', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                        <Image style={{ marginLeft: 10 }} source={require('../../../resource/assets/images/voucher.png')}></Image>
========
                        <Image style={{ marginLeft: 10 }} source={{uri: VOUCHER}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ marginBottom: 10, fontSize: 12, color: '#fff' }}>Sử dụng khuyến mãi để tiết kiệm nhiều hơn</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Bạn hiện có</Text>
                                <Text style={{ fontSize: 18, color: '#fff' }}>  1  </Text>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Mã khuyến mãi</Text>
                            </View>
                        </View>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                        <Image style={{ marginRight: 10 }} source={require('../../../resource/assets/images/next.png')}></Image>
========
<Image style={{ marginRight: 10 }} source={{uri: ICON_NEXT}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx

                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TouchableOpacity>
                        <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>

                            <View style={{ backgroundColor: '#fff', width: 120, height: 100, borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                <Image source={require('../../../resource/assets/images/history.png')}></Image>
========
                                <Image source={{uri: HISTORY}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                <Text style={{ marginTop: 10 }}>Lịch sử</Text>
                            </View>
                        </Shadow>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>

                            <View style={{ backgroundColor: '#fff', width: 120, height: 100, borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                <Image source={require('../../../resource/assets/images/favourite.png')}></Image>
========
                                <Image source={{uri: FAVORITES}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                <Text style={{ marginTop: 10 }}>Yêu thích</Text>
                            </View>
                        </Shadow>

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>

                            <View style={{ backgroundColor: '#fff', width: 120, height: 100, borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                <Image source={require('../../../resource/assets/images/post.png')}></Image>
========
                                <Image source={{uri: POST}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                <Text style={{ marginTop: 10 }}>Bài đăng</Text>
                            </View>
                        </Shadow>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                    <Shadow distance={2} startColor={'#ccc'} endColor={'#ff00ff10'} offset={[0, 15]}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: '100%', height: 100, borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'space-around' }}>
                            <TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                    <Image source={require('../../../resource/assets/images/evalute.png')}></Image>
========
                                    <Image source={{uri: EVALUTE}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                    <Text style={{ marginTop: 10, textAlign: 'center' }}>Đang chờ{`\n`} đánh giá</Text>
                                </View>
</TouchableOpacity>
                            <TouchableOpacity>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                    <Image source={require('../../../resource/assets/images/introduce.png')}></Image>
========
                                    <Image source={{uri: INTRODUCE}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                    <Text style={{ marginTop: 10, textAlign: 'center' }}>Giới thiệu về {`\n`} Gotour</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                                    <Image source={require('../../../resource/assets/images/contact.png')}></Image>
========
                                    <Image source={{uri: CONTACT}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                                    <Text style={{ marginTop: 10, textAlign: 'center' }}>Chăm sóc {`\n`} khách hàng</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </Shadow>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={{ alignItems: 'center', height: 160 }}>
<<<<<<<< HEAD:src/presentation/container/Profille/Screen/Profile.tsx
                    <Image style={{ position: 'relative', top: -20 }} source={require('../../../resource/assets/images/logo.png')}></Image>
========
                    <Image style={{ position: 'relative', top: -20 }} source={{uri: LOGO_GOTOUR}}></Image>
>>>>>>>> thong:src/presentation/container/Authorized/Account/Profile/Profile.tsx
                    <Text style={{ position: 'absolute', color: '#000', bottom: 20 }}>Dịch vụ mà bạn có thể tin cậy</Text>
                </View>
                <TouchableOpacity>
                    <View style={{ width: '100%', height: 46, backgroundColor: '#6A9C89', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#C1D8C3' }}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginHorizontal: 10
    },

    header:
    {
        backgroundColor: '#C1D8C3',
        flex: 0.25,
        marginTop: 10,
        borderRadius: 10,
    },

    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10

    },

    imgHeader:
    {
        position: 'relative'
    },

    imgCoin:
    {
        width: '60%',
        height: '30%'
    },

    avtHeader:
    {
        marginLeft: 30,
        marginTop: 5
    },

    grPoint:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        height: 60,
        marginLeft: 20
    },

    grText:
    {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    grProfile:
    {

        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    text:
    {
        fontSize: 14
    },

    center:
    {
flex: 0.4,
        marginTop: 10,
    },

    footer:
    {
        flex: 0.35,
    }
})