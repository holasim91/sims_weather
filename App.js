import React from "react";
import { Alert } from "react-native";
import axios from "axios";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "3e7525ebfa8f979aba88cb2fd0d0a435";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      // condition: 'Haze',
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // API에 요청을 해서 날씨정보 받아옴
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "so sad..");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
