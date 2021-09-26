import React from 'react';
import {Dimensions, TouchableOpacity, Button, ScrollView, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
  const { width, height } = Dimensions.get('window')

function LogInPage ({navigation}){
   
  
        return(
            <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
                <View style={styles.container}>
                    <Text style = {styles.title}>Welcome Back!</Text>
                    <Text style = {styles.oneLiner}>Sign in to continue</Text>
                    <TextInput style = {styles.input} placeholder = {'Email'}></TextInput>
                    <TextInput style = {styles.input} placeholder = {'Password'}></TextInput>
                    <Text style = {styles.oneLiner}>Forgot Password?</Text>
                    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('HomePage')}>
                        <Text style = {styles.buttonText}>Sign In</Text>
                     </TouchableOpacity>
                     <Text style = {styles.oneLinerBottom}>Don't have an account? - Sign Up</Text>



                </View>
            </ScrollView>
        )
    

}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
    },
       
    title: {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 36,
      textAlign:'center',
      padding: 10,
      paddingTop: 35,
      paddingBottom: 20
    },
    oneLiner:{
      fontFamily: 'Arial',
      fontStyle: 'normal',
      textAlign:'center',
      fontSize: 15,
      paddingTop: 10,
      paddingBottom: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: wp2dp('80%'),
        borderRadius: 10
        
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
        width: 320,
        height: 63,
    },
    buttonText:{
        fontFamily: 'Arial',
        color: 'white',
        fontWeight: '700',
        fontSize: 20

    },
    oneLinerBottom:{
      fontFamily: 'Arial',
      fontStyle: 'normal',
      textAlign:'center',
      fontSize: 15,
      paddingTop: 40,
      paddingBottom: 30
    }
})




export default LogInPage
