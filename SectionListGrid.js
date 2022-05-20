import React from 'react';
import { View, Text } from 'react-native';

export default SectionListGrid = (props) => {
    return (
        <View style={props.listStyle}>
            {
                props.data.map((obj, index) =>
                    <View style={props.cellStyle} key={'obj' + index}>
                        {props.renderHeader(obj, index, props.headerStyle)}
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                obj?.data.map((subObj, subIndex) =>
                                    <View style={[{ width: 100 / props.numItemsRow + '%' }, props.itemViewStyle]} key={'sub' + subIndex}>
                                        {props.renderItem(subObj, subIndex)}
                                    </View>
                                )
                            }
                        </View>
                    </View>
                )
            }
        </View>
    );
};
SectionListGrid.defaultProps = {
    data: [],
    numItemsRow: 3,
    itemViewStyle: {},
    listStyle: {},
    cellStyle: {},
    headerStyle: {},
    renderItem: (subObj, subIndex) => {
        return <Text style={{ margin: 5 }} key={subIndex}>{subObj}</Text>
    },
    renderHeader: (obj, index, headerStyle) => {
        return <Text style={[{ margin: 5 }, headerStyle]}>{obj.title}</Text>
    }
}