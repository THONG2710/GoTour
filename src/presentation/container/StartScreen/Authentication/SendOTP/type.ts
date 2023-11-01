import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type SendOTPNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'sendOTP'>;

export type SendOTPRouteProp = RouteProp<AuthenticationParamList, 'sendOTP'>;

export type SendOTPProp = {
    navigation: SendOTPNavigationProp,
    route: SendOTPRouteProp,
}