import { render } from "react-dom"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { width, height } = Dimensions.get('window')


function SignUpPage({navigation}){
   
    return(
        <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
            <View style = {styles.container} >
                <Text style = {styles.logo} >Insert Logo</Text>

                <Image style = {styles.image} source={require('../assets/woodsCircular.png')} />
                <Text style={styles.title}>Live a more sustainable life</Text>
                <Text style = {styles.oneLiner}>Fight climate change and contribute to sustainable causes by using roundups to purchase carbon offsets.</Text>
                
                <TouchableOpacity style = {styles.button} >
                    <Text style = {styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
                <View style = {styles.loginButton}>
                    <Button title = 'Login' onPress={() => navigation.navigate('LogInPage')}></Button>
                </View>

            </View>
        </ScrollView>
    )
    
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
        padding: 40
    },
      image:{
        width: width*.65,
        height: height*.3,
        padding: 20
    },
    title: {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 36,
      textAlign:'center',
      padding: 10,
      paddingTop: 35
    },
    oneLiner:{
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 17,
      padding: 10,
      paddingBottom: 40
      
    },
    button:{  
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#84C6AE',
        borderRadius: 38,
        width: width*.8,
        height: height*.08,
    },
    buttonText:{
        fontFamily: 'Arial',
        color: 'white',
        fontWeight: '700',
        fontSize: 20

    },
    loginButton:{
        padding: 15 
    }
  });

export default SignUpPage