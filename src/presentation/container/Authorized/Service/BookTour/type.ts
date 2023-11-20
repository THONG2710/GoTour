import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ServiceParamlist } from "../../../../storyboard/ServiceStoryBoard";

export type BookTourNavigationProp = NativeStackNavigationProp<ServiceParamlist, 's_booktour'>;

export type BookTourRouteProp = RouteProp<ServiceParamlist, 's_booktour'>;

export type BookTourProp = {
    navigation: BookTourNavigationProp,
    route: BookTourRouteProp,
}