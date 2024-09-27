import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wellcome = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to App</Text>
        <Image source={require('../images/image.png')} style={styles.img}/>
        <Text style={styles.textemail}>leducdung02102004@gmail.com</Text>
       <ActivityIndicator size={'large'} color="gray" />
    </View>
  )
}

export default Wellcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:180,
        height:180,
        alignSelf:'center',
        marginTop:-50,
        marginBottom:50
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      marginBottom:80
    },
    textemail:{
      fontSize:18,
      fontWeight:'500',
      color:'gray',
      marginBottom:50
    }
})