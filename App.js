import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Search from './components/git-search/load'
import Display from './components/git-view/View'
import {Card,} from 'react-native-paper'
import { Provider} from 'react-redux'
import {store} from './components/redux/store'
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
<Search/>

      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';
// import App from './src/App';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);
