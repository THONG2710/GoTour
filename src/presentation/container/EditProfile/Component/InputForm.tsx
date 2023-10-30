import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TEXT_TITLE_EDITPROFILE_VN } from '../Text/TextEditProfileVN'

interface ViewFormProps{
  image: any;
  placeholder: string;
}
const ViewForm: React.FC<ViewFormProps> = (props) => {
  const {image, placeholder} = props;
  return (
    <View style={styles.gr_input}>
      <Image style={styles.iconIP} source={image}></Image>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default ViewForm

const styles = StyleSheet.create({
  gr_input:
  {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection:'row',
    alignItems:'center',
    width:'90%',
    height:45,
    marginLeft:15,
    marginTop:30
  },

  input:
  {
    width:'100%',

  },

  iconIP:
  {
    
    width: 20,
    height: 20,
    marginLeft:10,
    marginRight:5
  }
})