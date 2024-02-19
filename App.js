import { useState } from 'react';
import { View,TextInput,StatusBar,TouchableOpacity,Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default function App() {
  const [qrcodevalue,setQrcodevalue]=useState({text:'',generate:false})
  return (
    <>
    <View style={{width:'100%',height:'100%',gap:20,backgroundColor:'black'}}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <Text style={{color:'white',fontWeight:900,fontSize:40,padding:20}}>Home</Text>
     <View style={{width:'100%',height:'100%',gap:40,borderTopRightRadius:40,borderTopLeftRadius:40,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
     <View style={{flexDirection:'row',justifyContent:'center',gap:20,alignItems:'center'}}>
     <View style={{height:40,width:200}}>
     <TextInput
     style={{height:'100%',width:'90%'}}
     placeholder='Enter the command'
     value={qrcodevalue.text}
     onChangeText={(text)=>setQrcodevalue(pre=>({...pre,text:text,generate:false}))}
     /></View>
     <TouchableOpacity 
     onPress={()=>setQrcodevalue(pre=>({...pre,generate:true,second:qrcodevalue.text}))}
     style={{backgroundColor:'black',height:40,width:90,borderRadius:15,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontWeight:900}}>Convert</Text></TouchableOpacity>
     </View>
    <QRCode
     value={qrcodevalue.second===undefined || qrcodevalue.second===""?'Enter SomeOne':qrcodevalue.second}
     size={300}
     bgColor='white'
     fgColor='black'
     />
     <Text>{qrcodevalue.second===undefined || qrcodevalue.second===""?'Enter SomeOne':qrcodevalue.second}</Text>

</View> 
    </View>
    </>
)
  }
