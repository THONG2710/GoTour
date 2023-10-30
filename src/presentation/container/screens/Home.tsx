import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AVATAR, BUS, FRAME, HOTEL, ICON_BELL, ICON_CAMPING, ICON_ISLAND, ICON_MARKER, ICON_MENU, ICON_MOUNTAIN, ICON_SEA, ICON_SEARCH, IMAGEMAIN_FRAME, SHIP, TRAVELLING, TXTTITLE, TXT_GOTOUR } from '../../resource/assets/images'

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: IMAGEMAIN_FRAME}}/>
        <Image style={styles.menu} source={{uri: ICON_MENU}}/>
        <Image style={styles.bell} source={{uri: ICON_BELL}}/>
        <Image style={styles.avatar} source={{uri: AVATAR}}/>
        <Image style={{ marginTop:65,marginLeft:80,position: 'absolute'}} source={{uri: ICON_MARKER}}/>
        <Image style={{ marginTop:70,marginLeft:130,position: 'absolute'}} source={{uri: TXT_GOTOUR}}/>
        <Image style={{ marginTop:105,marginLeft:130,position: 'absolute'}} source={{uri: TXTTITLE}}/>

      </View>
      <Text style={styles.search}>Tìm kiếm địa điểm...</Text>
      <Image style={{marginTop:-35, marginLeft:40,}} source={{uri: ICON_SEARCH}}/>
      <View>
         <Text style={{marginLeft:15 ,marginTop:30,fontSize:20,fontWeight:'bold',color:'black'}}>Danh mục</Text>
        <View style={styles.categories}>
          <View style={styles.cate}>
            <Image source={{uri: ICON_MOUNTAIN}}/>
            <Text style={{color:'black'}}>Núi</Text>
          </View> 
          <View style={styles.cate}>
            <Image source={{uri: ICON_SEA}}/>
            <Text style={{color:'black'}}>Biển</Text>
          </View> 
          <View style={styles.cate}>
            <Image source={{uri: ICON_ISLAND}}/>
            <Text style={{color:'black'}}>Đảo</Text>
          </View> 
          <View style={styles.cate}>
            <Image source={{uri: ICON_CAMPING}}/>
            <Text style={{color:'black'}}>Cắm trại</Text>
          </View> 
          </View>
         <Text style={{marginLeft:15 ,marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Yêu thích</Text>
          <View style={styles.categories}>
              <Image style={{margin:10}} source={{uri: FRAME}}/>
              <Image style={{margin:10}} source={{uri: FRAME}}/>
    
          </View>
         <Text style={{marginLeft:15 ,marginTop:1,fontSize:20,fontWeight:'bold',color:'black'}}>Dịch vụ</Text>
          <View style={styles.categories}>
            <View style={styles.cateServiceSelect}>
              <Image source={{uri: HOTEL}}/>
              <Text style={{color:'white',marginLeft:5}}>Khách sạn</Text>  
            </View> 
            <View style={styles.cateService}>
              <Image source={{uri: TRAVELLING}}/>
              <Text style={{color:'black',marginLeft:5}}>Máy bay</Text>  
            </View> 
            <View style={styles.cateService}>
              <Image source={{uri: BUS}}/>
              <Text style={{color:'black',marginLeft:5}}>Xe buýt</Text>  
            </View> 
            <View style={styles.cateService}>
              <Image source={{uri: SHIP}}/>
              <Text style={{color:'black',marginLeft:5}}>Thuyền</Text>  
            </View> 
          </View>
         <Text style={{marginLeft:15 ,marginTop:5,fontSize:20,fontWeight:'bold',color:'black'}}>Hàng đầu</Text>

      </View>   
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
      flex:1,
      
  },
  menu:{
    marginTop:20,
    marginLeft:15,
    position: 'absolute'
  },
  bell:{
    marginTop:20,
    marginLeft:300,
    position: 'absolute'
  },
  avatar:{
    marginTop:12,
    marginLeft:335,
    position: 'absolute'
  },
  search:{
    width:330,
    marginTop:-25,
    height:50,
    marginLeft:30,
    backgroundColor:'white',
    paddingTop:16,
    paddingLeft:40,
    borderRadius:10,
    fontSize:15
  },
  cate:{
  marginTop:10,
    width:60,
    height:60,
    backgroundColor:'white',
    alignItems:'center',
    marginLeft:30,
    borderRadius:5,
    paddingTop:5,
    
  },
  categories:{
    flexDirection:'row'
  },cateService:{
    marginTop:10,
      width:100,
      height:40,
      backgroundColor:'white',
      alignItems:'center',
      marginLeft:15,
      borderRadius:5,
      padding:5,
      flexDirection:'row',
      textAlign:'center'
    },cateServiceSelect:{
      marginTop:10,
        width:100,
        height:40,
        backgroundColor:'#F45E09',
        alignItems:'center',
        marginLeft:15,
        borderRadius:5,
        padding:5,
        flexDirection:'row',
        textAlign:'center'
      },

})