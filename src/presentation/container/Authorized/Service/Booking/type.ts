import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ServiceParamlist } from "../../../../storyboard/ServiceStoryBoard";

export type BookingNavigationProp = NativeStackNavigationProp<ServiceParamlist, 's_booking'>;

export type BookingRouteProp = RouteProp<ServiceParamlist, 's_booking'>;

export type BookingProp = {
    navigation: BookingNavigationProp,
    route: BookingRouteProp,
}