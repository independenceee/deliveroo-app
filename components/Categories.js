import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import Logo from "../assets/images/logo.jpg";
const Categories = function () {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
            <CategoryCard imgUrl={Logo} title={"Nguyễn Khánh"} />
        </ScrollView>
    );
};

export default Categories;
