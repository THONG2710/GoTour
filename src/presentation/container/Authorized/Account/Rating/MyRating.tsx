import { View, Text, Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '@rneui/base'
import TabViewItem from '../../../components/custom/TabViewItem'
import WaitRating from './Tab/waitRating'
import DoneRating from './Tab/doneRating/DoneRating'
import TabViewTwoItem from '../../../components/custom/TabViewItemTwoScreen'
import { BACKGROUND_RATING, ICON_BACK, ICON_HOME, ICON_SEARCH } from '../../../../resource/assets/images'

const MyRating: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <Image source={{uri: BACKGROUND_RATING}} style={styles.imgBackground} />
            <View style={styles.iconHeader}>
                <TouchableOpacity>
                    <Image source={{uri: ICON_BACK}} style={styles.backBtn} />
                </TouchableOpacity>
                <Text style={styles.titleText}>Đánh Giá</Text>
                <TouchableOpacity>
                    <Image source={{uri: ICON_HOME}} style={styles.backBtn} />
                </TouchableOpacity>
            </View>
            {/* SEARCH */}
            <View style={styles.search}>
                <TextInput placeholder='Tìm kiếm...' style={styles.inputSearch}/>
                <Image source={{uri: ICON_SEARCH}} style={styles.searchBtn}/>
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

export default MyRating