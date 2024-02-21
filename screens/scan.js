import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';

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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
    <View style={{height:300,width:300,backgroundColor:'cyan',marginTop:-100,justifyContent:'center',alignItems:'center'}}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <View style={{height:'100%',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => {
        setScanned(false)
        setCheckers(pre=>({...pre,data:undefined}))
      }} />}
    </View>
    </View>
    <View>
      
    </View>
    </>
  );
}

