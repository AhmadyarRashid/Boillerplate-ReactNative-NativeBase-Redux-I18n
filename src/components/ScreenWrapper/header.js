import React from "react";
import { Box, Text } from "native-base";

function Header({title}) {
  return (
    <Box borderBottomColor="grey" borderBottomWidth={0.5} p={4} mb={4}>
      <Text fontSize={18} fontWeight="bold" color="white" textAlign="center">{title}</Text>
    </Box>
  );
}

export default Header;
