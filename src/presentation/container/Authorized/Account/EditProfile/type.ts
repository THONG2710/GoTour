import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AccountParamlist } from "../../../../storyboard/AccountStoryBoard";

export type EditProfileNavigationProp = NativeStackNavigationProp<AccountParamlist, 'editProfile'>;

export type EditProfileRouteProp = RouteProp<AccountParamlist, 'editProfile'>;

export type EditProfileProp = {
    navigation: EditProfileNavigationProp,
    route: EditProfileRouteProp,
}