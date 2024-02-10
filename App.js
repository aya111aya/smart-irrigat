import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcomscreen';
import PlanteListScreen from './PlantesListeScreen';
import ChoixPlanteScreen from './ChoixPlanteScreen';
import ConnexionBluetoothScreen from './ConnectionBluetoothScreen';
import DetailsPlante from './DetailsPlante';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PlanteList" component={PlanteListScreen} />
        <Stack.Screen name="ChoixPlante" component={ChoixPlanteScreen} />
        <Stack.Screen name="ConnexionBluetooth" component={ConnexionBluetoothScreen} />
        <Stack.Screen name="DetailsPlante" component={DetailsPlante} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
