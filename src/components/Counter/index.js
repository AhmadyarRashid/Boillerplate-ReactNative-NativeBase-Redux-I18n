import React from "react";
import { View, Text, Button } from "native-base";
import { compose } from 'redux';

import Colors from '../../colors';
import connect from './connect';

function Counter({count, changeCount, ...props}) {
  return (
    <React.Fragment>
      <Text
        color="white"
        fontWeight="bold"
        mt={4}
        textAlign="center">Counter App</Text>
      <Text
        mt={4}
        color="white"
        textAlign="center">{count}</Text>
      <View flexDirection="row" justifyContent="space-around">
        <Button
          backgroundColor={Colors.red}
          onPress={() => changeCount(count - 1)}
          mt={4}>Decrement</Button>
        <Button
          backgroundColor={Colors.green}
          onPress={() => changeCount(count + 1)}
          mt={4}>Increment</Button>
      </View>
    </React.Fragment>
  );
}

export default compose(connect)(Counter);
