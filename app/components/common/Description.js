import React from "react";
import {Text } from "react-native";

const Description = ({ children, numberOfLines = 2, size = 17, style }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[{ fontWeight: "400",color: '#424242', fontSize: size }, style]}
    >
      {children}
    </Text>
  );
};

export default Description;
