import { StatusBar } from 'expo-status-bar';
import react, { Component, useState } from 'react';
// import WebView from 'react-native-webview';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert,SafeAreaView} from 'react-native';
import { useRef } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import 'react-native-gesture-handler';
export default function menu({navigation}){
    return(
        <View style={{width:'100%',height:'100%'}}>
            <View style={{alignItems:'center',height:120,backgroundColor:'#1c72bf'}}>
                <Image source={require('./icon/C0HR.png')} style={{width:80,height:40,marginTop:60}}/>
            </View>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('indexapp')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>الرئيسية</Text>
                    <Image source={require('./icon/icons8-home-32.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>خدمات اصحاب العمل</Text>
                    <Image source={require('./icon/handshake.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('bus1')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>استقطاب المواهب الوظيفية</Text>
                    <Image source={require('./icon/handshake.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('bus2')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>خدمة إدارة الموارد البشرية</Text>
                    <Image source={require('./icon/handshake.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('bus3')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>خدمة الاستشارات الإدارية</Text>
                    <Image source={require('./icon/handshake.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('groups')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>قروبات عاصمة الموارد البشرية</Text>
                    <Image source={require('./icon/icons8-people-skin-type-7-32.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',borderBottomWidth:2,borderColor:'#1c72bf',marginLeft:5,marginRight:5}} onPress={()=>navigation.navigate('contactus')}>
                <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontFamily:'Taj-bold',fontSize:16,color:'#1c72bf'}}>تواصل معنا</Text>
                    <Image source={require('./icon/iconcontact.png')} tintColor='#1c72bf' />
                </View>
            </TouchableOpacity>
        </View>
    )
}