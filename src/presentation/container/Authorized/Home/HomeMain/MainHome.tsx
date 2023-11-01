import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Input } from '@rneui/base'
import FavouriteList from '../Components/FavouriteList'
import { AVATAR, BUS, HOTEL, ICON_BELL, ICON_CAMPING, ICON_ISLAND, ICON_MARKER, ICON_MENU, ICON_MOUNTAIN, ICON_SEA, ICON_SEARCH, IMAGE1, IMAGE2, IMAGE3, LOGO_GOTOUR, SHIP, TOURPLACE, TRAVELLING, TXTTITLE } from '../../../../resource/assets/images'
import { HomeMainProp } from './type'

const MainHome: React.FC<HomeMainProp> = (props) => {
    const [text, onChangeText] = React.useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Image background */}
                <Image source={{uri: TOURPLACE}} style={styles.imgBackground} />
                {/* HEADER */}
                <View style={styles.header}>
                    <Image source={{uri: ICON_MENU}} style={{ width: 24, height: 24 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{uri: ICON_BELL}} style={{ marginRight: 10, width: 24, height: 24 }} />
                        <Image source={{uri: AVATAR}} style={{ marginStart: 5, marginTop: -10, width: 47, height: 47 }} />
                    </View>
                </View>
                {/* LOGO */}
                <View style={styles.logo}>
                    <Image source={{uri: ICON_MARKER}} style={{ width: 33, height: 52 }} />
                    <View style={{ marginHorizontal: 10 }}>
                        <Image source={{uri: LOGO_GOTOUR}} style={{ width: 170, height: 38 }} />
                        <Image source={{uri: TXTTITLE}} style={{ width: 135, height: 10 }} />
                    </View>
                </View>
                {/* SEARCH */}
                <View style={styles.search}>
                    <TouchableOpacity>
                        <Image source={{uri: ICON_SEARCH}} style={{ marginVertical: 11, width: 24, height: 24 }} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Tìm kiếm địa điểm . . .'
                    />
                </View>
                {/* CATEGORY */}
                <Text style={{ marginHorizontal: 15, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Danh mục</Text>
                <View style={styles.category}>
                    <View style={styles.item}>
                        <Image source={{uri: ICON_MOUNTAIN}} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Núi</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={{uri: ICON_SEA}} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Biển</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={{uri: ICON_ISLAND}} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Đảo</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={{uri: ICON_CAMPING}} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Cắm trại</Text>
                    </View>
                </View>
                {/* FAVOURITE */}
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Yêu thích</Text>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>See All</Text>
                </View>
                <FavouriteList />
                {/* SERVICE */}
                <Text style={{ marginHorizontal: 15, marginTop: -1, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Dịch vụ</Text>
                <View style={styles.service}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={{uri: HOTEL}} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Khách sạn</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={{uri: TRAVELLING}} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Máy bay</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={{uri: BUS}} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Xe buýt</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={{uri: SHIP}} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Thuyền</Text>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                {/* TOP LIMIT */}
                <Text style={{ marginHorizontal: 15, marginTop: -1, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Hàng đầu</Text>
                <View style={styles.sliderImg}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={{uri: IMAGE1}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE2}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE3}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE1}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE1}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE1}} style={styles.imgSlider}/>
                    <Image source={{uri: IMAGE1}} style={styles.imgSlider}/>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default MainHome