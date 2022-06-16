import { StatusBar } from 'expo-status-bar';
import react, { Component, useState } from 'react';
// import WebView from 'react-native-webview';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert,SafeAreaView} from 'react-native';
import { useRef } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import 'react-native-gesture-handler';
export default function buss({navigation}) {
    const ref=useRef()
    return(<View style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Image source={require('./icon/C0HR.png')} style={{width:80,height:40,marginTop:60}}/>
        </View>
        <View style={{height:'90%',backgroundColor:'white',marginTop:10}}>
            <WebView ref={ref} source={{uri:'https://c0hr.com/%d8%ae%d8%af%d9%85%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%88%d8%a7%d8%b1%d8%af-%d8%a7%d9%84%d8%a8%d8%b4%d8%b1%d9%8a%d8%a9'}} style={{width:'100%',height:'100%'}} />
        </View>
       <View style={{position:'absolute',top:'8%',right:'7%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('menui')}>
                <View>
                    <Image source={require('./icon/icons8-menu-32.png')} tintColor={'white'} />
                </View>
            </TouchableOpacity>
        </View> 
        <View style={{position:'absolute',top:'8%',left:'7%'}}>
            <TouchableOpacity onPress={()=>{
                ref.current.reload()
            }}>
                <View>
                    <Image source={require('./icon/icons8-refresh-32.png')} tintColor={'white'} />
                </View>
            </TouchableOpacity>
        </View> 
    </View>)
}
const styles=StyleSheet.create({
    container:{
        width:'100%'
        ,height:'100%',
        backgroundColor:'#1c72bf'
    }
})