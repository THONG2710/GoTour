import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../storyboard/AuthorizedStoryBoard";

export type BookingNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'Service'>;

export type BookingRouteProp = RouteProp<AuthorizedParamList, 'Service'>;

export type BookingProp = {
    navigation: BookingNavigationProp,
    route: BookingRouteProp,
}