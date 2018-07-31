import { combineReducers } from 'redux';
import FetchWeather from './reducer_weather';

const rootReducer = combineReducers({
  weather: FetchWeather
});

export default rootReducer;
