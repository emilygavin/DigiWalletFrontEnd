// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, TextInput, StyleSheet, ImageBackground, Pressable, Keyboard, ScrollView  } from 'react-native'
import {useState} from 'react'
import { StatusBar } from "expo-status-bar";

import background from "./assets/bgs/bg.png";


const Stack = createNativeStackNavigator()

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    flex: 0,
    justifyContent:'flex-end',
    alignContent:'flex-end'
  },
  TopSection: {
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'left'
 },
 MiddleSection: {
  width: '100%',
  height: '15%',
  justifyContent: 'center',
  alignItems: '5%',
  backgroundColor: "#2c365a",
},
WelcomeBottomSection: {
  flex: 1,
  width: '100%',
  height: '10%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#2c365a",
},
LoginBottomSection: {
  flex: 1,
  width: '100%',
  height: '10%',
  justifyContent: 'center',
  alignItems: 'left',
  backgroundColor: "#2c365a",
},
  logInButtonStyle: {
    flex: 1,
    width: '40%',
    height: '70%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ef835d",
 },
  signUpButtonStyle: {
    flex: 1,
    width: '30%',
    height: '20%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ef835d",
 },
  bigText: {
    fontSize: 35,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
  mediumText: {
    fontSize: 25,
    lineHeight: 40,
    letterSpacing: 0.25,
    color: 'white',
  },
  mediumTextBold: {
    fontSize: 25,
    lineHeight: 40,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    color: 'white',
  },
  smallText: {
    fontSize: 15,
    lineHeight: 40,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '97%',
    height: '10%',
    textAlign: 'center',
    margin: 5,
    borderWidth: 2,
    padding: 15,
    borderRadius: 20,
  },
});

export default App = () => {
  return (
    <NavigationContainer>
      {/* to hide top of screen add; screenOptions={{headerShown:false}} */}
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}  
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#2c365a',
            },
          }}
          name="Log In"
          component={LogInScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#2c365a',
            },
          }}
          name="Sign Up"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Fetch"
          component={FetchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.TopSection}>
        </View>
        <View style={styles.TopSection}>
        </View>
      </ImageBackground>

      <View style={styles.MiddleSection}>
        <Text style={styles.bigText}>   DigiWallet</Text>
        <Text style={styles.mediumText}>   Making Identification Easy</Text>
      </View>
      <View style={styles.WelcomeBottomSection}>
        <Pressable style={styles.logInButtonStyle}
          onPress={() => navigation.navigate('Log In')}>
          <Text style={styles.mediumTextBold}>Log in</Text>
        </Pressable>
        <View style={styles.WelcomeBottomSection}></View>
        <View style={styles.WelcomeBottomSection}>
          {/* <Pressable style={styles.signUpButtonStyle}
            onPress={() => navigation.navigate('Fetch')}>
            <Text style={styles.smallText} >Fetch Screen</Text>
          </Pressable> */}
        </View>
        <View style={styles.WelcomeBottomSection}></View>
      </View>
    </>
  )
}

const LogInScreen = ({ navigation }) => {
  const [text, setText] = useState('. . . waiting for fetch API')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://39b2-51-171-153-220.eu.ngrok.io/api/v1/users`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420"
          },
        }
      )
      const data = await res.json()
      setText(JSON.stringify(data))
      // console.log(JSON.stringify(data))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.TopSection}>
        </View>
      </ImageBackground>
      <View style={styles.LoginBottomSection}>
      <Text></Text>
        <Text style={styles.smallText}>   EMAIL </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email} />
        <Text style={styles.smallText}>   PASSWORD </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={styles.WelcomeBottomSection}>
          <Pressable style={styles.logInButtonStyle}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.mediumTextBold}>Log in</Text>
          </Pressable>
        </View>
        <View style={styles.LoginBottomSection}>
          <Text style={styles.smallText}>                   Dont have an account?
            <Button title="Sign up" onPress={() => navigation.navigate('Sign Up')} />
          </Text>
        </View>
        <View style={styles.WelcomeBottomSection}></View>
      </View>
    </>
  )
}


const SignUpScreen = ({ navigation }) => {
  const [text, setText] = useState('. . . waiting for fetch API')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const callAPI = async () => {
        try {
          const res = await fetch(
            `https://39b2-51-171-153-220.eu.ngrok.io/api/v1/users`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
              },
              body: JSON.stringify({ 
                name: name, 
                email: email,
                password: password,
                cards: {} 
              }) // Need to use POST to send body
            }
          )
          const data = await res.json()
          console.log(data)
          setText(JSON.stringify(data))
        } catch (err) {
          console.log(err)
        }
      }


  return (
    // <ScrollView keyboardShouldPersistTaps="never">
  <>
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.TopSection}>
        </View>
      </ImageBackground>
      <View style={styles.LoginBottomSection}>
      <Text style={styles.smallText}>   FULL NAME </Text>
      <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          onSubmit={Keyboard.dismiss} />
        <Text style={styles.smallText}>   EMAIL </Text>
        
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          onSubmit={Keyboard.dismiss} />
        <Text style={styles.smallText}>   PASSWORD </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          onSubmit={Keyboard.dismiss} />
          <Text></Text>
          <View style={styles.WelcomeBottomSection}>
          <Pressable style={styles.logInButtonStyle}
            onPress={async () => callAPI()}>
              {/* navigation.navigate('Home') */}
            <Text style={styles.mediumTextBold}>Sign up!</Text>
          </Pressable>
        </View>
        <View style={styles.LoginBottomSection}>
          <Text style={styles.smallText}>                   Already have an account?
            <Button title="Log in" onPress={() => navigation.navigate('Log In')} />
          </Text>
        </View>
        <View style={styles.WelcomeBottomSection}></View>
      </View>
    </>
    // </ScrollView>
  )
}

const FetchScreen = ({ navigation }) => {
  const [text, setText] = useState('. . . waiting for fetch API')

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://39b2-51-171-153-220.eu.ngrok.io/api/v1/users`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" 
          },
        }
      )
      const data = await res.json()
      setText(JSON.stringify(data))
      console.log(JSON.stringify(data))
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Database" onPress={async () => callAPI()}
    />
    <Text>{text}</Text>
    <Text></Text>
  </View>
  )
}

// const PostScreen = ({ navigation }) => {
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [text, setText] = useState('. . . waiting for fetch API')

//   const callAPI = async () => {
//     try {
//       const res = await fetch(
//         `https://a5f9-193-1-57-1.eu.ngrok.io/addProduct`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
//           },
//           body: JSON.stringify({ 
//             name: name, 
//             price: price 
//           }) // Need to use POST to send body
//         }
//       )
//       const data = await res.json()
//       console.log(data)
//       setText(JSON.stringify(data))
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//   <View>
//     <TextInput style={styles.input}
//       placeholder="Type Product name here"
//       onChangeText={newName => setName(newName)}
//       value={name}/>
//     <TextInput style={styles.input}
//       placeholder="Type Product price here"
//       onChangeText={newPrice => setPrice(newPrice)}
//       value={price}/>
//     <Button
//       title="Send Product" onPress={async () => callAPI()}
//     />
//     <Text>{text}</Text>
//   </View>
//   )
// }