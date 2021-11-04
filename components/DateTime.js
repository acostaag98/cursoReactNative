import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const WeatherItem = ({title, value, unit}) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemValue}>{value}{unit}</Text>
        </View>
    )
}

const dateTime = () => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>12:30 am.</Text>
                </View>
                <View>
                    <Text style={styles.subHeading}>Monday, June.</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem  title="Humidity: " value="45" unit="%" />
                    <WeatherItem  title="Pressure: " value="1000" unit=" hPA." />
                    <WeatherItem  title="Sunrise: " value="05:00" unit=" am." />
                    <WeatherItem  title="Sunset: " value="12:30" unit=" pm." />
                </View>
            </View>

            <View style={styles.rightAlign}>
                <Text style={styles.timeZone}>Córdoba, Argentina</Text>
                <Text style={styles.latLong}>4,22N 50E</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    heading: {
        fontSize: 45,
        color: "white",
        fontWeight: "100",
    },
    subHeading: {
        fontSize: 25,
        color: "white",
        fontWeight: "300",
    },
    rightAlign: {
        textAlign: "right",
        marginTop: 20,
    },
    timeZone: {
        fontSize: 17,
        color: "white",
    },
    latLong: {
        fontSize: 12,
        color: "white",
        fontWeight: "700"
    },
    weatherItemContainer: {
        backgroundColor: "#00000033",
        borderRadius: 5,
        padding: 15,
        marginTop: 25,


    },
    weatherItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    weatherItemTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
    },
    weatherItemValue: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
    },
})

export default dateTime
