import React,{useState} from 'react'
import { View,Text,StatusBar,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import About from '../components/About';
import Contact from '../components/Contact';
import Support from '../components/support';
const Settings = () => {
  const [checker,setChecker]=useState({about:false,contact:false,support:false,Title:'Settings'})
  return (
    <View style={{backgroundColor:'black',height:'100%',width:'100%',gap:20}}>
      <StatusBar barStyle='white' backgroundColor='black' />
      <View style={{flexDirection:'row',gap:10,alignItems:'center',padding:20,paddingLeft:20}}>
      {checker.about || checker.contact || checker.support?<TouchableOpacity onPress={()=>setChecker({about:false,contact:false,support:false,Title:'Settings'})}><AntDesign name="left" size={26} color="white" /></TouchableOpacity>:<></>}
      <Text style={{color:'white',fontSize:30,fontWeight:'900'}}>{checker.Title}</Text></View>
    <View style={{backgroundColor:'white',height:'100%',width:'100%',borderTopRightRadius:40,borderTopLeftRadius:40}}>
  {!checker.about && !checker.contact&& !checker.support? <View style={{paddingTop:50,paddingLeft:20,paddingRight:10,gap:50}}>
    <TouchableOpacity 
    onPress={()=>setChecker(pre=>({...pre,about:true,Title:'About Us'}))}
    style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{fontSize:20,fontWeight:900}}>
      About Us
    </Text>
    <AntDesign name="right" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>setChecker(pre=>({...pre,contact:true,Title:'Contact Us'}))}
    style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{fontSize:20,fontWeight:900}}>
      Contact Us
    </Text>
    <AntDesign name="right" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>setChecker(pre=>({...pre,support:true,Title:'Support Us'}))}
    style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{fontSize:20,fontWeight:900}}>
      Support
    </Text>
    <AntDesign name="right" size={24} color="black" />
    </TouchableOpacity>
    </View>:
    <View style={{padding:30}}>
      {
    checker.about?<About/>:checker.contact?<Contact/>:checker.support?<Support/>:<></>
      }
    </View>
}
    </View>
    </View>
  )
}

export default Settings