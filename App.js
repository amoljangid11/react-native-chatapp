import React from 'react';  
import {StyleSheet, Text, View, Image} from 'react-native';  
import { createAppContainer } from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class SearchScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Chat Screen</Text>  
        </View>  
    );  
  }  
}
class BookServiceScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>Book Service</Text>
      </View>
    )
  }
} 

class ChatService extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>Chat Screen</Text>
      </View>
    )
  }
}
  
const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:HomeScreen,  
        navigationOptions:{  
            
          tabBarIcon:({tintColor})=>(  
            <Image source = {require('./asset/Images/1.png')} style = {{width: 50, height: 50, tintColor: tintColor}}/>

          )  
        }  
      },  
      Search: {  
        screen: SearchScreen,  
        navigationOptions:{  
            
          tabBarIcon:({tintColor})=>(  
              <Image source = {require('./asset/Images/3.png')} style={{width: 50, height: 50, tintColor: tintColor}}/>
          )  
        }  
      },
      BookService: {
        screen: BookServiceScreen,
        navigationOptions: {
          
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-book" color={tintColor} size={25}/>
          )
        }
      },
      Chat: {
        screen: ChatService,
        navigationOptions: {
          
          tabBarIcon: ({tintColor})=>(
            <Image source = {require('./asset/Images/4.png')} style = {{width: 40, height: 40, tintColor: tintColor}}/>
          )
        }
      }  
    },  
    {  
      initialRouteName: "Home"  
    },  
);  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
  },  
});  
  
export default createAppContainer(TabNavigator);  
