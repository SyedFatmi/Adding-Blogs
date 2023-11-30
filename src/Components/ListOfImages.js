import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';
import globalStyles from '../Constants/GlobalStyleSheet';

const imageArrayEntertainment = [

    { id: 2, source: require('../../images/entertainment/e-2.jpg') },
    { id: 3, source: require('../../images/entertainment/e-3.jpg') },
    { id: 4, source: require('../../images/entertainment/e-4.jpg') },
    { id: 5, source: require('../../images/entertainment/e-5.jpg') },
    { id: 1, source: require('../../images/entertainment/e-1.jpg') },
];

const imageArrayMall = [
    { id: 6, source: require('../../images/malls/m-1.jpg') },
    { id: 7, source: require('../../images/malls/m-2.jpg') },
    { id: 8, source: require('../../images/malls/m-3.jpg') },
    { id: 9, source: require('../../images/malls/m-4.jpg') },
    { id: 10, source: require('../../images/malls/m-5.jpg') },
];

const imageArrayMovies = [
    { id: 11, source: require('../../images/movies/mo-1.jpg') },
    { id: 12, source: require('../../images/movies/mo-2.jpg') },
    { id: 13, source: require('../../images/movies/mo-3.jpg') },
    { id: 14, source: require('../../images/movies/mo-4.jpg') },
    { id: 15, source: require('../../images/movies/mo-5.jpg') },
];

const imageArraySchool = [
    { id: 16, source: require('../../images/schools/sc-1.jpg') },
    { id: 17, source: require('../../images/schools/sc-2.jpg') },
    { id: 18, source: require('../../images/schools/sc-3.jpg') },
];

const imageArraySports = [
    { id: 19, source: require('../../images/sports/s-1.jpg') },
    { id: 20, source: require('../../images/sports/s-2.jpg') },
    { id: 21, source: require('../../images/sports/s-3.jpg') },
    { id: 22, source: require('../../images/sports/s-4.jpg') },
];


const TwoColumnImageGrid = () => {

    return (
        <View>
            <Text style={styles.myText}>1- Entertainment</Text>
            <FlatList
                style={styles.myFlatlist}
                data={imageArrayEntertainment}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        style={globalStyles.imageSize}
                    />
                )}
            />
            <Text style={styles.myText}>2- Malls</Text>
            <FlatList
                style={styles.myFlatlist}
                data={imageArrayMall}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        style={globalStyles.imageSize}
                    />
                )}
            />
            <Text style={styles.myText}>3- Movies</Text>
            <FlatList
                style={styles.myFlatlist}
                data={imageArrayMovies}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        style={globalStyles.imageSize}
                    />
                )}
            />
            <Text style={styles.myText}>4- Schools</Text>
            <FlatList
                style={styles.myFlatlist}
                data={imageArraySchool}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        style={globalStyles.imageSize}
                    />
                )}
            />
            <Text style={styles.myText}>5- Sports</Text>
            <FlatList
                style={styles.myFlatlist}
                data={imageArraySports}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        style={globalStyles.imageSize}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    myText: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 10
    },
    myFlatlist: {
        marginBottom: 20
    }
});

export default TwoColumnImageGrid;











// import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
// import React from 'react';

// export default function Home() {

//     const numColumns = 2;

//     return (
//         <View style={styles.container}>

//             <ImageBackground
//                 source={require('../../images/third-image.jpg')}
//                 style={styles.image}
//                 numColumns={numColumns}
//             >
//             </ImageBackground>
//             <ImageBackground
//                 source={require('../../images/fourth-image.jpg')}
//                 style={styles.image}
//                 numColumns={numColumns}
//             >
//             </ImageBackground>
//             <ImageBackground
//                 source={require('../../images/fifth-image.jpg')}
//                 style={styles.image}
//                 numColumns={numColumns}
//             >
//             </ImageBackground>
//             <ImageBackground
//                 source={require('../../images/first-image.jpg')}
//                 style={styles.image}
//                 numColumns={numColumns}
//             >
//             </ImageBackground>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: Dimensions.get('window').width / numColumns,
//         height: 300,
//         marginTop: 10,
//         resizeMode: 'cover',

//     }
// });

