import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity,TouchableHighLight,TouchableNativeFeedback,Linking} from 'react-native';
import {Card,Divider} from 'react-native-elements';
import moment from 'moment';
import newsImage from '../assets/newsImage.jpg'

export default class Article extends Component{
    render(){
        const{
            title,
            description,
            publishedAt,
            source,
            urlToImage,
            url
        }=this.props.article
        const time = moment(publishedAt||moment.now()).fromNow()
        return(
            <TouchableHighLight>
                <Card featureTitle= {title}
                featureTitleStyle = {styles.featureTitleStyle}
                image = {{uri:urlToImage}}>
                    <Text style = {{margin:10}}>{description||'readMore'}</Text>
                    <Divider style = {{backgroundColor:'white'}}/>
                    <View style = {{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={styles.text}>{source.name.toUpperCase()}</Text>
                        <Text style = {styles.text}>{time}</Text>
                    </View>
                </Card>
            </TouchableHighLight>

        )
    }
}

const styles = StyleSheet.create({
    featureTitleStyle:{
        marginHorizontal:5,
        textShadowColor:'gray',
        textShadowOffset:{width:3,height:3},
        textShadowRadius:3
    },
    text:{
        margin:5,
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:15,
        color:'lightgreen'
    }
})