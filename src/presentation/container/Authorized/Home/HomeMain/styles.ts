import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,     
    },
    imgBackground: {
        position: 'absolute',
        width: '100%',
        height: 220
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 20
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    search: {
        height: 46,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 70,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    input: {
        height: 46,
        width: 300,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        fontSize: 18
    },
    category:{
        flexDirection:'row',
        margin:10,
        justifyContent:'space-around'
    },
    item:{
        backgroundColor:'white',
        height:75,
        width:75,
        alignItems:'center',
        paddingVertical:12,
        borderRadius:10
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,     
        alignItems:'center'
    },
    service:{
        flexDirection:'row',
        marginVertical:10,
        marginLeft:10
    },
    itemService:{
        flexDirection:'row',
        width:120,
        height:40,
        backgroundColor:'#F45E09',
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:15,
        marginHorizontal:10
    },
    nameService:{
        color:'white',
        marginStart:5
    },
    sliderImg:{
        flexDirection:'row',
        marginVertical:10,
        marginLeft:10
    },
    imgSlider:{
        marginRight:10,
        borderRadius:10,
        width:150,
        height:100
    }

})
export default styles

