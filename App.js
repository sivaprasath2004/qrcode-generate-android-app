import { useState } from 'react';
import Qrcode from './screens/Qrcode';
import Scan from './screens/scan';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
export default function App() {
  const Tab=createBottomTabNavigator()
  return (
   <NavigationContainer>
    <Tab.Navigator screenOptions={
      {
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          position:'absolute',
          bottom:0,
          right:0,
          elevation:0,
          height:60,
          backgroundColor:'white'
        }
      }
    }>
      <Tab.Screen name='Scan' component={Scan}
      options={{
        tabBarIcon:({focused})=>{
        return (
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="data-matrix-scan" size={24} color={focused?'red':'black'} />
          <Text style={{fontSize:20}}>Qrcode</Text>
           </View>
        )
      }
      }}
       />
      <Tab.Screen name='Qrcode' component={Qrcode}
       options={{
        tabBarIcon:({focused})=>{
        return (
           <View style={{justifyContent:'center',alignItems:'center'}}>
           <Ionicons name="qr-code" size={24} color={focused?'red':'black'} />
           <Text style={{fontSize:20}}>Qrcode</Text>
            </View>
        )
      }
      }} />
    </Tab.Navigator>
   </NavigationContainer>
)
  }
