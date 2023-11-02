import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../storyboard/AuthorizedStoryBoard";

export type HomeNavigationProp = NativeStackNavigationProp<AuthorizedParamList, 'Home'>;

export type HomeRouteProp = RouteProp<AuthorizedParamList, 'Home'>;

export type HomeProp = {
    navigation: HomeNavigationProp,
    route: HomeRouteProp,
}