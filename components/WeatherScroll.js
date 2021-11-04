import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from "react-native";
import FutureForecast from './FutureForecast';

const WeatherScroll = () => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTemplateElement />
            <FutureForecast />
        </ScrollView>
    )
}

const CurrentTemplateElement = () => {
    const img = require("../assets/weatherImage.png")
    return(
        <View style={styles.currentTemplateContainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}>Night - 18&#176;C</Text>
                <Text style={styles.temp}>Day - 28&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
    scrollView: {
        backgroundColor: "#18181bcc",
        padding: 30,
        flex: 0.4,
    },
    currentTemplateContainer: {
        flexDirection: "row",
        backgroundColor: "#00000033" ,
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#eee",
        borderWidth: 1,
        height: 300,
        padding: 10,
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: "center",
        borderRadius: 5,
        fontWeight: "200",
        marginBottom: 15,
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
        textAlign: "center",
    },
    otherContainer: {
        paddingRight: 50,
    },
})

export default WeatherScroll