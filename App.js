import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import VoteScreen from "./screens/VoteScreen";

const Stack = createNativeStackNavigator();

const App = function () {
    return (
        <TailwindProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    {/* <Stack.Screen name="Vote" component={VoteScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
};

export default App;
