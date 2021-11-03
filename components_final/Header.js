import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const Header = (Props) =>{
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{Props.title}</Text>
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/> */}
    </View>
  );
}

Header.defaultProps = {
    title: 'Default Title',
}

const styles = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight,
    height: 60,
    padding:15,
    backgroundColor: '#630515'
  },
  text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
  }
});


export default Header;