import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AccountParamlist } from "../../../../storyboard/AccountStoryBoard";

export type ProfileNavigationProp = NativeStackNavigationProp<AccountParamlist, 'profile'>;

export type ProfileRouteProp = RouteProp<AccountParamlist, 'profile'>;

export type ProfileProp = {
    navigation: ProfileNavigationProp,
    route: ProfileRouteProp,
}