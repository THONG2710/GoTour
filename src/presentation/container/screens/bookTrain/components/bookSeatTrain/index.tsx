import { View, Text, Touchable, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import ItemSeat from './ItemSeat'


const BookSeatTrain: React.FC = () => {
  const render = ({ item }: { item: (typeof seatRows)[0] }) => (
    <ItemSeat {...item} />

  )




  return (
    <View style={styles.container}>
      {/* <View style={styles.ItemRowSeat}>
              <TouchableOpacity onPress={onPressSeat}>
                  <Text style={isSelected? styles.seatChoose:styles.seat}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressSeat}>
                  <Text style={isSelected? styles.seatChoose:styles.seat}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressSeat}>
                  <Text style={isSelected? styles.seatChoose:styles.seat}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressSeat}>
                  <Text style={isSelected? styles.seatChoose:styles.seat}>4</Text>
              </TouchableOpacity>
          </View> */}
     
      <FlatList
        style={{padding:20}}
        data={seatRows}
        renderItem={render}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={4}
      
      />

    </View>
  )
}

export default BookSeatTrain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#3C60BF',
    height: 'auto',
  
    paddingTop: 25
  },
  seat:{
    justifyContent:'space-around',
    
  }
  
})
const seatRows = [
  {id:'1',number:'1'},
  {id:'2',number:'2'},
  {id:'3',number:'3'},
  {id:'4',number:'4'},
  {id:'5',number:'5'},
  {id:'6',number:'6'},
  {id:'7',number:'7'},
  {id:'8',number:'8'},
  {id:'9',number:'9'},
  {id:'10',number:'10'},
  {id:'11',number:'11'},
  {id:'12',number:'12'},
  {id:'13',number:'13'},
  {id:'14',number:'14'},
  {id:'15',number:'15'},
  {id:'16',number:'16'},
  {id:'17',number:'17'},
  {id:'18',number:'18'},
  {id:'19',number:'19'},
  {id:'20',number:'20'},
  {id:'21',number:'21'},
  {id:'22',number:'22'},
  {id:'23',number:'23'},
  {id:'24',number:'24'},
  {id:'25',number:'25'},
  {id:'26',number:'26'},
  {id:'27',number:'27'},
  {id:'28',number:'28'},
  {id:'29',number:'29'},
  {id:'30',number:'30'},
  {id:'31',number:'31'},
  {id:'32',number:'32'},
  {id:'33',number:'33'},
  {id:'34',number:'34'},
  {id:'35',number:'35'},
  {id:'36',number:'36'},



]