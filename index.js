import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';

// Theme object
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#306060',
//     accent: '#82afb0',
//     background: '#f6f6f6',
//     surface: '#cad4d8',
//   },
// };

export default function Main() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
