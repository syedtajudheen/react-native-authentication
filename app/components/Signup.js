import React,{Component} from 'react'
import Logout from './Logout'
import {View , Button, Text, TextInput, Image, StyleSheet, Alert} from 'react-native'
import {Input} from './common/index'
import firebase from 'firebase'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : '',
            error: ''
        }
    }
    static navigationOptions = {
        title: 'Signup Screen',
        headerTitleStyle:{
            fontWeight:'300',
            fontSize:20,
        },
      };
    onloginpress(){
        this.setState({error: ''})
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(()=> {
                Alert.alert('Created account Sucessfully');
                this.props.navigation.navigate('Login')
            })
            .catch(()=>{
                this.setState({error:'authentication failed'})
            })
        }
        else{
            Alert.alert('Invalid email')
        }
        
      }
    render(){
        const {navigate} = this.props.navigation
        const { container, buttonview, img, imgpadding, button, signup, error } = styles
        return(
            <View style={container}>
                <View style={imgpadding}>
                    <Image source={require('../img/signup.png')} style={img}/>
                </View>
                <View>
                    <Input value={this.state.email} onChangeText={(email)=> this.setState({email})} label="E-Mail" placeholder="example@gmail.com"/>
                    <Input value={this.state.password} secureTextEntry={true} onChangeText={(password)=> this.setState({password})} label="Password" placeholder="**************"/>
                </View>
                <View style={buttonview}>
                    <Button style={button} color="#009688" title="SignUp" onPress={this.onloginpress.bind(this)}/>
                </View>
                <View style={error}> 
                    <Text style={{color: 'red'}}>{this.state.error}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        padding:15,
        paddingTop: 10
    },
    img:{
        width: 90,
        height: 90,
        alignSelf:'center'
    },
    buttonview:{
        paddingTop: 20,
        paddingLeft: 80,
        paddingRight: 80
    },
    imgpadding:{
        paddingTop: 20,
        paddingBottom: 30
    },
    button:{
        backgroundColor: 'red'
    },
    error:{
        alignSelf:'center',
        paddingTop: 20
    }
})