import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type ChangePasswordNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'changePassword'>;

export type ChangePasswordRouteProp = RouteProp<AuthenticationParamList, 'changePassword'>;

export type ChangePasswordProp = {
    navigation: ChangePasswordNavigationProp,
    route: ChangePasswordRouteProp,
}