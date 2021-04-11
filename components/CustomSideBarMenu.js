import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {{flex:0.8}}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style =  {{flex:2,paddingBottom:30,justifyContent:'center'}}>
                    <TouchableOpacity style = {{height:50,width:'80%',borderRadius:10,backgroundColor:'lightgreen',alignItems:'center',justifyContent:'center'}}
                    onPress={()=>{
                        firebase.auth().signOut()
                        this.props.navigation.navigate('WelcomeScreen')
                    }}>
                        <Text style = {{fontSize:20,fontWeight:'bold'}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}