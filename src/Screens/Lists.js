import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import globalStyles from '../Constants/GlobalStyleSheet';

export default function List(props) {
    const { navigation } = props;

    const [data, setData] = useState([
        { "key": 93528, "text": "This is Dummy Paragraph" },
    ]);
    const [text, setText] = useState('');

    const addItem = () => {

        if (text.trim() !== '') {
            const newItem = {
                key: Math.floor(Math.random() * 99999),
                text: text,
            };
            setData([...data, newItem]);
            setText('');
        }
    };

    const deleteItem = (key) => {
        setData(prevData => prevData.filter(item => item.key !== key));
    };

    const showAlert = () => {
        if (text.trim() === '') {
            Alert.alert(
                'Alert',
                'The field is empty. Please enter some text.',
                [
                    {
                        text: 'OK'
                    }
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <View>
            <Text style={globalStyles.MainHeading}>Add or Delete your Exclusive Data</Text>
            <TouchableOpacity
                style={styles.centerText}
                onPress={() => navigation.navigate('Content')}
            >
                <Text style={globalStyles.ButtonText}>CONTENT PAGE</Text>
            </TouchableOpacity>
            <TextInput
                style={globalStyles.inputText}
                placeholderTextColor="#000000"
                placeholder="Enter your name and id..."
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity onPress={() => addItem(showAlert())}>
                <Text style={globalStyles.submitText}>Submit</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={globalStyles.flatlistText}>
                        <Text style={styles.writtenText}>{item.text}, ID - {index + 1}</Text>
                        <TouchableOpacity onPress={() => deleteItem(item.key)}>
                            <Icon name="trash" style={styles.writtenIcon} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.key}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    popupStyling: { fontSize: 30 },
    centerText: { flexDirection: 'row', justifyContent: 'center', marginBottom: 2 },
    writtenText: { fontSize: 16, color: 'black', fontWeight: '700' },
    writtenIcon: { fontSize: 20, color: '#f44336' }
});