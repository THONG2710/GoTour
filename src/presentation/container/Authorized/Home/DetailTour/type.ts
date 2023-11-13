import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { HomeParamlist } from "../../../../storyboard/HomeStoryBoard";

export type DetailTourNavigationProp = NativeStackNavigationProp<HomeParamlist, 's_detailtour'>;

export type DetailTourRouteProp = RouteProp<HomeParamlist, 's_detailtour'>;

export type DetailTourProp = {
    navigation: DetailTourNavigationProp,
    route: DetailTourRouteProp,
}