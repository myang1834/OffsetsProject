import React from 'react';
import { View, Text } from "react-native"

class LogInPage extends React.Component{
   
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
            </View>
        )
    }

}


export default LogInPage
