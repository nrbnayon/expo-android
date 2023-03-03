import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_EnterEmail from './src/Screens/LoginSignup/Signup/Signup_EnterEmail';
import Signup_Verification from './src/Screens/LoginSignup/Signup/Signup_Verification';
import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername';
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_AccountCreated from './src/Screens/LoginSignup/Signup/Signup_AccountCreated';
import ForgetPassword_AccountRecovered from './src/Screens/LoginSignup/ForgetPassword/ForgetPassword_AccountRecovered';
import ForgetPassword_ChoosePassword from './src/Screens/LoginSignup/ForgetPassword/ForgetPassword_ChoosePassword';
import ForgetPassword_EnterEmail from './src/Screens/LoginSignup/ForgetPassword/ForgetPassword_EnterEmail';
import ForgetPassword_EnterVerificationCode from './src/Screens/LoginSignup/ForgetPassword/ForgetPassword_EnterVerificationCode';
import Mainpage from './src/Screens/Mainpage/Mainpage';



const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
        }}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />

        <stack.Screen name="Signup_Verification" component={Signup_Verification} />
        <stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />

        <stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <stack.Screen name="ForgetPassword_AccountRecovered" component={ForgetPassword_AccountRecovered} />
        <stack.Screen name="ForgetPassword_ChoosePassword" component={ForgetPassword_ChoosePassword} />

        <stack.Screen name="ForgetPassword_EnterEmail" component={ForgetPassword_EnterEmail} />
        <stack.Screen name="ForgetPassword_EnterVerificationCode" component={ForgetPassword_EnterVerificationCode} />

        <stack.Screen name='Mainpage' component={Mainpage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
