import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import firebase from 'firebase'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentWillMount(){
        firebase.database().ref('posts').on('value', function(dataSnapshot){
            console.log(dataSnapshot.val())
            // this.setState({posts: snapshot.val()})
        })
    }
    static navigationOptions = {
        title: 'Home'
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
            <View style={styles.logoutview}>
                <Button title="logout" onPress={this.onlogout.bind(this)}/>
                <Text style={styles.text}>Welcome to My Homepage</Text>
                {/* {this.state.posts.map(post=>{
                    <Text>{post.title}</Text>
                })} */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
   
    text:{
        paddingTop: 200,
        alignSelf: 'center',
        fontSize: 20
    }
})