import { StackNavigator } from 'react-navigation';

import Profile from './components/Profile';
import SplashPage from './components/SplashPage';

const App = StackNavigator({
  Home: { screen: SplashPage },
  Profile: { screen: Profile },
});

export default App;
