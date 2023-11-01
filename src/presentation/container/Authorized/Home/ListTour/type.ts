import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";
import { AuthorizedParamList } from "../../../../storyboard/AuthorizedStoryBoard";
import { HomeParamlist } from "../../../../storyboard/HomeStoryBoard";

export type ListTourNavigationProp = NativeStackNavigationProp<HomeParamlist, 'b_listTour'>;

export type ListTourRouteProp = RouteProp<HomeParamlist, 'b_listTour'>;

export type ListTourProp = {
    navigation: ListTourNavigationProp,
    route: ListTourRouteProp,
}

export interface Props {
    item: { image: any, name: string, turn: string, price: string, time: string }
    index: number
}