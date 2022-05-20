# SectionListGrid

![platforms](https://img.shields.io/badge/platforms-Android%20|%20iOS-brightgreen.svg)
[![npm](https://img.shields.io/npm/v/react-native-grid-list.svg)](https://www.npmjs.com/package/react-native-grid-list)
![license](https://img.shields.io/npm/l/react-native-grid-list.svg)

## Installation

```
yarn add react-native-section-list-grid
```

or

```
npm install react-native-section-list-grid --save
```

## Example


### Code

```js
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
```

Check the code [here](./examples/ExampleOne.js)


## Props

| Prop                            |              Default               |      Type       | Description                                |
| :------------------------------ | :--------------------------------: | :-------------: | :----------------------------------------- |
| data                            |       [] _required_                          |`array`          | Data to use in renderSectionList           |
| numItemsRow                     |       3                            |`number`         | number of item per row                     |
| itemViewStyle                   |       {}                           |`ViewPropTypes`  | style of grid item view                    |
| listStyle                       |       {}                           |`ViewPropTypes`  | style of entire listview                   |
| cellStyle                       |       {}                           |`ViewPropTypes`  | style of one section view                  |
| headerStyle                     |       {}                           |`TextPropTypes`  | style of section header text               |
| renderItem                      |       <Text>{}</Text>              |`render`         | create own grid cell view                  |
| renderHeader                    |       <Text>{}</Text>              |`render`         | create own section header view             |

## Author

Loganathan Rajamani
