# SectionListGrid

We have a list component in react native, but we have a section list component in react native as well, but we don't have a component for section grid list view. It helps to easily create a grid list view with your own style and customize the view.

# Attachments
![Screenshot](https://github.com/LoganRaja/SectionListGrid/blob/master/examples/screenshots/first.png)![Screenshot](https://github.com/LoganRaja/SectionListGrid/blob/master/examples/screenshots/second.png)![Screenshot](https://github.com/LoganRaja/SectionListGrid/blob/master/examples/screenshots/third.png)

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
