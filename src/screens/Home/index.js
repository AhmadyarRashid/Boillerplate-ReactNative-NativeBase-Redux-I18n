import React from "react";
import { Text } from "native-base";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import {useTranslation} from 'react-i18next'

import ScreenWrapper from "../../components/ScreenWrapper";
import Counter from "../../components/Counter";

function HomeScreen({navigation}) {
  const { t } = useTranslation();
  return (
    <ScreenWrapper headerTitle={t("common:counterApp")}>
      <Counter />
      <Text textAlign="center" mt={4} color={Colors.primary}
       onPress={() => navigation.navigate('Details')}>{t("common:goToDetails")}</Text>
    </ScreenWrapper>
  );
}

export default HomeScreen;
