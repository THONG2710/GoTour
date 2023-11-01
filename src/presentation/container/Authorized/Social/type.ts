import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../storyboard/AuthorizedStoryBoard";

export type SocialNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'Social'>;

export type SocialRouteProp = RouteProp<AuthorizedParamList, 'Social'>;

export type SocialProp = {
    navigation: SocialNavigationProp,
    route: SocialRouteProp,
}