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
            <View style = {this.props.style}>
            
                <Text style = {styles.block}>{this.props.name}</Text>
                <Text style = {styles.text}>$452.24</Text>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>See More</Text>
                </TouchableOpacity>
            </View>
        )

    }
    
}



const styles = StyleSheet.create({ 
    text:{
        textAlign: "center",
        fontSize: 38,
        fontFamily: 'Arial',
        fontWeight: '700',
        paddingTop: 15,
        color: '#FFECCC'
        
    },
    block: {  
        
        textAlign: "left",
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: '700',
        padding: 12,
        color: '#FFECCC'
    },
    button:{  
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: '#524F53',
        borderRadius: 25,
        width: width*.2,
        height: height*.035,
        position: 'absolute',
        bottom: 25,
        left: width*.12
        
    },
    buttonText:{
        
        fontFamily: 'Arial',
        color: 'white',
        fontWeight: '700',
        fontSize: 12,

    }

})

export default HomePageBlocks
