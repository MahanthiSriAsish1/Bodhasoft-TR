import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';

/**
 * PlacementScreen Component
 * Renders the placements page displaying alumni profiles and company logos.
 * @returns {JSX.Element} PlacementScreen component
 */
const PlacementScreen = () => {
  // Array of company logo images
  const images = [
    require('../assets/p1.png'),
    require('../assets/p2.png'),
    require('../assets/p3.png'),
    require('../assets/p4.png'),
    require('../assets/p5.png'),
    require('../assets/p6.png'),
    require('../assets/p7.png'),
    require('../assets/p8.png'),
    require('../assets/p9.png'),
    require('../assets/p10.png'),
    require('../assets/p11.png'),
    require('../assets/p12.png'),
  ];

  // Array of alumni profiles
  const profiles = [
    {
      name: 'John Doe',
      role: 'Java Developer',
      imageSource: require('../assets/james.png'),
      companyLogo: require('../assets/sunmicro.png'),
      paragraph: 'He left Sun Microsystems on April 2, 2010, after it was acquired by the Oracle Corporation, citing reductions in pay, status, and decision-making ability, along with change of role and ethical challenges',
    },
    {
      name: 'Guido van Rossum',
      role: 'Python Developer',
      imageSource: require('../assets/guido.png'),
      companyLogo: require('../assets/google.png'),
      paragraph: 'From 2005 to December 2012, Van Rossum worked at Google, where he spent half of his time developing the Python language. At Google, he developed Mondrian, a web-based code review system written in Python and used within the company.',
    },
    // Add more profiles as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.placement}>PLACEMENTS</Text>
        <Text style={styles.h1}>Our Alumni Are Placed In</Text>
        <Image
          source={require('../assets/underline.png')}
          style={styles.underlineimage}
        />
        <Text style={styles.paragraph}>
          The value we add at BodhaSoft outweighs the investment you make here.
          We aspire to impart industry knowledge at affordable charges and ensure that you achieve your dream job.
        </Text>
        <View style={styles.grid}>
          {images.map((image, index) => (
            <View key={index} style={styles.box}>
              <Image 
                source={image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Get In Touch</Text>
          <Text style={styles.cardText}>Info@bodhasoft.com</Text>
        </View>
        <Text style={styles.h1}>What Our Students Have To Say</Text>
        <Image
          source={require('../assets/underlinedown.png')}
          style={styles.underlineimagedown}
        />
        <Text style={styles.paragraph2}>
          BodhaSoft alumni have secured attractive packages, at entry-level as well as experienced hires with industry giants.
          On cracking multiple competitive tests, BodhaSoft alumni have proudly secured an average package of 6 Lakhs per annum as of 2022.
          Our efforts, at the most affordable prices, have resulted in dream offers, which we are excited to offer every tech aspirant who opts for BodhaSoft.
        </Text>
        <ScrollView horizontal>
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  placement: {
    fontSize: 20,
    color: '#706976',
    marginBottom: 20,
    textAlign: 'center',
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
    textAlign: 'center',
  },
  underlineimage: {
    alignSelf: 'center',
    width: 150,
    marginTop: -20,
    resizeMode: 'contain',
  },
  underlineimagedown: {
    alignSelf: 'center',
    width: 250,
    marginTop: -50,
    resizeMode: 'contain',
  },
  paragraph: {
    color: '#706976',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
    textAlign: 'justify'
  },
  paragraph2: {
    color: '#706976',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: -35,
    marginBottom: 20,
    textAlign: 'justify'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  image: {
    width: '90%',
    height: '100%',
  },
  card: {
    backgroundColor: '#6E37F9',
    height: 150,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    shadowColor: '#6E37F9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default PlacementScreen;
