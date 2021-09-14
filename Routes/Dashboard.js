import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,FontAwesome,FontAwesome5 } from '@expo/vector-icons'; 
import Theme from '../Constants/Theme'

//screens
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Pedidos from '../Views/Pedidos';
import Buy from '../Views/Buy';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Dashboard() {
    
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
            <Tab.Screen name="BuyinRoutes" component={BuyingRoutes} options={{ tabBarIcon:({size,color})=>(<Ionicons name="ios-home" size={size} color={color} />)}}/>

            <Tab.Screen name="Pedidos" component={Pedidos} options={{ tabBarIcon:({size,color})=>(<FontAwesome5 name="list-alt" size={size} color={color} />)}}/>

            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:({size,color})=>(<FontAwesome name="user" size={size} color={color} />)}}/>
        </Tab.Navigator>
    );
}



function BuyingRoutes(){
    
    return(
        <Stack.Navigator  >
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Buy" component={Buy} options={{
                title:'Comprar',
                headerStyle: {
                    backgroundColor: Theme.COLORS.DEFAULT,
                  },
                  headerTintColor: Theme.COLORS.SECONDARY,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    elevation:5,
                  },
            }}/>
           
        </Stack.Navigator>
    );
}
