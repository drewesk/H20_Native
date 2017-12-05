import { StackNavigator } from 'react-navigation';

import Profile from './components/Profile';
import SplashPage from './components/SplashPage';
import WebMap from './components/WebMap';

const App = StackNavigator({
  Home: { screen: SplashPage },
  Profile: { screen: Profile },
  WebMap: { screen: WebMap }
});

export default App;
