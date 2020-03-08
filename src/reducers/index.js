import { combineReducers } from "redux";
import cities from "./cities.reducers";
import favorites from "./favorites.reducers.js";
import weather from "./weather.reducers.js";
import toggleTemperature from "./toggleTemperature.reducers";

export default combineReducers({
  cities,
  weather,
  favorites,
  toggleTemperature
});