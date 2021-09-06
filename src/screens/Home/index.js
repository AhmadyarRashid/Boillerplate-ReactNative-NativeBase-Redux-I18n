import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next"
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./home";
import SettingScreen from "./setting";

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

          return <Icon name={iconName} size={20} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: t('navigate:home') }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ tabBarLabel: t('navigate:settings') }}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
