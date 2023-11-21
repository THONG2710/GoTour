import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AccountParamlist } from "../../../../storyboard/AccountStoryBoard";

export type PostNavigationProp = NativeStackNavigationProp<AccountParamlist, 'post'>;

export type PostProfileRouteProp = RouteProp<AccountParamlist, 'post'>;

export type PostProp = {
    navigation: PostNavigationProp,
    route: PostProfileRouteProp,
}