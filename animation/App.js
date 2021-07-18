import React, { useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from "react-native";


const { width, height } = Dimensions.get('window');

console.log(width)
console.log(height)

const App = () => {

  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0]

  const moveball = () => {
    Animated.timing(value, {
      toValue: { x: 0, y: 100},
      duration: 3000,
      useNativeDriver: false
      //왜 useNativeDriver:false로 해야하지 ?
    }).start()
  }


  return (
    <SafeAreaView style={styles.box_1}>
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'skyblue' }}>
        <Animated.View style={value.getLayout()}>
          <View style={{ width: 100, height: 100, backgroundColor: 'pink' }}>

          </View>
          <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}>

          </View>
        </Animated.View>
        <TouchableOpacity onPress={() => { moveball() }}>
          <Text>click</Text>

        </TouchableOpacity>
      </View>


    </SafeAreaView>

  );


}

const styles = StyleSheet.create({

  box_1: {
    flex: 1, backgroundColor: 'green'
  },
  box_2: {
    flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
  },

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },

});

export default App;
