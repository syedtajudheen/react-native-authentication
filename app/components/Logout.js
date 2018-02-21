import React,{Component} from 'react'
import {View, Button} from 'react-native'
import firebase from 'firebase'

export default class Login extends React.Component{
    static navigationOptions = {
        title: 'Logout'
    };
    onlogout(){
        firebase.auth().signOut()     
        .then(()=> {
            console.log('Signed Out');
            this.props.navigation.navigate('Login')
        })
        .catch(error => {
            console.error('Sign Out Error', error);
        });   
    }
    render(){
        return(
            <View>
                <Button title="logout" onPress={this.onlogout.bind(this)}/>
            </View>
        )
    }
}