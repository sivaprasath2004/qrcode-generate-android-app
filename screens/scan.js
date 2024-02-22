import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,StatusBar ,Linking,Image, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [checkers,setCheckers]=useState({data:undefined})
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  },[]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCheckers(pre=>({...pre,data:data}))
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
    <View style={{height:550,width:400,backgroundColor:'cyan',marginTop:-100,justifyContent:'center',alignItems:'center'}}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <View style={{height:'100%',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
      {scanned?
       <TouchableOpacity 
       style={{flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:15,height:40,width:200,shadowColor:'black',elevation:20}}
       onPress={() => {
         setScanned(false)
         setCheckers(pre=>({...pre,data:undefined}))
       }} >
      <Ionicons name="search-sharp" size={24} color="black" style={{top:2}} />
        <Text style={{fontSize:16,fontWeight:900,color:'black'}}>Tap to Scan</Text></TouchableOpacity>:
       <View style={{gap:30,justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'row',gap:100}}>
          <View>
          <View style={{height:5,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      <View style={{height:50,width:5,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      </View>
      <View style={{flexDirection:'column-reverse',transform:'rotate(180deg)'}}>
      <View style={{height:5,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      <View style={{height:50,width:5,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      
      </View>
      </View>
      <View style={{height:50,width:50,borderRadius:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',shadowColor:'black',elevation:15}}>
      <Ionicons name="search-sharp" size={24} color="black" />
      </View>
      <View style={{flexDirection:'row',gap:100}}>
        <View>
      <View style={{height:50,width:5,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      <View style={{height:5,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      </View>
      <View style={{flexDirection:'column-reverse',transform:'rotate(180deg)'}}>
      <View style={{height:50,width:5,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      <View style={{height:5,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}></View>
      </View>
      </View>
    </View>
      }
    </View>
    </View>
    <View>
      {
        checkers.data!==undefined?<Text onPress={()=>Linking.openURL(checkers.data)} style={{fontSize:20,fontWeight:900,color:'gray',textDecorationLine: 'underline'}}>{checkers.data} <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5422/5422411.png'}} style={{height:20,width:20}}/></Text>:<Text style={{fontSize:20,fontWeight:900}}>Scanning..</Text>
      }
    </View>
    </>
  );
}

