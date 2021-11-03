import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native'

var images = [require('./rev0.jpg'), require('./rev1.jpg'), require('./rev2.jpg'), require('./rev3.jpg'), require('./rev4.jpg'), require('./rev5.jpg')];
const second_page = () => {
  // const [imag, setImag] = useState([require('./rev0.jpg'), require('./rev1.jpg'), require('./rev2.jpg'), require('./rev3.jpg'), require('./rev4.jpg'), require('./rev5.jpg')])

  return(
    <View style={styles.view}>
      <Image source={images[0]} style={styles.img}/>
      <Text style={styles.text}>YOOO WE JUST NAVIGATED ALSO GO REVEILLE</Text>
      <Button 
            onPress= {() => images.unshift(images.pop())}
            // if this were using useState, then onPress would have = {setImag = () => {...}}
            title = {'Switch it up'}
          />
    </View>
  )
}

const styles = StyleSheet.create({
      text: {
        color: 'darkslateblue',
        fontSize: 30,
      },
      img: {
        height: 250,
        width: null
      },
    });

export default second_page;