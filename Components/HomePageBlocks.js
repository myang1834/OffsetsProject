import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window')

class HomePageBlocks extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>{this.props.name}</Text>
            </View>
        )

    }
    
}


const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      paddingLeft: 5,
      width: width * .45,
      height: height * .25,
      borderWidth: 1,
      borderRadius: 10,
     
    }
})

export default HomePageBlocks
