import React from 'react';
import {TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

import HomePageBlocks from './HomePageBlocks';
import TopBar from './TopBar_HomePage';
import ScrollingHorizontalBlocks from './ScrollingHorizontal_HomePage';

const projectNames = ["Carbon Cure","Charm Industrial","Project Vesta"]
const learnMore = ['What are carbon offsets?', "How do round ups work?", "Sustainable Investing 101"]

function HomePage ({navigation}){
   
  
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.title}>Good Morning, Matt! </Text>
                    <Text style = {styles.text}>Live more sustainably </Text>
                    </View>

                    <View style = {styles.boxes}>
                    <TopBar></TopBar>

                    <HomePageBlocks name = 'Total Contributions'/>
                    <HomePageBlocks name = 'Total Carbon Offset'/>
                    </View>
                    <Text style = {styles.boxTitles}>My Projects</Text>
                    <ScrollingHorizontalBlocks projects = {projectNames}>

                    </ScrollingHorizontalBlocks>

                    <Text style = {styles.boxTitles}>Learn More</Text>


                    <ScrollingHorizontalBlocks projects = {learnMore}>

                    </ScrollingHorizontalBlocks>
                {/*   <ScrollView style = {styles.scrollview} horizontal = {true}>
                      <ScrollingHorizontalBlocks name = "carbon cure"></ScrollingHorizontalBlocks>
                      <ScrollingHorizontalBlocks name = "Charm Industrial"></ScrollingHorizontalBlocks>
                      <ScrollingHorizontalBlocks name = "Project Vesta"></ScrollingHorizontalBlocks>

                    </ScrollView>*/}

            </ScrollView>
            
        )

}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      paddingLeft: 5,
      textAlign: 'center'

    },
    title: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 28,
        paddingTop:15,
        paddingLeft:10,
        paddingBottom: 10
      },
      text: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 24,
        paddingBottom: 22,
        paddingLeft: 10,
        fontWeight: '800'
      },
      boxes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent:'space-between'
      },
      boxTitles:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 24,
        paddingBottom: 10,
        paddingLeft: 10,
        fontWeight: '800'
      }
     
})

export default HomePage