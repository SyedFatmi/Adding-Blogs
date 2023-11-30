
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    imageSize: {
        width: 150, //Dimensions.get('window').width / numColumns, // Calculate width based on screen width and number of columns
        height: 100, // Set the desired height
        marginLeft: 10,
        borderRadius: 10,
    },
    paraText: {
        marginTop: 15,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        lineHeight: 25,
        letterSpacing: 1,
        color: '#000000',
        fontWeight: '600',
    },
    ButtonText: {
        marginTop: 20,
        fontSize: 16,
        color: '#000000',
        borderColor: 'black',
        borderWidth: 1,
        fontWeight: '700',
        paddingHorizontal: 25,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ffa07a'
    },
    flatlistText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'left',
        paddingVertical: 15,
        fontWeight: '700',
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    MainHeading: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        backgroundColor: '#cccccc'
    },
    headingText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#f44336',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingLeft: 25,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        color: 'black'
    },
    submitText: {
        backgroundColor: '#f44336',
        marginHorizontal: 15,
        color: 'white',
        textAlign: 'center',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700'
    },
});

export default globalStyles;
