import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const MockInterview = () => {
  return (
    <View style={styles.container}>
      {/* Uncomment the lines below if header and footer are needed */}
      {/* <View style={styles.header}></View> */}
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Text style={styles.text}>Mock Interview Page</Text>
      </ScrollView>
      {/* <View style={styles.footer}></View> */}
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Uncomment the styles below if header and footer are needed
  // header: {
  //   height: 90,
  //   backgroundColor: 'transparent', // Change to desired color
  // },
  bodyContainer: {
    flexGrow: 1,
    minHeight: height - 140, // Adjusted for header and footer height
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  // footer: {
  //   height: 70,
  //   backgroundColor: '', // Change to desired color
  // },
});

export default MockInterview
