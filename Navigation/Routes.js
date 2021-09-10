import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from '../Constants/Theme';

import Dashboard from './Dashboard';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
export default function Routes(){
    const Stack = createNativeStackNavigator();
    return(

    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{
            title: 'Registre-se',
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