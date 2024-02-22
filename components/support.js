import React from 'react'
import { View,Text } from 'react-native'

const support = () => {
  return (
    <View style={{gap:10}}>
       <Text style={{fontSize:16}}> Welcome to the Support page of <Text style={{color:'red'}}>Code Craft</Text>. We're here to assist you every step of the way. Whether you have questions, encounter issues, or need guidance, don't hesitate to reach out to our dedicated support team.</Text>

<Text style={{fontSize:20,fontWeight:'900'}}>Contact Us:</Text>
<Text>
For personalized assistance, please email us at <Text style={{color:'blue',textDecorationLine:'underline'}} onPress={()=>Linking.openURL('mailto:prasathsiva2004@gmail.com')}>prasathsiva2004@gmail.com</Text>. We'll get back to you as soon as possible to address your concerns.</Text>

<Text style={{fontSize:20,fontWeight:'900'}}>In-App Chat Support:</Text>
<Text>
For real-time support or urgent matters, you can also reach <Text style={{color:'blue',textDecorationLine:'underline'}} onPress={()=>Linking.openURL('mailto:prasathsiva2004@gmail.com')}>us</Text>. Connect with us instantly and get the help you need.</Text>

<Text style={{fontSize:16,marginTop:20}}>    Thank you for choosing <Text style={{color:'red'}}>Code Craft</Text>. We're committed to providing you with the best support experience to ensure your journey with us is smooth and enjoyable...</Text>
    </View>
  )
}

export default support