import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type RegisterNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'register'>;

export type registerRouteProp = RouteProp<AuthenticationParamList, 'register'>;

export type RegisterProp = {
    navigation: RegisterNavigationProp,
    route: registerRouteProp,
}