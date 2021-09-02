import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import Header from "./header";

function ScreenWrapper({ headerTitle, children }) {

  const isDarkMode = true; // useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Header title={headerTitle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.darker : Colors.white,
          }}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ScreenWrapper;
