import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';

const { width, height } = Dimensions.get('window')

class TopBar extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>In the past 45 days you've offset 4.5 tonnes of carbon</Text>
            </View>
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      paddingLeft: 5,
      width: width * .95,
      height: height * .125,
      borderWidth: 1,
    
      borderRadius: 10,
      
     
    }
})

export default TopBar
