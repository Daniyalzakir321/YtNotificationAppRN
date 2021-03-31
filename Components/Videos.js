import React, { useState, useEffect,  useCallback, useRef } from 'react'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { StyleSheet, View, Text, ScrollView, Image,Button, ImageBackground, TouchableOpacity, Modal, Dimensions, StatusBar, Alert } from 'react-native'
import YouTube from 'react-native-youtube';
// import analytics from '@react-native-firebase/analytics';


export default function Videos({navigation, route}) {

    // FIREBASE ANALYTICS
    //    analytics().logEvent('Videos_Screen')

    return (
        <ScrollView style={{paddingVertical:10, paddingHorizontal:5}}>
         <StatusBar barStyle='#ffff' backgroundColor="#3b7ae4" />
         <YouTube
         apiKey="AIzaSyAPbsiVg8yt7m-qcaDTPGV4FQUrinErFEE"
  videoId={route.params.vid} // The YouTube video ID
  play // control playback of video with true/false
  // fullscreen // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  // onReady={e => this.setState({ isReady: true })}
  // onChangeState={e => this.setState({ status: e.state })}
  // onChangeQuality={e => this.setState({ quality: e.quality })}
  // onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
/>
<Text  style={{ color: 'black', fontWeight: 'bold', fontSize: 25, marginTop: 10,marginLeft:5 }}>{route.params.vn}</Text>
<Text   style={{ color: 'grey', fontSize: 12,marginTop: 5,marginLeft:5 }}>Notify me</Text>

            {/* <Text>{route.params.Id}</Text> */}
            {/* <Text>{route.params.vid}</Text> */}
        </ScrollView>
    )
}
