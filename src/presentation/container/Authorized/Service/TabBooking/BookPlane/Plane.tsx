import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import ItemListPlane from '../../../../../component/Items/ItemListPlane'
import { ICON_CALENDAR, ICON_TRAIN, ICON_TRAIN2 } from '../../../../../resource/assets/images'
import { getData } from '../../../../../../core/RequestMethod'
import { ID_HOME_A } from '../../../../../../core'
import AirlineModel from '../../../../../../domain/Entities/AirLineModel'

const Plane: React.FC = () => {
    const [listTicket, setListTicket] = useState<AirlineModel[]>([]);

    const render = ({ item }: { item: AirlineModel }) => (
        <ItemListPlane data={item} />
    )
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const getAirlineTicket = async () => {
        const res = await getData('http://'+ID_HOME_A+':3000/api/airline/getAllAirlineTicket');
        setListTicket(res.tickets);
    };

    useEffect(() => {
      getAirlineTicket()
    }, [])
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.book}>
                    <View style={styles.item}>
                        <TouchableOpacity>
                            <Text style={styles.txt_location}>Điểm khởi hành</Text>
                        </TouchableOpacity>
                        <Image style={styles.icon_train} source={{ uri: ICON_TRAIN2 }} />
                        <TouchableOpacity>
                            <Text style={styles.txt_location}>Điểm đến</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item1}>
                        <Image source={{ uri: ICON_CALENDAR }} style={styles.icon_calendar} />
                        <TouchableOpacity>
                            <Text style={styles.txt_calendar}>T6,20 thg10</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item1}>

                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.txt_ticket}>Vé khứ hồi</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btn_Find}>
                            Tìm
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container_title}>
                    <Image source={{ uri: ICON_TRAIN2 }} style={styles.icon_plane} />
                    <Text style={styles.title}>Hãy lựa chọn chuyến tàu phụ hợp cho bạn</Text>
                </View>
                <View style={{}}>
                    <FlatList
                        data={listTicket}
                        renderItem={render}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        style={styles.flatlist}
                    />
                </View>
            </View>
        </ScrollView>

    )

}

export default Plane

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    img: {
        position: 'absolute',
        width: '100%',
        height: 150
    },
    book: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 'auto',
        marginVertical: 10,
        borderRadius: 20,
        padding: 13,

        width: '95%',

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5
    },
    item1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#F7DEC6',
        marginTop: 10,
        borderRadius: 10,
        padding: 10


    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    item3: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: '#8F8F8F',
        borderRadius: 10,
        height: 'auto',
        paddingLeft: 10,
        paddingRight: 10,

    },
    list: {
        marginTop: 450,

        width: '100%',

    },
    checkbox: {
        alignSelf: 'center',
    },
    txt_location: {
        fontSize: 15,
        color: 'black'
    },
    icon_train: {
        alignSelf: 'center',
        width: 25,
        height: 25
    },
    icon_calendar: {
        width: 25,
        height: 25,
        marginLeft: 3
    },
    txt_calendar: {
        fontSize: 14,
        color: 'black',
        margin: 5
    },
    txt_ticket: {
        fontSize: 14,
        color: 'black',
    },
    btn_Find: {
        fontSize: 20,
        color: 'orange',
        textAlign: 'center',
        fontWeight: 'bold'

    },
    container_title: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '95%',
        alignItems:'center',
        marginBottom:10
    },
    title: {
        fontSize: 20, color: 'black',
        fontWeight: 'bold', 
        marginHorizontal: 15,
    },
    icon_plane: {
        width: 30,
        height: 30
    },
    flatlist: {
        backgroundColor: '#EBEBEB',
        paddingBottom:20
    }
})
const DATA = [
    { id: '1', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p", vietJet: 3 },
    { id: '2', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p", vietJet: 4 },
    { id: '3', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p", vietJet: 5 },
    { id: '4', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p", vietJet: 6 },
    { id: '5', nameFrom: "Hồ Chí Minh", timeFrom: "05:35", nameTo: "Hà Nội", timeTo: "12:15", price: "4.462.000", timecount: "6h 40p", vietJet: 7 },
]