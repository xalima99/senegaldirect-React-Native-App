import React from 'react';
import {StyleSheet} from 'react-native';
import Screen from './app/components/common/Screen';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './app/services/ducks/store';

import {DawerNavigator} from './app/navigation/AppNavigator';

import Theme from './app/config/Theme';

const App = () => {
  return (
    <Screen>
      <Provider store={store}>
        <NavigationContainer theme={Theme}>
          <DawerNavigator />
        </NavigationContainer>
      </Provider>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
