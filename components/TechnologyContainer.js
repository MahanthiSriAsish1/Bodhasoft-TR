/*
 * Import necessary modules from React Native
 */
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

/*
 * TechnologyContainer Component
 * This component displays a technology card with an image and a text label.
 * 
 * Props:
 * - imageSource (string): The source path of the technology image.
 * - technology (string): The name of the technology.
 */
const TechnologyContainer = ({ imageSource, technology }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.technologyText}>{technology}</Text>
      </View>
    </View>
  );
};

/*
 * Styles for the TechnologyContainer component
 */
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    height: 20,
    backgroundColor: '#6E37F9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevent text overflow
  },
  technologyText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default TechnologyContainer;
