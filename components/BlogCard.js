import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

/**
 * BlogCard Component
 * Renders a card displaying blog information.
 * @param {string} title - The title of the blog.
 * @param {string} imageUrl - The URL of the blog image.
 * @returns {JSX.Element} - BlogCard component
 */
const BlogCard = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} resizeMode="cover" />
          <View style={styles.shadowOverlay} />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Read more...</Text>
      </TouchableOpacity>
    </View>
  );
};

// Get window width for responsive design
const { width: windowWidth } = Dimensions.get('window');
const cardWidth = windowWidth * 0.9;

// Styles
const styles = StyleSheet.create({
  card: {
    height: 450,
    width: cardWidth,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#6E37F9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '95%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  shadowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.3,
    borderRadius: 10,
    shadowColor: '#6E37F9',
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  textContainer: {
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    paddingTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    backgroundColor: '#6E37F9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default BlogCard;
