import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
import HomePageBlocks from './HomePageBlocks';

const { width, height } = Dimensions.get('window')

class ScrollingHorizontalBlocks extends React.Component{
    render(){
        return(
            <ScrollView style = {styles.scrollview} horizontal = {true}>
                <View style = {styles.overallView}>
                   

                    <View style = {styles.container}>
                        <View style={styles.overlay} />
                        <Image style = {styles.image} source={require('../assets/carboncure-logo.png')} />
                        
                    </View>
                   
                    <View style = {styles.container} >
                        <View style={styles.overlayCharm} opacity={0.65}/>
                        <Image style = {styles.charmImage} source={require('../assets/CharmIndustrial.png')} />
                    </View>
                   
                    <View style = {styles.container} >
                        <View style={styles.overlayVesta} />
                        <Image style = {styles.image} source={require('../assets/project-vesta.png')} />
                    </View>

                </View>

            </ScrollView>
            
        )

    }
    
}


const styles = StyleSheet.create({
    image:{
        width: width*.45,
        height: height*.2,
        
    },
    charmImage:{
        width: width*.32,
        height: height*.10,
        

    },
    container: {
      marginTop: 15,
      width: width * .45,
      height: height * .15,
      borderRadius: 10,
      marginLeft:10,
      marginRight:8,
      justifyContent: 'center',
      alignItems: 'center',

          
    },

      overallView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom:15
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFE5C0',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
      },
      overlayCharm:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FF741F',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',     
      },
      overlayVesta:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#AFDBC5',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',            
      }
    
})

export default ScrollingHorizontalBlocks
