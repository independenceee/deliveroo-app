import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../apps/Home/Header";

const HomeScreen = function () {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="mt-10">
            <Header />
        </SafeAreaView>
    );
};

export default HomeScreen;
