import React from 'react'
import {View, Image, Text, StyleSheet } from "react-native";


const FutureForecast = () => {
    return (
        <View style={{flexDirection: "row"}}>
            <FutureForecastItem dayTime="Mon" day="Day - 28&#176;C" night="Night - 18&#176;C" />
            <FutureForecastItem dayTime="Tue" day="Day - 22&#176;C" night="Night - 15&#176;C"/>
            <FutureForecastItem dayTime="Wed" day="Day - 27&#176;C" night="Night - 20&#176;C"/>
            <FutureForecastItem dayTime="Thu" day="Day - 22&#176;C" night="Night - 15&#176;C"/>
            <FutureForecastItem dayTime="Fri" day="Day - 25&#176;C" night="Night - 16&#176;C"/>
            <FutureForecastItem dayTime="Sat" day="Day - 27&#176;C" night="Night - 19&#176;C"/>
        </View>
    )
}

const FutureForecastItem = ({dayTime, day, night}) => {
    const img = require("../assets/weatherImage.png")
    return (
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>{dayTime}</Text>
            <Image style={styles.image} source={img}/>
            <Text style={styles.temp}>{night}</Text>
            <Text style={styles.temp}>{day}</Text>
        </View>
    )
}

export default FutureForecast

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    futureForecastItemContainer: {
        justifyContent: "center",
        backgroundColor: "#00000033",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
        margin: 10,
        height: 280,
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
})
