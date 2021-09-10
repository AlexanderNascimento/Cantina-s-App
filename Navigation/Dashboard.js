import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons'; 
import Theme from '../Constants/Theme'

//screens
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Pedidos from '../Screens/Pedidos';

export default function Dashboard() {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,    
            tabBarActiveTintColor:Theme.COLORS.SECONDARY,
            tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:Theme.COLORS.DEFAULT,
                elevation:10,
                borderTopColor:'transparent',
            }
        }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:({size,color})=>(<Ionicons name="ios-home" size={size} color={color} />)}}/>

            <Tab.Screen name="Pedidos" component={Pedidos} options={{ tabBarIcon:({size,color})=>(<FontAwesome5 name="list-alt" size={size} color={color} />)}}/>

            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:({size,color})=>(<FontAwesome name="user" size={size} color={color} />)}}/>
        </Tab.Navigator>
    );
}