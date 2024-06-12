/*
 * Import necessary modules from React Native
 */
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Platform } from 'react-native';

/*
 * AboutCard Component
 * This component displays a card with a title, an underline, an image, and a description paragraph.
 * 
 * Props:
 * - title (string): The title text of the card.
 * - imageUrl (string): The source path of the image.
 * - description (string): The description text to be displayed in the card.
 */
const AboutCard = ({ title, imageUrl, description }) => {
  // Calculate the height of the paragraph text
  const paragraphHeight = description ? description.split(' ').length / 10 * 10 : 0;

  return (
    <View style={[styles.card, { marginVertical: 20 }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.blackText}>
          {title.split(' ')[0]} {/* Display the first word in black */}
        </Text>
        <Text style={styles.redText}>
          {title.split(' ').slice(1).join(' ')} {/* Display the rest of the title in red */}
        </Text>
      </View>
      <Image source={require('../assets/underline.png')} style={styles.underline} resizeMode="contain" />
      <View style={[styles.imageContainer, Platform.OS === 'ios' ? styles.shadowIOS : styles.shadowAndroid]}>
        <Image source={imageUrl} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.paragraph}>{description}</Text>
    </View>
  );
};

// Get screen dimensions for responsive design
const { width: windowWidth } = Dimensions.get('window');
const cardWidth = windowWidth * 0.9; // 90% of the screen width for the card

/*
 * Styles for the AboutCard component
 */
const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  blackText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  redText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  underline: {
    width: '80%',
    height: 15,
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '70%',
    height: 250,
    borderRadius: 10,
  },
  paragraph: {
    textAlign: 'justify',
  },
  shadowIOS: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  shadowAndroid: {
    elevation: 5,
  },
});

export default AboutCard;
