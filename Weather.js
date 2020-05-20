import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptoins = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#DBE6F6", "#C5796D"], //[top,bottom]
    comment: "비도 오고 그래서 니 생각이 났어",
    title: "HAZE",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#BDC3C7", "#2C3E50"],
    comment: "Thor is Coming..!!",
    title: "Lightning",
  },
  Dizzle: {
    iconName: "weather-hail",
    gradient: ["#DBE6F6", "#C5796D"],
    comment: "다 젖을 수도 있다구..",
    title: "Hail",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4CA1AF", "#C4E0E5"],
    comment: "행정반에서 전파드립니다..",
    title: "Snowy",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    comment: "쨍쨍",
    title: "Sunny",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "흐림",
    title: "Cloudy",
  },
  Mist: {
    iconName: "weather-cloudy",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    comment: "밤안개~",
    title: "Mist",
  },
  Smoke: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Dust: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Fog: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Sand: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Ash: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Squall: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
  Tornado: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    comment: "Blah Blah..",
    title: "Not Yet..",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptoins[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptoins[condition].iconName || "cloud-question"}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptoins[condition].title}</Text>
        <Text style={styles.comment}>{weatherOptoins[condition].comment} </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 48,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  comment: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
