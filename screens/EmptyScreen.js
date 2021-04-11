import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class EmptyScreen extends Component{
    render(){
        return(
            <View>
                <View>
                    <MyHeader navigation =  {this.props.navigation} title = 'Empty for now' />
                </View>
                <Text>Empty Screen</Text>
            </View>
        )
    }
}