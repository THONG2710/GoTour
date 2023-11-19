import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ServiceParamlist } from "../../../../storyboard/ServiceStoryBoard";

export type HotelDetailNavigationProp = NativeStackNavigationProp<ServiceParamlist, 's_detailhotel'>;

export type HotelDetailRouteProp = RouteProp<ServiceParamlist, 's_detailhotel'>;

export type HotelDetailProp = {
    navigation: HotelDetailNavigationProp,
    route: HotelDetailRouteProp,
}