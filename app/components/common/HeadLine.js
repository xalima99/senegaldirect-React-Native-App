import React from "react";
import { StyleSheet,View } from "react-native";



import Title from "../common/Title";
import colors from "../../config/colors";

const HeadLine = ({ children, name,style }) => {
  return (
   
      <View style={[styles.container,style]}>
        
         
     
        <Title size={20} style={styles.headline}>
          {children}
        </Title>
      </View>

  );
};

export default HeadLine;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 8,

   
  },
  headline: {
    margin: 5,
    color: colors.primary,
    fontWeight: "400",
  },
});
