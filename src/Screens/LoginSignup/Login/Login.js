import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../../../assets/cute1.png'
import {containerFull, logo1,hr80} from '../../../CommonCss/pagecss'
import {submitbtn,formInput, formHead,formTextLinkRight} from '../../../CommonCss/formcss'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'

const Login = (props) => {
  return (
    <View style={containerFull}>
      <Image source={logo} />
      <Text style={formHead}> Login </Text>
      <TextInput placeholder='Enter Your Email' style={formInput} />
      <TextInput placeholder='Enter Your Password' style={formInput} 
      secureTextEntry={true}/>
      <Text style={formTextLinkRight} 
        onPress={() => props.navigation.navigate ('ForgetPassword_EnterEmail')}>Forgot Password?</Text>
      <Button mode="contained" style={submitbtn} onPress={() => props.navigation.navigate('Mainpage')}>
       Submit</Button>

      <View style={hr80}></View>
       
      <Text style={formTextLinkRight} >
         Don't have an account? <Text style={{color: 'white'}}
        onPress={() => props.navigation.navigate ('Signup_EnterEmail')}>Signup Now</Text>
      </Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})