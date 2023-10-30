import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Input } from '@rneui/base'
import FavouriteList from './components/FavouriteList'

const MainHome: React.FC = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Image background */}
                <Image source={require('../../img/tourplace.png')} style={styles.imgBackground} />
                {/* HEADER */}
                <View style={styles.header}>
                    <Image source={require('../../img/menu.png')} style={{ width: 24, height: 24 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../img/bell.png')} style={{ marginRight: 10, width: 24, height: 24 }} />
                        <Image source={require('../../img/avatar.png')} style={{ marginStart: 5, marginTop: -10, width: 47, height: 47 }} />
                    </View>
                </View>
                {/* LOGO */}
                <View style={styles.logo}>
                    <Image source={require('../../img/location.png')} style={{ width: 33, height: 52 }} />
                    <View style={{ marginHorizontal: 10 }}>
                        <Image source={require('../../img/GoTour.png')} style={{ width: 170, height: 38 }} />
                        <Image source={require('../../img/title.png')} style={{ width: 135, height: 10 }} />
                    </View>
                </View>
                {/* SEARCH */}
                <View style={styles.search}>
                    <TouchableOpacity>
                        <Image source={require('../../img/search.png')} style={{ marginVertical: 11, width: 24, height: 24 }} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                {/* CATEGORY */}
                <Text style={{ marginHorizontal: 15, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Danh mục</Text>
                <View style={styles.category}>
                    <View style={styles.item}>
                        <Image source={require('../../img/moutain.png')} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Núi</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../img/sea.png')} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Biển</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../img/island.png')} style={{ width: 32, height: 32 }} />
                        <Text style={{ color: 'black' }}>Đảo</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../img/trai.png')} style={{ width: 32, height: 32 }} />
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
                            <Image source={require('../../img/hotel.png')} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Khách sạn</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={require('../../img/travelling.png')} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Máy bay</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={require('../../img/bus.png')} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Xe buýt</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.itemService}>
                            <Image source={require('../../img/ship.png')} style={{ width: 18, height: 16 }} />
                            <Text style={styles.nameService}>Thuyền</Text>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                {/* TOP LIMIT */}
                <Text style={{ marginHorizontal: 15, marginTop: -1, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Hàng đầu</Text>
                <View style={styles.sliderImg}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={require('../../img/img1.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img2.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img3.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img1.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img1.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img1.png')} style={styles.imgSlider}/>
                    <Image source={require('../../img/img1.png')} style={styles.imgSlider}/>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default MainHome