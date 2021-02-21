import React from 'react';
import List from './loadMore/List';
import { list } from './loadMore/reducers/list';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

export default function App () {

  const rootReducer = combineReducers({
    list
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <List />
      </SafeAreaView>
    </Provider>
  );
}