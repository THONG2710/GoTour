import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type LoginNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'login'>;

export type loginRouteProp = RouteProp<AuthenticationParamList, 'login'>;

export type LoginProp = {
    navigation: LoginNavigationProp,
    route: loginRouteProp,
}