/*
 * Import necessary modules from React Native
 */
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

/*
 * ChooseCard Component
 * This component displays a card with a title, an image, and a description.
 * 
 * Props:
 * - imageSource (string): The source path of the image.
 * - title (string): The title text of the card.
 * - description (string): The description text to be displayed in the card.
 */
const ChooseCard = ({ imageSource, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

// Get screen dimensions for responsive design
const { width: windowWidth } = Dimensions.get('window');
const cardWidth = windowWidth * 0.9;
const leftMargin = windowWidth * 0.05;
const rightMargin = windowWidth * 0.05;

/*
 * Styles for the ChooseCard component
 */
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center', // Center the card horizontally
  },
  card: {
    width: cardWidth, // Fixed width
    height: 250, // Fixed height
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginLeft: leftMargin,
    marginRight: rightMargin,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 10,
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  image: {
    width: 60,
    height: 60,
  },
  description: {
    flex: 1,
    fontSize: 14,
    textAlign: 'justify',
  },
});

export default ChooseCard;
