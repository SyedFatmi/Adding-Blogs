import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'
import React from 'react';
import ListOfImages from '../Components/ListOfImages';
import globalStyles from '../Constants/GlobalStyleSheet';

export default function Home(props) {
    const { navigation } = props;

    return (
        <View style={styles.wholeView}>
            <Text style={globalStyles.headingText}>CHECK OUT OUR FEATURED LIST!</Text>
            <ScrollView >
                <ListOfImages />
                <TouchableOpacity
                    style={styles.centerText}
                    onPress={() => navigation.navigate('Lists')}
                >
                    <Text style={globalStyles.ButtonText}>ADD OR DELETE ITEMS IN THE LIST</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
    },
    centerText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },

});

