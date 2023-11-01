import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";
import { HomeParamlist } from "../../../../storyboard/HomeStoryBoard";

export type HomeMainNavigationProp = NativeStackNavigationProp<HomeParamlist, 's_home'>;

export type HomeMainRouteProp = RouteProp<HomeParamlist, 's_home'>;

export type HomeMainProp = {
    navigation: HomeMainNavigationProp,
    route: HomeMainRouteProp,
}