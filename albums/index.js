/** @format */

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
