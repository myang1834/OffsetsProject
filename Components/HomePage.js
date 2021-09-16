import React from 'react';
import {TouchableOpacity, Dimensions, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';

import HomePageBlocks from './HomePageBlocks';
import TopBar from './TopBar_HomePage';
import ScrollingHorizontalBlocks from './ScrollingHorizontal_HomePage';

const projectNames = ["Carbon Cure","Charm Industrial","Project Vesta"]
const learnMore = ['What are carbon offsets?', "How do round ups work?", "Sustainable Investing 101"]

const { width, height } = Dimensions.get('window')

function HomePage ({navigation}){
   
  
        return(
            <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
                <View style = {styles.container}>
                    <Text style = {styles.title}>Good Morning, Matt! </Text>
                    <Text style = {styles.text}>Live more sustainably </Text>
                    </View>

                    <View style = {styles.boxes}>
                    <TopBar></TopBar>

                    <HomePageBlocks name = 'Total Contributions' style = {styles.homePageBlockLeft} textStyle = {styles.leftBlockText}/>
                    <HomePageBlocks name = {'Total ' + '\n' + 'Carbon Offset'} style = {styles.homePageBlockRight} textStyle = {styles.rightBlockText}/>
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
        paddingBottom: 5
      },
      text: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 24,
        paddingBottom: 15,
        paddingLeft: 10,
        fontWeight: '800',
        color: '#A1A4B2'
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
      },
      homePageBlockLeft: {
        flexDirection: 'column',
        flex: 0,
        marginTop: 15,
        paddingLeft: 5,
        width: width * .45,
        height: height * .25,
        borderRadius: 10,
        backgroundColor: '#4592D0'
      },
      homePageBlockRight: {
        marginTop: 15,
        paddingLeft: 5,
        width: width * .45,
        height: height * .25,
        borderRadius: 10,
        backgroundColor: '#FFC97E'
      },
      leftBlockText:{
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: 12,
        color: '#FFECCC'
          
      }, 
      rightBlockText:{
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: 12,
        color: '#524F53'
      }
      
     
})

export default HomePage