import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Colors from '../Utils/Common//Colors';
import HomePage from '../Screens/HomePage/homepage';
import DetailsPage from '../Screens/DetailsPage/detailspage';

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" options={{ title: 'My News' }} component={HomePage} />
          <Stack.Screen name="DetailsPage" options={{ headerTintColor: Colors.Black }} component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigator;