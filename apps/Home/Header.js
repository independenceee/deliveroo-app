import React from "react";

const Header = function () {
    return (
        <Text>
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={require("../assets/images/logo.jpg")} //{ uri: "" }
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View>
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">Current Location</Text>
                </View>
            </View>
        </Text>
    );
};
export default Header;
