import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import News from '../screens/News';
import EmptyScreen from '../screens/EmptyScreen';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:EmptyScreen
    },
    News:{
        screen:News
    },

},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})
