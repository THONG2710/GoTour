import { View, Text, Touchable, TouchableOpacity, Image,ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import BookSeatPlane from './components/bookSeatPlane'





const BookingPlane: React.FC = (props) => {

   
    return (
        <View style={styles.container}>
            {/* Phần đầu */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../img/back.png')} style={{ marginVertical: 20 }} />
                </TouchableOpacity>
                <Image source={require('../../img/logo.png')} />
            </View>
            {/* Phần hiện thông tin vé */}
           
            <View style={styles.itemDetail}>
                <Text style={styles.textBtn} >Chiều đi</Text>
                <View style={styles.dateTime}>
                    <View style={styles.childItem}>
                        <Text style={{ color: 'black', marginHorizontal: 10 }}>T6,20 Thg10</Text>
                        <Text style={{ color: 'black' }}>|</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10 }}>21:27-00:04</Text>
                    </View>
                    <View style={styles.childItem}>
                        <Text style={{ color: 'black', marginHorizontal: 10 }}>Tp.Hồ Chí Minh</Text>
                        <Text style={{ color: 'black' }}>-</Text>
                        <Text style={{ color: 'black', marginHorizontal: 10 }}>Hà Nội</Text>
                    </View>
                    <View style={styles.childItem1}>
                        <Image source={require('../../img/clock.png')} />
                        <Text style={{ color: 'black', marginStart: 5 }}>2g 37h</Text>
                    </View>
                </View>
            </View>
      
            <View style={styles.passengerEvent}>
                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Hành khách</Text>
                    <Text style={{ color: 'black' }}>1 người lớn</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.Btn}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', marginVertical: 10 }}>Thêm hành khách</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.detailPassenger}>
                <Text style={{ color: 'black' }}>NGUYEN VAN THONG</Text>
            </View>
            {/* Phần chọn chỗ */}
            <View style={styles.seatView}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Chọn chỗ ngồi</Text>
                <View style={styles.numberSeatView}>
                    <Text style={{color:'white',textAlign:'center',fontSize:16}}>2</Text>
                </View>
            </View>

                <BookSeatPlane/>
             
            <View style={styles.pay}>
                <View style={{alignSelf:'center'}}>
                    <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>2.600.000 đ</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../img/voucher.png')}/>
                        <Text style={{color:'blue',marginStart:5,marginVertical:5}}>Tiết kiệm</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.next}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>   
        </View>
        
    )
    
}

export default BookingPlane