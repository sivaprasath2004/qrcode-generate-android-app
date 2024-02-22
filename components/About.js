import React from 'react'
import {View,Text,ScrollView,} from 'react-native'
const About = () => {
  return (
    <ScrollView>
    <View style={{gap:10,paddingBottom:60}}>
        <Text style={{fontSize:16}}>   Welcome to <Text style={{color:'red'}}>Code Craft</Text> version 1.0.0, the premier QR code generation app built using React Native technology. Our app is meticulously crafted to provide you with a seamless and intuitive experience for generating QR codes on the go.</Text>

<Text style={{fontSize:20,fontWeight:900}}>What Sets Us Apart:</Text>

<Text>   At <Text style={{color:'red'}}>Code Craft</Text>, we pride ourselves on delivering cutting-edge solutions with React Native, ensuring compatibility across both iOS and Android platforms. With version 1.0.0, we've introduced a host of innovative features designed to enhance your QR code generation experience like never before.</Text>

<Text style={{fontSize:20,fontWeight:900}}>Key Features of Version 1.0.0:</Text>
<Text>   Intuitive User Interface: Our sleek and user-friendly interface makes generating QR codes a breeze, even for first-time users.
Versatile Code Generation: Create QR codes for a wide range of data types, including URLs, Wi-Fi credentials, contact information, and more.
Customization Options: Tailor your QR codes with customizable design elements, allowing you to personalize them to suit your branding or aesthetic preferences.
Offline Functionality: Enjoy uninterrupted QR code generation even without an internet connection, ensuring reliability wherever you are.
Secure Data Handling: Rest assured that your data is handled with the utmost security and privacy, meeting the highest standards of data protection.</Text>
<Text style={{fontSize:20,fontWeight:900}}>Our Commitment:</Text>

<Text>As pioneers in leveraging React Native technology for QR code generation, we're dedicated to continually improving and expanding our app to meet the evolving needs of our users. With version 1.0.0, we've laid the foundation for a feature-rich and future-proof QR code solution that you can rely on.</Text>

<Text style={{fontSize:20,fontWeight:900}}>Join Us on this Journey:</Text>

<Text>We're excited to embark on this journey with you as we revolutionize the way QR codes are generated and utilized. Whether you're a business owner, developer, or everyday user, <Text style={{color:'red'}}>Code Craft</Text> version 1.0.0 offers a powerful and versatile toolset to streamline your digital interactions.</Text>

<Text>  Thank you for choosing <Text style={{color:'red'}}>Code Craft</Text> as your QR code generation companion. We look forward to serving you and empowering your digital connectivity needs.</Text>
    </View>
    </ScrollView>
  )
}

export default About