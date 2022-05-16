import React from 'react';
import { View, Text } from 'react-native';
import SectionListGrid from 'react-native-section-list-grid';

export default ExampleOne = () => {
    const data = [
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
        },
        {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
        },
        {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
        }
    ];

    return (
        <View style={{ marginTop: 50 }}>
            <SectionListGrid
                data={data}
                numItemsRow={2}
                renderItem={(subObj, subIndex) => {
                    <Text style={{ margin: 5, backgroundColor: 'grey' }} key={subIndex}>
                        {subObj}</Text>
                }}
                renderHeader={(obj, index) => {
                    <Text style={{ margin: 5, backgroundColor: 'green' }}>
                        {obj.title}</Text>
                }}
            />
        </View>
    );
};