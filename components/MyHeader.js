import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Header,Icon} from 'react-native-elements'

const MyHeader = props =>{
    return(
        <Header centerComponent = {{text:props.title,style:{color:'green',fontSize:20}}}
        leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = 'black' onPress={()=>{props.navigation.toggleDrawer()}}/>}
        backgroundColor = 'white'/>
    )
}