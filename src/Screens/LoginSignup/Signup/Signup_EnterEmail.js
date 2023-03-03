import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import {containerFull, goback} from '../../../CommonCss/pagecss'
import Login from '../Login/Login'
import { Entypo } from '@expo/vector-icons';

const Signup_EnterEmail = (props) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity style={goback}onPress={()=> props.navigation.navigate("Login")}>
    <Entypo name="back" size={24} color="gray" />
      <Text style={{
        color: 'gray',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',

      }}> 
      </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})