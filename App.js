import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions,Modal, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home'
import Videos from './Components/Videos'
import OneSignal from 'react-native-onesignal';


const Stack = createStackNavigator();

export default function App() {
   useEffect(() => { 
      OneSignal.setAppId("61077d95-e269-481a-9f83-19348c183f92",
       { 
         kOSSettingsKeyAutoPrompt: false,
         kOSSettingsKeyInAppLaunchURL: false,
          kOSSettingsKeyInFocusDisplayOption: 2 
        });
  }, [])

    // useEffect(() => { 
    // /* O N E S I G N A L   S E T U P */
    // OneSignal.setAppId("61077d95-e269-481a-9f83-19348c183f9");
    // },[])


    const [modal, setModal] = useState(true)
    setTimeout(() => {
      setModal(false)
    }, 3000);
  
    return (<>
      {modal
        ?
        <Modal visible={modal} animationType="slide" >
          <StatusBar backgroundColor="#3b7ae4" style={{ color: 'white' }}  barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: '#3b7ae4', alignItems: 'center', justifyContent:'center' }} >

          <Image source={require('./Components/Images/splash1.png')}
            style={{ backgroundColor: '#3b7ae4', resizeMode: 'contain', height: 100, }} />
          {/* <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 27, marginTop: 10 }}>Notify Me </Text> */}
        </View>
        </Modal>
        :
  
        <NavigationContainer>
          <Stack.Navigator > 
            <Stack.Screen name="Home" component={Home} 
             options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#3b7ae4',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold',
              },
            }}/>
            <Stack.Screen name="Videos" component={Videos}
            options={{
              title: 'Video',
              headerStyle: {
                backgroundColor: '#3b7ae4',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold',
              },
            }}
            />
  
          </Stack.Navigator>
        </NavigationContainer>
        }
    </>)
}

  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%'
  }
});

