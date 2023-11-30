import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../Constants/GlobalStyleSheet';

export default function Content(item) {

    const [inputValue, setInputValue] = useState('Input Dummy Text');
    const [displayValue, setDisplayValue] = useState('Display Dummy Text');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleDisplayValue = () => {
        setDisplayValue(inputValue);
    };

    return (
        <View style={styles.totalView}>
            <Text style={globalStyles.headingText}>Content Page</Text>
            <TextInput
                style={globalStyles.inputText}
                placeholder="Enter text"
                onChangeText={handleInputChange}
            />
            <TouchableOpacity onPress={handleDisplayValue}>
                <Text style={globalStyles.submitText}>
                    Display
                </Text>
            </TouchableOpacity>
            <Text style={styles.instendPara}>{inputValue}</Text>
            <ScrollView style={styles.mainScrollView}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalImage}
                >
                    <Image
                        source={require('../../images/entertainment/e-3.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/entertainment/e-4.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/entertainment/e-1.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/entertainment/e-2.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/movies/mo-1.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/movies/mo-2.jpg')}
                        style={globalStyles.imageSize}
                    />
                </ScrollView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalImage}
                >
                    <Image
                        source={require('../../images/movies/mo-1.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/movies/mo-3.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/movies/mo-4.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/movies/mo-5.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/entertainment/e-3.jpg')}
                        style={globalStyles.imageSize}
                    />
                    <Image
                        source={require('../../images/entertainment/e-4.jpg')}
                        style={globalStyles.imageSize}
                    />
                </ScrollView>
                <Text style={styles.instendPara}>{displayValue}</Text>
                <Text style={globalStyles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <Text style={globalStyles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <Text style={globalStyles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <Text style={globalStyles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    mainScrollView: {
        marginTop: 10
    },
    horizontalImage: {
        marginBottom: 10
    },
    totalView: {
        flex: 1,
        marginBottom: 20
    },
    contentInput: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#f44336',
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 25,
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    instendPara: {
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        lineHeight: 25,
        letterSpacing: 1,
        color: '#000000',
        fontWeight: '600',
    }
});


