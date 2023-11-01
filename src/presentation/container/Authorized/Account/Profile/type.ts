import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";

export type ProfileNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'account'>;

export type ProfileRouteProp = RouteProp<AuthorizedParamList, 'account'>;

export type ProfileProp = {
    navigation: ProfileNavigationProp,
    route: ProfileRouteProp,
}