import React from 'react';
import { Text } from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

function DetailScreen({navigation}){
  return(
    <ScreenWrapper headerTitle="Details">
      <Text color={Colors.primary} mt={4} textAlign="center"
            onPress={() => navigation.pop()}>Go to home</Text>
    </ScreenWrapper>
  )
}

export default DetailScreen;
