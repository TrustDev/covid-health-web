// @generated: @expo/next-adapter@2.1.45
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);