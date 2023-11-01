import {StyleSheet, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import React, { useState } from 'react';
import styles from './styles';
import { CustomTabViewItemProps } from './type';


const TabViewItem: React.FC<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0) 
  const[isSelect,setIsSelect]=useState(false);
  return (
    <View style={{flex: 1}}>
      <Tab
        containerStyle={styles.container}
        buttonStyle={props.tabStyle || {backgroundColor: '#FFF'}}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="default"
        titleStyle={props.titleStyle || styles.titleStyle  }>

        <Tab.Item title={props.title1} />
        <Tab.Item title={props.title2} />
        <Tab.Item title={props.title3} />
      </Tab>

      <TabView
        containerStyle={props.viewStyle}
        value={index}
        onChange={setIndex}
        animationType="timing">
        <TabView.Item style={styles.containerTabView}>
          {props.screen1}
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          {props.screen2}
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          {props.screen3}
        </TabView.Item>
        
      </TabView>
    </View>
  );
};

export default TabViewItem;
