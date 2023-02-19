import React, { useLayoutEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = function () {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className=" bg-white pt-10">
            <View className="flex flex-row pb-3 items-center mx-4 space-x-2 px-4">
                <Image
                    source={require("../assets/images/logo.jpg")} //{ uri: "" } or require("../../assets/images/logo.jpg")
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={30} color="#00CCBB" />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 ">
                    {/* <SearchIcon color="gray" size={20} /> */}
                    <TextInput placeholder="Search..." keyboardType="default" />
                </View>
                {/* <AdjustmentsIcon color="#00CCBB" /> */}
            </View>
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <Categories />

                <FeaturedRow
                    id="123"
                    description="Nguyễn Duy Khanh"
                    title={"Nguyễn Duy Khánh"}
                />
                <FeaturedRow
                    id="123"
                    description="Nguyễn Duy Khanh"
                    title={"Nguyễn Duy Khánh"}
                />
                <FeaturedRow
                    id="123"
                    description="Nguyễn Duy Khanh"
                    title={"Nguyễn Duy Khánh"}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
