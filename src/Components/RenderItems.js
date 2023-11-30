import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function RenderItem(route, navigation) {
    const { data } = route.params;

    let item = data;


    return (
        <View style={styles.flatlistText} >
            <Text style={styles.writtenText}>{item.text} - {item.key}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
                <Icon name="trash" style={styles.writtenIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    firstHeading: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        backgroundColor: '#cccccc'
    },
    flatlistText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'left',
        paddingVertical: 15,
        fontWeight: '700',
        borderWidth: 3,
        borderColor: '#000000',
        marginBottom: 10,
        marginHorizontal: 15,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    inputText: {
        borderWidth: 3,
        borderColor: '#f44336',
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 25,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 30,
        color: 'black'
    },
    submitText: {
        backgroundColor: '#f44336',
        marginHorizontal: 15,
        color: 'white',
        textAlign: 'center',
        padding: 20,
        marginBottom: 10,
        borderRadius: 15,
        fontSize: 16,
        fontWeight: '700'
    },
    writtenText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700'
    },
    writtenIcon: {
        fontSize: 20,
        color: '#f44336'
    }
});