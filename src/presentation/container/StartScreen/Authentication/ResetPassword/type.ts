import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type ResetPasswordNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'resetPassword'>;

export type ResetPasswordRouteProp = RouteProp<AuthenticationParamList, 'resetPassword'>;

export type ResetPasswordProp = {
    navigation: ResetPasswordNavigationProp,
    route: ResetPasswordRouteProp,
}