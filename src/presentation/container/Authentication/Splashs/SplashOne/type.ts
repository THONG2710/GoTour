import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SplashParamlist } from "../../../../storyboard/SplashStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type splashOneNavigationProp = NativeStackNavigationProp<SplashParamlist, 'splashOne'>;

export type splashOneRouteProp = RouteProp<SplashParamlist, 'splashOne'>;

export type SplashOneProp = {
    navigation: splashOneNavigationProp,
    route: splashOneRouteProp,
}