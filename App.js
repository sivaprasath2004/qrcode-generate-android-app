import { useState } from 'react';
import Qrcode from './screens/Qrcode';
import Settings from './screens/Settings';
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
          height:40,
          backgroundColor:'white'
        }
      }
    }>
      <Tab.Screen name='Qrcode' component={Qrcode}
      options={{
        tabBarIcon:({focused})=>{
          
        return (
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="qr-code" size={24}
          color={focused?'red':'black'} />
           </View>
        )
      }
      }}
       />
      <Tab.Screen name='Settings' component={Settings}
       options={{
        tabBarIcon:({focused})=>{
        return (
           <View style={{justifyContent:'center',alignItems:'center'}} >
           <Ionicons name="settings" size={24}  color={focused?'red':'black'} />
            </View>
        )
      }
      }} />
    </Tab.Navigator>
   </NavigationContainer>
)
  }
