import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

/**
 * ProfileCard Component
 * Renders a card displaying information about an alumni profile.
 * @param {Object} props - The component props
 * @param {string} props.name - The name of the alumni
 * @param {string} props.role - The role of the alumni
 * @param {string} props.imageSource - The image source of the alumni
 * @param {string} props.companyLogo - The company logo of the alumni
 * @param {string} props.paragraph - The paragraph about the alumni
 * @returns {JSX.Element} ProfileCard component
 */
const ProfileCard = ({ name, role, imageSource, companyLogo, paragraph }) => {
  const [rating, setRating] = useState(5);

  /**
   * Handles the click event on a star.
   * @param {number} index - The index of the star clicked
   */
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <View style={styles.container}>
      {/* Left content */}
      <View style={styles.leftContent}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.companyContainer}>
          <Text style={styles.placedInText}>Placed in</Text>
          <Image source={companyLogo} style={styles.companyLogo} />
        </View>
      </View>

      {/* Right content */}
      <View style={styles.rightContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        {/* Star rating */}
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity key={index} onPress={() => handleStarClick(index)}>
              <Text style={[styles.star, index < rating ? styles.selectedStar : null]}>★</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Alumni paragraph */}
        <Text style={styles.paragraph}>{paragraph}</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    height: 500,
    width: 350,
  },
  leftContent: {
    marginVertical: 30,
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  rightContent: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Adjusted border radius for circular image
  },
  companyContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  placedInText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  companyLogo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  role: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginBottom: 5,
  },
  star: {
    fontSize: 20,
    color: 'yellow',
  },
  selectedStar: {
    color: 'orange',
  },
  paragraph: {
    color: '#706976',
    fontSize: 16,
    width: 330, // Adjusted width to prevent overflow
    padding: 5,
    textAlign: 'justify',
  },
});

export default ProfileCard;
