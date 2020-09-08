import createItem from "./createItem.reducer";
import getFoodData from "./getFoodData.reducer";
import routeBetweenComps from "./routeBetweenComps.reducer";
import { combineReducers } from "redux";

export default combineReducers({ createItem, getFoodData, routeBetweenComps });
