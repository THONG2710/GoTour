import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Deals = () => {
    return (
        // <View style={{ flex: 1,backgroundColor:'#082940' }}>
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //         <Text style={styles.textKhuyenmai}>KHUYẾN MÃI</Text>
        //         <View style={{ width: '100%', height: 250 }}>
        //             <Image style={styles.background} source={require("../resource/images/backgroundDeals.png")} />
        //             <Image style={styles.logo} source={require("../resource/images/logo.png")} />
        //         </View>
        //         <View style={styles.viewMagiamgia}>
        //             <Text style={styles.textMagiamgia}>Mã giám giá</Text>
        //             <Text style={styles.textGiamgia}>Tận hưởng GIẢM GIÁ lên đến 800.000 VNĐ khi đặt chỗ tại GOTOUR</Text>
        //             <View style={styles.phieugiamgia}>
        //                 <View style={{flex:7,marginLeft:10}}>
        //                     <Text  style={{color:'#FF3659',fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:5}}>Giảm giá 800.000 VND OFF*</Text>
        //                     <Text style={{color:'#FFBB7B',fontSize:12}}>Chi tiêu tối thiểu từ 5.000.000 VND</Text>
        //                 </View>
        //                 <View style={{flexDirection:'row',marginTop:-10,marginBottom:-10}}>
        //                     <View style={{width:1,backgroundColor:'#FF3659',}}></View>
        //                     <View style={{flexDirection:'column',justifyContent:'space-between'}}>
        //                         <View style={{width:10,height:10,backgroundColor:'#FF3659',borderRadius:50,marginTop:-5}}></View>
        //                         <View style={{width:10,height:10,backgroundColor:'#FF3659',borderRadius:50,marginBottom:-5}}></View>
        //                     </View>
        //                     <View style={{width:1,backgroundColor:'#FF3659'}}></View>
                            
        //                 </View>
        //                 <View style={{flex:2.7}}>
        //                     <Text style={{color:'#FF3659',fontSize:13,fontWeight:'bold',alignSelf:'center',marginTop:5}}>800000VND</Text>
        //                     <Pressable style={styles.btnNhanNgay}>
        //                         <Text style={{color:'#FF3659',fontWeight:'bold',fontSize:12}}>Nhận ngay</Text>
        //                     </Pressable>
        //                 </View>
        //             </View>
        //         </View>
        //         <Text style={styles.textChuyenBay}>CHUYẾN BAY</Text>
        //         <View></View>
        //     </ScrollView>
        // </View>
        <View>
            <Text>Đang phát triển</Text>
        </View>
    );
};
export default Deals;
const styles = StyleSheet.create({
    textKhuyenmai: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
        marginBottom:10,
        marginTop:10,
        
    },

    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'stretch',
    },
    logo: {
        width: 150,
        height: 150,
    },
    viewMagiamgia: {
        backgroundColor:'#FF3659',
        margin:10,
        borderRadius:5,
        paddingBottom:10
    },
    textMagiamgia: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
    textGiamgia:{
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 20,
        marginRight:10
        
    },
    phieugiamgia:{
        flexDirection:'row',
        backgroundColor:'#FCECDD',
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        padding:10,
        marginTop:5,
    },
    btnNhanNgay:{
        borderWidth:1,
        borderColor:'#FF3659',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:5,
        alignItems:'center',
        alignSelf:'center',
        marginRight:-5,
        marginTop:5,
    },
    textChuyenBay:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:20,
        
    },
    
});

