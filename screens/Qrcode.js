import React,{useState} from 'react'
import QRCode from 'react-native-qrcode-svg';
import Scan from './scan';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View,TextInput,StatusBar,TouchableOpacity,Text } from 'react-native';
const Qrcode = () => {
  const [qrcodevalue,setQrcodevalue]=useState({text:'',generate:false,scan_page:false})
  return (
    <View style={{width:'100%',height:'100%',gap:20,backgroundColor:'black'}}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{color:'white',fontWeight:900,fontSize:30,padding:20}}>{qrcodevalue.scan_page?"Scan":"QRCode"}</Text>
     <TouchableOpacity style={{paddingRight:20}} onPress={()=>setQrcodevalue(pre=>({...pre,scan_page:!qrcodevalue.scan_page}))}>
      {!qrcodevalue.scan_page?
     <MaterialCommunityIcons name="qrcode-scan" size={30} color="white" />:
     <MaterialCommunityIcons name="qrcode" size={30} color="white" />
      }
     </TouchableOpacity>
      </View>
     <View style={{width:'100%',height:'100%',gap:40,borderTopRightRadius:40,borderTopLeftRadius:40,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        {qrcodevalue.scan_page?
        <>
        <Scan/>
        </>:
        <>
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
     style={{backgroundColor:'black',height:40,width:90,borderRadius:15,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontWeight:900}}>Generate</Text></TouchableOpacity>
     </View>
    <QRCode
     value={qrcodevalue.second===undefined || qrcodevalue.second===""?'Enter SomeOne':qrcodevalue.second}
     size={300}
     bgColor='white'
     fgColor='black'
     />
     <Text>{qrcodevalue.second===undefined || qrcodevalue.second===""?'Enter SomeOne':qrcodevalue.second}</Text>
     </>
}
</View> 
    </View>
  )
}

export default Qrcode