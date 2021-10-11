import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
import HomePageBlocks from './HomePageBlocks';

const { width, height } = Dimensions.get('window')
const img = '../assets/CharmIndustrial.png'

class ScrollingHorizontalBlocks extends React.Component{
     imgs = this.props.logos[0]
    render(){
        return(
            <ScrollView style = {styles.scrollview} horizontal = {true}>
                <View style = {styles.overallView}>
                   
                    <View>
                      <View style = {styles.container}>
                          <View style={styles.overlay} />
                          <Image style = {styles.image} source={this.props.logos[0]} />
                         
                      </View>
                      <Text style = {styles.scrollingBlockTitle}>{this.props.projects[0]}</Text> 
                      <Text style = {styles.scrollingBlockText}>{this.props.pricesTon[0]}</Text> 

                    </View>


                   <View>
                      <View style = {styles.container} >
                          <View style={styles.overlayCharm} opacity={0.65}/>
                          <Image style = {styles.charmImage} source={this.props.logos[1]} />
                      </View>
                      <Text style = {styles.scrollingBlockTitle}>{this.props.projects[1]}</Text> 
                      <Text style = {styles.scrollingBlockText}>{this.props.pricesTon[1]}</Text> 


                    </View>
                   
                    <View>
                      <View style = {styles.container} >
                          <View style={styles.overlayVesta} />
                          <Image style = {styles.image} source={this.props.logos[2]} />
                      </View>
                      <Text style = {styles.scrollingBlockTitle}>{this.props.projects[2]}</Text> 
                      <Text style = {styles.scrollingBlockText}>{this.props.pricesTon[2]}</Text> 


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
    scrollingBlockTitle:{
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontSize: 20,
      marginLeft: 10,
      fontWeight: '700',
      paddingTop: 10
    },
    scrollingBlockText:{
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontSize: 14,
      marginLeft: 10,
      fontWeight: 'normal',
      paddingTop: 5,
      color: '#A1A4B2'

      

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
