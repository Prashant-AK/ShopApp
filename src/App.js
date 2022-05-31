import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Home, SignIn, SignUp} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Button} from 'native-base';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button onPress={() => navigation.push('Details')}>
//         {' '}
//         Go to Details again
//       </Button>
//       <Button onPress={() => navigation.popToTop()}>
//         Go back to first screen in stack
//       </Button>
//     </View>
//   );
// }
function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const App = () => {
  return (
    // <>
    //   <Home />

    //   {/* <SignUp /> */}
    // </>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
