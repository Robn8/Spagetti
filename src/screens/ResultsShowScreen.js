import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
         


    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <View style={styles.info}>
                <Text style={styles.details}>People have rated {result.name} a {result.rating} out of 5</Text>
                <Text style={styles.details}>Phone number: {result.phone}</Text>
                <Text style={styles.details}>Location: {result.location.address1}, {result.location.city}, {result.location.state} {result.location.zip_code}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        marginLeft: 15,
        width: 250,
        height: 400,
        borderRadius: 10,
        marginBottom: 5
    },
    title: {
        margin: 15,
        fontSize: 24
    },
    info: {
        margin: 15
    },
    details: {
        marginBottom: 5,
        fontSize: 14
    }
});

export default ResultsShowScreen;