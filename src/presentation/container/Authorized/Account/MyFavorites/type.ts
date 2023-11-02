import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";
import { AccountParamlist } from "../../../../storyboard/AccountStoryBoard";

export type MyFavoritesNavigationProp = NativeStackNavigationProp<AccountParamlist, 'myFavorites'>;

export type MyFavoritesRouteProp = RouteProp<AccountParamlist, 'myFavorites'>;

export type MyFavoritesProp = {
    navigation: MyFavoritesNavigationProp,
    route: MyFavoritesRouteProp,
}