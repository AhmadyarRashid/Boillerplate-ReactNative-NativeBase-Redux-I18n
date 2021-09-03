import React from "react";
import { View, Text, Button } from "native-base";
import { compose } from "redux";
import { useTranslation } from "react-i18next";

import Colors from "../../colors";
import connect from "./connect";

function Counter({ count, changeCount, ...props }) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Text
        mt={4}
        color="white"
        textAlign="center">{count}</Text>
      <View flexDirection="row" justifyContent="space-around">
        <Button
          backgroundColor={Colors.red}
          onPress={() => changeCount(count - 1)}
          mt={4}>{t("common:decrement")}</Button>
        <Button
          backgroundColor={Colors.green}
          onPress={() => changeCount(count + 1)}
          mt={4}>{t("common:increment")}</Button>
      </View>
    </React.Fragment>
  );
}

export default compose(connect)(Counter);
