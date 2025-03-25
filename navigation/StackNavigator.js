import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackScreen from "../pages/Home";
import Stack2 from "../pages/Pagina2";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={StackScreen} /> 
            <Stack.Screen name="Detalhes" component={Stack2} />
        </Stack.Navigator>
    );
}