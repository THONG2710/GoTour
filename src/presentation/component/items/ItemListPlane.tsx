import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LINE, VIETJET} from '../../resource/assets/images';
import AirlineModel from '../../../domain/Entities/AirLineModel';
import {getData} from '../../../core/RequestMethod';
import {ID_HOME_A} from '../../../core';
import AirlineCompanyModel from '../../../domain/Entities/AirlineCompanyModel';

interface Item {
  data: AirlineModel;
}

const ItemListPlane: React.FC<Item> = props => {
  const {data} = props;
  const [company, setCompany] = useState<AirlineCompanyModel>();

  const getAirlineCompany = async () => {
    const res = await getData(
      'http://' +
        ID_HOME_A +
        ':3000/api/airline/getAirlineCompanyById?id=' +
        data.airlineCompany,
    );
    setCompany(res.company);
  };

  useEffect(() => {
    getAirlineCompany();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.item2}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {data.departureTime}
              </Text>
              <View style={{margin: 10}}>
                <Image source={{uri: LINE}} style={styles.line} />
                <Text style={{textAlign: 'center'}}>{data.time}</Text>
              </View>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {data.endTime}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -10,
              }}>
              <Text style={{color: 'black', fontSize: 15}}>{data.from}</Text>
              <Text style={{color: 'black', fontSize: 15}}>{data.to}</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>
              {data.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: company?.logo}} style={styles.vietjet} />
            <Text style={{marginStart: 10}}>{company?.name}</Text>
          </View>

          {/* <Text style={{color: 'orange'}}>Còn lại </Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListPlane;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    height: 'auto',
    borderRadius: 10,
  },
  item2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  vietjet: {
    width: 22,
    height: 20,
  },
  line: {
    width: 64,
    height: 5,
  },
});
