import React, {Component} from 'react';
import {  View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { view, label, input, text } = styles
        const { placeholder, secureTextEntry, onChangeText } = this.props
        return(
        <View style={view}>
            <View>
                <Text style={text}>{this.props.label}</Text>
            </View>
            <View style={input}>
                <TextInput underlineColorAndroid="transparent" placeholder={placeholder} secureTextEntry={secureTextEntry}  onChangeText={onChangeText} value={this.props.value}/>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        padding: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderRadius: 100,
        marginBottom: 9,
        borderColor: '#009688',
        borderWidth: 1
    },
    text:{
        padding: 9,
        fontSize: 17
    },
    input:{
        padding: 9,
        paddingBottom: 0,
        paddingLeft:20,
        width: 260,
    }    
})
