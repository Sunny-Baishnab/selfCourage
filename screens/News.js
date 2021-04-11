import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView,FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import MyHeader from '../components/MyHeader'
import {getnews} from '../components/NewsApi';
import Article from '../components/Article';

export default class News extends Component{
    constructor(props){
        super(props)
        this.state={
            articles:[],
            refresing:true
        }
    }
    fetchNews=()=>{
        getnews()
        .then((articles)=>{
            this.setState({
                articles,
                refresing:false
            })
        })
        .catch(()=>{
            this.setState({
                refresing:false
            })
        })
    }
    handleRefresh=()=>{
        this.setState({
            refresing:true
        },()=>this.fetchNews())
    }
    componentDidMount(){
        this.fetchNews()
    }
    render(){
        console.log(this.state.articles)
        return(
            <View style  = {{flex:1}}>
                <FlatList data  = {this.state.articles}
                renderItem = {({item})=>{
                    <Article article={item}/>
                }}
                keyExtractor = {item=>item.url}
                refreshing = {this.state.refresing}
                //onRefresh = {this.handleRefresh.bind(this)}
                onRefresh={this.handleRefresh}/>
            </View>
        )
    }
}