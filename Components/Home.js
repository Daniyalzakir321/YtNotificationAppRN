import React, { useState, useEffect, useCallback, useRef } from 'react'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { StyleSheet, View, Text, ScrollView, Image, Button, ImageBackground, TouchableOpacity, Modal, Dimensions, StatusBar, Alert } from 'react-native'
// import analytics from '@react-native-firebase/analytics';



export default function Home({ navigation }) {
  
// FIREBASE ANALYTICS
// analytics().logEvent('Home_Screen')

  const [data, setData] = useState([])
  useEffect(() => {
    firestore().collection('VIDEO').orderBy('TimeStamp', 'desc').onSnapshot(function (querySnapshot) {
      setData(
        querySnapshot.docs.map((doc) => ({
          Id: doc.id,
          vn: doc.data().VideoName,
          vid: doc.data().VideoID,
          iurl: doc.data().ImageUrl,
          time: doc.data().TimeStamp,
        }))

      )
    })
  }, [])


  console.log(data)
  return (
    <View style={{ flex:1}}>
      <StatusBar barStyle="#ffff" backgroundColor="#3b7ae4" />
       <ScrollView style={{ paddingHorizontal: 8, paddingVertical :10, }}>

       {data.map((d, i) => {
        return <TouchableOpacity  key={i} activeOpacity={0.8} onPress={() => {
            navigation.navigate('Videos', {
              Id: d.Id,
              vn: d.vn,
              vid: d.vid,
            })
          }}
            style={{ backgroundColor: '#ffff', borderRadius: 5, paddingHorizontal: 5, paddingVertical :8, marginVertical:5, elevation: 5, flexDirection: 'row', width:'100%' }} >

            <View style={{borderRadius:5, width:'37%'}}>
            <Image   source={{ uri: d.iurl }}
              style={{ backgroundColor: 'black', resizeMode: 'contain', height: 70, width: 120, }} />
            </View>

            <View style={{marginLeft: 5,width:'63%'}}>
              <Text   style={{ color: 'black', fontWeight: 'bold', fontSize: 17.5, }}>{d.vn}</Text>
              <Text   style={{ color: 'grey', fontSize: 11 }}>Notify me</Text>
              {/* <Text   style={{ color: 'grey', fontSize: 11 }}>{d.time}</Text> */}

            </View>

          </TouchableOpacity>

      })
      }
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});