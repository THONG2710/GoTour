import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { enableFreeze, enableScreens } from 'react-native-screens';
export interface item{
    id:string,
    number:string
}


const ItemSeat:React.FC<item> = (props:any) => {
    const [isSelected,setIsSelected]=useState(false);
    const{id,number}=props;
    const onPressSeat=(id:any)=>{
        setIsSelected(! isSelected);   
        console.log(id)
    }
  
  return (
    <View>
      <View >
              <TouchableOpacity onPress={onPressSeat} >
                  <Text style={isSelected? styles.seatChoose:styles.seat}>{number}</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default ItemSeat

const styles = StyleSheet.create({
    ItemRowSeat: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      seat: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 5,
        marginHorizontal:10,
        marginRight:20,
        marginVertical:10,

      },
      seatChoose: {
        width: 35,
        height: 35,
        backgroundColor: '#FF7A00',
        borderRadius: 5,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal:10,
        marginRight:20,
        marginVertical:10,
  



      }
    
})