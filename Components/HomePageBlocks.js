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
            
                <Text style = {this.props.textStyle}>{this.props.name}</Text>
                <View style = {this.props.extraTextView} >
                    <Text style = {this.props.numsStyle}>{this.props.nums}</Text>
                    <Text style = {this.props.extraTextStyle}>{this.props.extraText} </Text>
                </View> 

                <TouchableOpacity style = {this.props.buttonStyle}>
                    <Text style = {this.props.buttonTextStyle}>See More</Text>
                </TouchableOpacity>
            </View>
        )

    }
    
}


export default HomePageBlocks
