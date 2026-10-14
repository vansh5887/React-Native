/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, StatusBar, StyleSheet, useColorScheme, View,} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import FlatListExample from './FlatListExample';
import LoginScreen from "./components/LoginScreen"
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
  style={[
    style.container,
    { paddingTop: safeAreaInsets.top },
  ]}
>
  
  <LoginScreen/>
  {/* <FlatListExample /> */}
</View>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#242E41',
    flex: 1,
  },
});