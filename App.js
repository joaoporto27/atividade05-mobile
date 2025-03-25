import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack1 from "./navigation/StackNavigator.js";

export default function App() {
    return (
        <NavigationContainer>
            <Stack1 />
        </NavigationContainer>
    );
}