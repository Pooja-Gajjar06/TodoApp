import React, {  useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { COLORS } from '../utils/colors';


export default function Splash({navigation}) {


  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Todo")
    }, 2000);
  }, []);


 
  return (
    <View style={styles.container}>
     <Text style={{fontSize:18,fontWeight:'bold'}}>TodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent:"center",
    alignItems: "center",
  },
  
});
