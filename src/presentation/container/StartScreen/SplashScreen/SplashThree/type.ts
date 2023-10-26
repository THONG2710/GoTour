import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SplashParamlist } from "../../../../storyboard/SplashStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type splashThreeNavigationProp = NativeStackNavigationProp<SplashParamlist, 'splashThree'>;

export type splashThreeRouteProp = RouteProp<SplashParamlist, 'splashThree'>;

export type SplashThreeProp = {
    navigation: splashThreeNavigationProp,
    route: splashThreeRouteProp,
}