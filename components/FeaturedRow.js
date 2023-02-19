import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = function ({ id, title, description }) {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <RestaurantCard
                    id="123"
                    imgUrl=""
                    title="Nguyễn Duy Khánh"
                    rating={4.5}
                    address="Quan Loc"
                    genre="Viet Nam"
                    short_description="Nguyễn Duy Khanh"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="123"
                    imgUrl=""
                    title="Nguyễn Duy Khánh"
                    rating={4.5}
                    address="Quan Loc"
                    genre="Viet Nam"
                    short_description="Nguyễn Duy Khanh"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="123"
                    imgUrl=""
                    title="Nguyễn Duy Khánh"
                    rating={4.5}
                    address="Quan Loc"
                    genre="Viet Nam"
                    short_description="Nguyễn Duy Khanh"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
