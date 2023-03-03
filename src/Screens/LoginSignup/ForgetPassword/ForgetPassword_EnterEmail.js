import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull,goback } from '../../../CommonCss/pagecss'
const ForgetPassword_EnterEmail = (props) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity style={goback}onPress={()=> props.navigation.navigate("Login")}>
      <Text style={{
        color: 'gray',
        fontSize: 20,

      }}> 
        Go Back
      </Text>
    </TouchableOpacity>
    
  </View>
  )
}

export default ForgetPassword_EnterEmail

const styles = StyleSheet.create({})