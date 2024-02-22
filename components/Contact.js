import React from 'react'
import {View,Text,ScrollView,Linking} from 'react-native'
const Contact = () => {
  return (
    <ScrollView>
   <View  style={{gap:10}}>
    <Text style={{fontSize:16}}>   We value your feedback and welcome any inquiries, suggestions, or collaboration opportunities. Don't hesitate to get in touch with <Text style={{textDecorationLine:'underline',color:'blue'}} onPress={()=>Linking.openURL('https://github.com/sivaprasath2004')} >us </Text>– we'd love to hear from you!</Text>

<Text style={{fontSize:20,fontWeight:900}}>Technical Support:</Text>

<Text>Encountering technical issues or need assistance with the app? Our dedicated support team is here to help! Reach out to us via email at <Text style={{color:'blue',textDecorationLine:'underline'}} onPress={()=>Linking.openURL('mailto:prasathsiva2004@gmail.com')}>prasathsiva2004@gmail.com</Text> or through the in-app support chat feature. We're committed to ensuring you have a smooth experience with <Text style={{color:'red'}}>Code Craft</Text>.</Text>

<Text style={{fontSize:20,fontWeight:900}}>Business Opportunities:</Text>

<Text>   Interested in partnership opportunities, press inquiries, or other business-related matters? Please reach out to our business development team at <Text style={{color:'blue',textDecorationLine:'underline'}} onPress={()=>Linking.openURL('mailto:prasathsiva2004@gmail.com')}>prasathsiva2004@gmail.com</Text>. We're always open to exploring collaborations and expanding our network.
</Text>
<Text style={{fontSize:20,fontWeight:900}}>GitHub Repository:</Text>
<Text>   For developers interested in contributing to the development of <Text style={{color:'red'}}>Code Craft</Text>, our GitHub repository is open for collaboration. Visit our repository at <Text style={{color:'blue',textDecorationLine:'underline'}} onPress={()=>Linking.openURL('https://github.com/sivaprasath0001/code-craft')}>Code Craft</Text> to explore the codebase, submit pull requests, or report issues. We welcome contributions from the community and value the efforts of our developer community in improving the app.
</Text>
<Text>   We're excited to engage with our users, partners, and developers to make <Text style={{color:'red'}}>Code Craft</Text> even better. Let's connect and shape the future of QR code technology together!
</Text>
   </View>
   </ScrollView>
  )
}

export default Contact