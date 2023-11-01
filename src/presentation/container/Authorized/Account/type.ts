import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../storyboard/AuthorizedStoryBoard";

export type AccountNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'account'>;

export type AccountRouteProp = RouteProp<AuthorizedParamList, 'account'>;

export type AccountProp = {
    navigation: AccountNavigationProp,
    route: AccountRouteProp,
}