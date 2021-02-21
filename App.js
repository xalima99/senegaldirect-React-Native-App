import React, {useEffect} from 'react';
import {StyleSheet, Alert, Linking} from 'react-native';
import Screen from './app/components/common/Screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, persistor} from './app/services/ducks/store';
import {PersistGate} from 'redux-persist/integration/react';
import {DawerNavigator} from './app/navigation/AppNavigator';

import Theme from './app/config/Theme';

const App = () => {
  return (
    <Screen>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={Theme}>
            <DawerNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
