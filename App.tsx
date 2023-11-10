import React from 'react';
<<<<<<< HEAD
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashTwo from './src/presentation/container/Splash/SplashTwo';
import SplashThree from './src/presentation/container/Splash/SplashThree';
import MyFavourite from './src/presentation/container/MyFavourite/Screen/MyFavourite';
import ItemMyFavourite from './src/presentation/container/MyFavourite/ItemMyFavourite/ItemTypeOfTravelMyFavourite';
import ItemExploreMyFavourite from './src/presentation/container/MyFavourite/ItemMyFavourite/ItemExploreMyFavourite';
import Profile from './src/presentation/container/Profille/Screen/Profile';
import Editprofile from './src/presentation/container/EditProfile/Screen/EditProfile';
import ViewForm from './src/presentation/container/EditProfile/Component/InputForm';
import Favourite from './src/presentation/container/Favourite/Screen/Favourite';
import ListShare from './src/presentation/container/ListShare/Screen/ListShare';
import SplashOne from './src/presentation/container/Splash/SplashOne';


const App = (): JSX.Element => {
  return (
    <SplashOne></SplashOne>
  );
};
=======
import ForgotPass from './src/presentation/container/StartScreen/Authentication/ResetPassword/ResetPassword';
import Deals from './src/presentation/container/Authorized/Sale/Deals';
import OTP from './src/presentation/container/StartScreen/Authentication/SendOTP/OTP';
import ResetPass from './src/presentation/container/StartScreen/Authentication/ChangePassword/ChangePassword';
import SplashOne from './src/presentation/container/StartScreen/SplashScreen/SplashOne/SplashOne';
import SplashTwo from './src/presentation/container/StartScreen/SplashScreen/SplashTwo/SplashTwo';
import SplashThree from './src/presentation/container/StartScreen/SplashScreen/SplashThree/SplashThree';
import Hotel from './src/presentation/container/Authorized/Service/TabBooking/BookHotel/Hotel';
import Plane from './src/presentation/container/Authorized/Service/TabBooking/BookPlane/Plane';
import Train from './src/presentation/container/Authorized/Service/TabBooking/BookHotel/Hotel';
import SplashStackNavigation from './src/presentation/navigation/SplashStackNavigation';
import AuthenticationNavigation from './src/presentation/navigation/AuthenticationNavigation';
import Login from './src/presentation/container/StartScreen/Authentication/Login/Login';
import Register from './src/presentation/container/StartScreen/Authentication/Register/Register';
import Booking from './src/presentation/container/Authorized/Service/Booking';
import ChangePassword from './src/presentation/container/StartScreen/Authentication/ChangePassword/ChangePassword';
import ResetPassword from './src/presentation/container/StartScreen/Authentication/ResetPassword/ResetPassword';
import AuthorizedBottomNavigation from './src/presentation/navigation/AuthorizedBottomNavigation';
import ItemBottomHome from './src/presentation/component/Items/ItemBottomHome';
import Social from './src/presentation/container/Authorized/Social/Social';
import Profile from './src/presentation/container/Authorized/Account/Profile/Profile';
import ItemCenterContent from './src/presentation/container/Authorized/Account/Profile/Component/ItemCenterContent';
import Editprofile from './src/presentation/container/Authorized/Account/Profile/EditProfile';
import DetailTour from './src/presentation/container/Authorized/Service/TabBooking/BookTour/DetailTour';
import DetailSocial from './src/presentation/container/Authorized/Social/DetailSocial';
function App(): JSX.Element {
  return (
    // <OTP/>
    // <SplashOne/>
    // <SplashTwo/>
    // <SplashThree/>
    // <Deals/>
    // <ForgotPass/>
    // <MyFavourite/>
    // <OTP/>
    // <Profile/>
    // <ResetPass/>
    // <Hotel/>
    // <Plane/>
    // <Train/>
    // <SplashStackNavigation/>
    // <AuthenticationNavigation/>
    // <Login/>
    // <Register/>
    // <Social/>
    // <Booking/>
    // <ChangePassword/>
    // <ResetPassword/>
    // <OTP/>
    // <Editprofile></Editprofile>
    // <DetailTour></DetailTour>
    <DetailSocial></DetailSocial>

  ); 
}

>>>>>>> thong
export default App;
