import { View, Text, Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '@rneui/base'
import TabViewItem from '../../components/custom/TabViewItem'
import WaitRating from './components/waitRating'
import DoneRating from './components/doneRating'
import TabViewTwoItem from '../../components/custom/TabViewItemTwoScreen'

const HisRating: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <Image source={require('../../img/backgroundRating.png')} style={styles.imgBackground} />
            <View style={styles.iconHeader}>
                <TouchableOpacity>
                    <Image source={require('../../img/backWhite.png')} style={styles.backBtn} />
                </TouchableOpacity>
                <Text style={styles.titleText}>Đánh Giá</Text>
                <TouchableOpacity>
                    <Image source={require('../../img/homeWhite.png')} style={styles.backBtn} />
                </TouchableOpacity>
            </View>
            {/* SEARCH */}
            <View style={styles.search}>
                <TextInput placeholder='Tìm kiếm...' style={styles.inputSearch}/>
                <Image source={require('../../img/search.png')} style={styles.searchBtn}/>
            </View>
            {/* BODY RATING */}
            <View style={styles.bodyRating}>
                <TabViewTwoItem
                
                tabStyle={{ backgroundColor: 'white' }}
                titleStyle={{ fontSize: 13, color: 'black' }}
                title1='Đang chờ đánh giá'
                title2='Đã đánh giá'
               
        
                screen2={<DoneRating />}
                screen1={<WaitRating />}
           
                
                />
            </View>
        </View>
    )
}

export default HisRating