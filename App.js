import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import News from './screens/News';
import EmptyScreen from './screens/EmptyScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}
const switchNavigation = createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    News:{screen:News},
    EmptyScreen:{screen:EmptyScreen}
})
const AppContainer = createAppContainer(switchNavigation)