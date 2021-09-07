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
                        <Text>{this.props.projects[0]}</Text>
                    </View>
                    <View style = {styles.container}>
                        <Text>{this.props.projects[1]}</Text>
                    </View>
                    <View style = {styles.container}>
                        <Text>{this.props.projects[2]}</Text>
                    </View>
                </View>

            </ScrollView>
            
        )

    }
    
}


const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      padding: 5,
      width: width * .40,
      height: height * .15,
      borderWidth: 1,
      borderRadius: 10,
      marginLeft:5
          
    },

      overallView: {
        flexDirection: 'row',
        padding: 10,
        justifyContent:'space-between'
      },
      blocks:{
          padding: 15
      },
      text:{
          padding: 10
      }

    
})

export default ScrollingHorizontalBlocks
