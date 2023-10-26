import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SplashParamlist } from "../../../../storyboard/SplashStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type splashTwoNavigationProp = NativeStackNavigationProp<SplashParamlist, 'splashTwo'>;

export type splashTwoRouteProp = RouteProp<SplashParamlist, 'splashTwo'>;

export type SplashTwoProp = {
    navigation: splashTwoNavigationProp,
    route: splashTwoRouteProp,
}