import React from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
