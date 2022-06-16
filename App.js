import { StatusBar } from 'expo-status-bar';
import react, { Component, useState } from 'react';
// import WebView from 'react-native-webview';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert,SafeAreaView} from 'react-native';
import { useRef } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import Navigator from './routes';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
export default function App() {
  let [fontsLoaded] = useFonts({
    'Taj-bold': require('./src/fonts/Tajawal-Bold.ttf'), 
    
  });
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  return (
    <Navigator />
  );
  
    return(<Navigator />)
  }

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    paddingTop:'7%'
  },
});
