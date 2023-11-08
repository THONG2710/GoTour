import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";
import { AccountParamlist } from "../../../../storyboard/AccountStoryBoard";

export type HistoryNavigationProp = NativeStackNavigationProp<AccountParamlist, 'history'>;

export type HistoryRouteProp = RouteProp<AccountParamlist, 'history'>;

export type HistoryProp = {
    navigation: HistoryNavigationProp,
    route: HistoryRouteProp,
}