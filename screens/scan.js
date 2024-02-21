import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  },[]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <Text style={{fontSize:30,fontWeight:900,paddingLeft:10,color:'white',marginTop:20}}>Hello</Text>
      <View style={{height:'100%',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',width:'100%',backgroundColor:'black'
  },
});
