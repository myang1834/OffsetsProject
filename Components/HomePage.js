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
const learnMore = ['What are carbon ' + '\n' +'offsets?', 'How do round ups ' + '\n' + 'work?', 'Sustainable ' + '\n' + 'Investing 101']
const pricesTon = ["$45 per metric ton", '$23 per metric ton', '$27 per metric ton']
const projectLogos = [require("../assets/carboncure-logo.png"), require('../assets/CharmIndustrial.png'),require('../assets/project-vesta.png')]
const learnMoreLogos = [require("../assets/Chest.png"), require('../assets/offsetsexplain.png'),require('../assets/sustInvest.png')]
const price = 'this is a prop'

let offsetProject = {projectName: 'Carbon Cure', pricePerTonnes: '$45 per ton'}


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

         <HomePageBlocks name = 'Total Contributions' nums = "$452.24" style = {styles.homePageBlockLeft} textStyle = {styles.leftBlockText} numsStyle = {styles.leftNums} buttonStyle = {styles.leftButton} buttonTextStyle = {styles.leftButtonText}/>
         <HomePageBlocks name = {'Total ' + '\n' + 'Carbon Offset'} nums = "34.5" style = {styles.homePageBlockRight} textStyle = {styles.rightBlockText} numsStyle = {styles.rightNums} buttonStyle = {styles.rightButton} buttonTextStyle = {styles.rightButtonText} extraText = {'Metric' + '\n' + 'Tonnes'} extraTextStyle = {styles.extraTextStyle} extraTextView = {styles.extraTextView}/>
      </View>
        
        <Text style = {styles.boxTitles}>My Projects</Text>

        {/*Haven't figured out why the prices prop isn't passing, may not be able to pass two arrays? */}
        
        <ScrollingHorizontalBlocks projects = {projectNames} pricesTon = {pricesTon} logos = {projectLogos} > </ScrollingHorizontalBlocks>

        <Text style = {styles.boxTitles}>Learn More</Text>
      
        <ScrollingHorizontalBlocks projects = {learnMore} pricesTon = {[]} logos = {learnMoreLogos}> </ScrollingHorizontalBlocks>
    
    </ScrollView>
            
        )

}

const styles = StyleSheet.create({
    container: {
      marginTop: height*.02,

      textAlign: 'center'

    },
    title: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        paddingLeft:width*.03,

        fontSize: height*.034,
        paddingTop:height*.02,
        paddingBottom: height*.008
      },
      text: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: height*.025,
        paddingBottom: height*.02,
        paddingLeft: width*.03,
        fontWeight: '800',
        color: '#A1A4B2'
      },
      boxes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: height*.012,
        justifyContent:'space-between'
      },
      boxTitles:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: height*.028,
        paddingTop: height*.02,
       
        paddingLeft: width*.03,
        fontWeight: '800'
      },
      homePageBlockLeft: {
        flexDirection: 'column',
        flex: 0,
        marginTop: height*.02,
        paddingLeft: width*.01,
        width: width * .45,
        height: height * .25,
        borderRadius: width*.03,
        backgroundColor: '#4592D0'
      },
      leftBlockText:{
        textAlign: "left",
        fontSize: width*.055,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: height*.015,
        color: '#FFECCC'
               
      },
      leftNums:{
        textAlign: "center",
        fontSize: width*.1,
        fontFamily: 'Arial',
        fontWeight: '700',
        paddingTop: height*.01,
        color: '#FFECCC'
      },
      leftButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEAEC',
        borderRadius: 25,
        width: width*.2,
        height: height*.035,
        position: 'absolute',
        bottom: height*.035,
        left: width*.12

      },
      leftButtonText:{
        fontFamily: 'Arial',
        color: '#524F53',
        fontWeight: '700',
        fontSize: 12,

      },
      homePageBlockRight: {
        marginTop: height*.02,
        paddingLeft: width*.01,
        width: width * .45,
        height: height * .25,
        borderRadius: width*.03,
        backgroundColor: '#FFC97E'
      },
      
      rightBlockText:{
        textAlign: "left",
        fontSize: width*.055,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: height*.015,
        color: '#524F53'
      },
      rightNums:{
        textAlign: "center",
        fontSize: width*.1,
        fontFamily: 'Arial',
        fontWeight: '700',
        paddingTop: height*.01,
        color: '#524F53',
        paddingLeft: 6
      },
      rightButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#524F53',
        borderRadius: 25,
        width: width*.2,
        height: height*.035,
        position: 'absolute',
        bottom: height*.035,
        left: width*.12
      },
      rightButtonText:{
        fontFamily: 'Arial',
        color: 'white',
        fontWeight: '700',
        fontSize: 12,

      },
      extraTextView:{ 
        flexDirection: 'row',
      },
      extraTextStyle:{
        textAlign: "left",
        fontSize: height*.02,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: width*.03,
        color: '#524F53',
        paddingTop: height*.015
        
      }
     
      
     
})

export default HomePage