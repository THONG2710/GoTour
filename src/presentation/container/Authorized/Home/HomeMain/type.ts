import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";

export type HomeMainNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'Home'>;

export type HomeMainRouteProp = RouteProp<AuthorizedParamList, 'Home'>;

export type HomeMainProp = {
    navigation: HomeMainNavigationProp,
    route: HomeMainRouteProp,
}