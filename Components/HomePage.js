import React from 'react';
import {TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

import HomePageBlocks from './HomePageBlocks';

function HomePage ({navigation}){
   
  
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.title}>Good Morning, Matt! </Text>
                    <Text style = {styles.text}>Live more sustainably </Text>
                    <HomePageBlocks/>
                </View>
            </ScrollView>
            
        )

}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      paddingLeft: 5
    },
    title: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        paddingTop:15,
        paddingBottom: 10
      },
      text: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 20,
        paddingBottom: 22
      },

})

export default HomePage