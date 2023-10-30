import React, { FunctionComponent } from 'react';
import Test from './src/presentation/container/Test';

import Plane from './src/presentation/container/screens/Plane';
import Hotel from './src/presentation/container/screens/Hotel';
import ItemListTrain from './src/presentation/container/screens/ItemListTrain';
import { Text } from '@rneui/base';
import Train from './src/presentation/container/screens/Train';
import Booking from './src/presentation/container/screens/Booking';
import BookingTrain from './src/presentation/container/screens/bookTrain';
import BookingPlane from './src/presentation/container/screens/bookPlane';
import MainHome from './src/presentation/container/screens/MainHome';
import IntroduceScreen from './src/presentation/container/screens/introduceScreen';
import HisRating from './src/presentation/container/screens/hisRating';
import ItemWaitRating from './src/presentation/container/screens/hisRating/components/waitRating/ItemWaitRating';
import WaitRating from './src/presentation/container/screens/hisRating/components/waitRating';
import DoneRating from './src/presentation/container/screens/hisRating/components/doneRating';



const App: FunctionComponent = ()=> {
  return (
    
    <HisRating/>
   
  );
};

export default App;
