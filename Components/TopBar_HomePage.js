import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';


const { width, height } = Dimensions.get('window')

class TopBar extends React.Component{
    render(){
        return(
            <View >
              

              <ImageBackground source={require('../assets/Topbar_pattern.png')} style={{width: width * .95, height: height * .125}} imageStyle = {styles.topbarPattern}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                          <Text style = {styles.titleText}>In the past 45 days you've offset</Text> 
                          <Text style = {styles.offsetTotalText}>4.5 tonnes of carbon</Text>
                </View>
                </ImageBackground>
         
               
            </View>
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      width: width * .95,
      height: height * .125,
      borderWidth: 1,
    
      borderRadius: 20,
      
     
    },
    topbarPattern:{
        width: width * .95,
         height: height * .125,
         borderRadius: 15
    },
    titleText:{
        fontWeight: '500',
        fontSize: 18,
        fontStyle: 'normal',
        color: '#FFFFFF'

    },
    offsetTotalText:{
        fontWeight: '600',
        fontSize: 26,
        fontStyle: 'normal',
        color: '#FFFFFF'
    }

})

export default TopBar
