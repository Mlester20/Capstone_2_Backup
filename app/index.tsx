import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LiveStockScreen from './LiveStockScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LiveStockScreen" component={LiveStockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;