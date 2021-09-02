import React from "react";
import { Text } from "native-base";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

import ScreenWrapper from "../../components/ScreenWrapper";
import Counter from "../../components/Counter";

function HomeScreen({navigation}) {
  return (
    <ScreenWrapper headerTitle="Counter App">
      <Counter />
      <Text textAlign="center" mt={4} color={Colors.primary}
       onPress={() => navigation.navigate('Details')}>Go to details</Text>
    </ScreenWrapper>
  );
}

export default HomeScreen;
