import { StackNavigator } from 'react-navigation';

import Profile from './components/Profile';
import SplashPage from './components/SplashPage';
import WebMap from './components/WebMap';
import WaterUsage from './components/WaterUsage';
import BillData from './components/BillData';

const App = StackNavigator({
  Home: { screen: SplashPage },
  Profile: { screen: Profile },
  WebMap: { screen: WebMap },
  WaterUsage: { screen: WaterUsage },
  BillData: { screen: BillData }
});

export default App;
