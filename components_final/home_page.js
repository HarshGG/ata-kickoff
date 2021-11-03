import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Button,p} from 'react-native'


const home_page = ({navigation}) => {
  const [count, setCount] = useState(0);
  
  return(
    <View>
      <Text>{count}</Text>
        <Button
         onPress={() => setCount(count+1)}
         title="Click Me!!"
         />
         <Button onPress={() => 
            navigation.navigate('Second page') 
        }
        title='Go to Second page LOLS'
        />
    </View>
  )
}

export default home_page;