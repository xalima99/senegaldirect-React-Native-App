import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Close = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Close;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 100,
    zIndex:101,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 25,
    marginTop: 10,
    backgroundColor: 'rgba(92,90,91,0.7)',
  },
  icon: {
    backgroundColor: 'rgba(92,90,91,0.7)',

    borderRadius: 100,
  },
});
