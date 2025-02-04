import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import LiveStockScreen from './LiveStockScreen';
import GuideIngredientsScreen from './GuideIngredientsScreen';
import CreditScreen from './CreditsScreen';

const Tab = createBottomTabNavigator();

const Layout: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home-outline';
          } else if (route.name === 'LiveStockScreen') {
            iconName = 'paw-outline';
          } else if (route.name === 'GuideIngredientsScreen'){
            iconName = 'book-outline';
          } else if (route.name === 'CreditsScreen'){
            iconName = 'code-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
        },
        tabBarItemStyle: {
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="LiveStockScreen" component={LiveStockScreen} options={{ title: 'Live Stock' }} />
      <Tab.Screen name="GuideIngredientsScreen" component={GuideIngredientsScreen} options={{ title: 'Guides' }} />
      <Tab.Screen name="CreditsScreen" component={CreditScreen} options={{ title: 'Credits' }} />
    </Tab.Navigator>
  );
};

export default Layout;
