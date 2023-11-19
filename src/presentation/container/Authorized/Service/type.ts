import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../storyboard/AuthorizedStoryBoard";

export type ServiceNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'Service'>;

export type ServiceRouteProp = RouteProp<AuthorizedParamList, 'Service'>;

export type ServiceProp = {
    navigation: ServiceNavigationProp,
    route: ServiceRouteProp,
}