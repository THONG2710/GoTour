import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#FE532C',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    icon_back: {
        width: 30,
        height: 30,
    },
    txt_title1: {
        color: '#FE532C'
    },
    txt_title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        color: 'black',
        fontSize: 18,
        marginHorizontal: 15,
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#ECF0F9',
        height: 200,
        marginHorizontal: 10,
        borderRadius: 10
    },
    txt_input: {
        fontSize: 20,

        padding: 10,
        width: '100%'
    },
    btn_pic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10
    },
    take_pic: {
        height: 36,
        width: '48%',
        backgroundColor: '#ECF0F9',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#CACACA',
        justifyContent: 'center'
    },
    imgPic: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    image: {
        justifyContent:'space-between',
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    imgStore: {
        width: '100%',
        height: 164,
        borderRadius: 10
    },
    imgStore1: {
        width: '100%',
        height: 164,
        borderRadius: 10
    },
    imageLibaryStyle: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'48%'
      
    },
    numberImage: {
        fontSize: 24,
        lineHeight: 35,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
    },
    btn_post:{
        marginHorizontal:10,
        backgroundColor:'#FF7A00',
        height:60,
        borderRadius:10,
        marginVertical:20,
        justifyContent:'center'
    },
    txt_post:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }

})

export default styles

