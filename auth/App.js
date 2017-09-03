import React from 'react';
import {  View } from 'react-native';
import firebase from 'firebase';
import {Header,Button,CardSection,Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {

  state = {loggedIn: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAbv2V0W6RY12-ca8HeCTTEG2AG4r7FH6w',
      authDomain: 'reactnativeauthenticatio-ee441.firebaseapp.com',
      databaseURL: 'https://reactnativeauthenticatio-ee441.firebaseio.com',
      projectId: 'reactnativeauthenticatio-ee441',
      storageBucket: 'reactnativeauthenticatio-ee441.appspot.com',
      messagingSenderId: '111787798444'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn:true});
      }else{
        this.setState({loggedIn:false});
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm/>;
      default:
        return <View style={{justifyContent:'center',alignItems:'center',flex:1}}><Spinner size="large" /></View>
    }
    
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

