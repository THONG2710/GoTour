import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LINE } from '../../resource/assets/images';
import TrainModel from '../../../domain/Entities/TrainModel';

interface Item{
    data: TrainModel;
}

const ItemListTrain:React.FC<Item>= (props) => {
  
    const {data}=props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.item2}>
                <View>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{data.departureTime}</Text>
                        <View style={{ margin: 10 }}>
                            <Image source={{uri: LINE}} style={styles.line} />
                            {/* <Text style={{ textAlign: 'center' }}>{timecount}</Text> */}
                        </View>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{data.endTime}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -10 }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>{data.from}</Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>{data.to}</Text>
                    </View>

                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'blue', fontSize: 15, fontWeight: 'bold' }}>{data.price}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default ItemListTrain


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item2: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 70,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    line:{
        width:64,
        height:5
    }
});