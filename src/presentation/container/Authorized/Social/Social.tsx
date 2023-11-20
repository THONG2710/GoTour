import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemListShare from '../../../component/Items/ItemListShare';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  AVATAR,
  AVT,
  ICON_SEARCH_BLACK,
  SPLASH_THREE,
} from '../../../resource/assets/images';
import {SocialProp} from './type';
import {postModel} from '../../../../domain/Entities/postModel';
import {ID_HOME_A} from '../../../../core';
import {getData} from '../../../../core/RequestMethod';
import { useAppSelector } from '../../../shared-state/Hook/Hook';

const Social: React.FC<SocialProp> = props => {
  const {navigation} = props;
  const [listPost, setListPost] = useState<postModel[]>([]);
  const curUser = useAppSelector(state => state.Authentication.myAccount);

  useEffect(() => {
    const get = async () => {
      const list = await getData('http://' + ID_HOME_A + ':3000/api/post/getAllPost');
      console.log(list);
      setListPost(list.posts);
    };
    get();
  }, []);

  return (
    <ImageBackground source={{uri: SPLASH_THREE}} style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <TextInput
            placeholder="Tìm kiếm ..."
            style={styles.findHeader}></TextInput>
          <TouchableOpacity>
            <Image
              style={styles.imgHeader}
              source={{uri: ICON_SEARCH_BLACK}}></Image>
          </TouchableOpacity>
        </View>
        <Image style={styles.imgAvatar} source={{uri: curUser.avatar}}></Image>
      </View>

      <FlatList
        style={{marginBottom: 100}}
        data={listPost}
        renderItem={({item}) => <ItemListShare item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
      />
    </ImageBackground>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },

  containerHeader: {
    width: windowWidth,
    height: windowHeight - (windowWidth * 165) / 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    borderRadius: 30,
    width: windowWidth - 100,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  findHeader: {
    width: windowWidth - 150,
    borderRadius: 30,
    paddingLeft: 20,
    position: 'relative',
    fontSize: 15,
  },

  imgHeader: {
    width: 25,
    height: 25,
  },

  imgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

