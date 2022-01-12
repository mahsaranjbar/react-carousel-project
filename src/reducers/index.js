import { combineReducers } from "redux";
import featuredLocations from "./featuredLocations";
import popularLocations from "./popularLocations";

export default combineReducers({
  featuredLocations,
  popularLocations
});
