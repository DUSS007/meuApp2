import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <View style ={styles.container}>
          <Header
            backgroundColor={"#9c8210"}
            centerComponent={{
              text:'Dicionario MINECRAFT',
              style:{color:'#fff',fontSize:20},
            }}
          />
        </View>
      </SafeAreaProvider>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor: '#b8b8b8',
  },
});
