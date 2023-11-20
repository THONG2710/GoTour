import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ServiceParamlist } from "../../../../storyboard/ServiceStoryBoard";

export type BookHotelNavigationProp = NativeStackNavigationProp<ServiceParamlist, 's_bookhotel'>;

export type BookHotelRouteProp = RouteProp<ServiceParamlist, 's_bookhotel'>;

export type BookHotelProp = {
    navigation: BookHotelNavigationProp,
    route: BookHotelRouteProp,
}