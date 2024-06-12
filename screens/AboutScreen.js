/*
 * Import necessary modules and components from React Native
 */



import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Dimensions, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

// Import custom components
import AboutCard from '../components/AboutCard';
import ChooseCard from '../components/ChooseCard';
import TechnologyContainer from '../components/TechnologyContainer';

/*
 * AboutScreen Component
 * This component displays information about the application, including various 
 * sections like About Us, Our Mission, Our Expertise, Why Choose Us, Technologies Offered, 
 * and a subscription form.
 */
const AboutScreen = () => {
  const [email, setEmail] = useState('');

  // Array of technology data
  const technologies = [
    { imageUrl: require("../assets/html.png"), technology: "HTML" },
    { imageUrl: require("../assets/java.png"), technology: "JAVA" },
    { imageUrl: require("../assets/mysql.png"), technology: "MySQL" },
    { imageUrl: require("../assets/bigdata.png"), technology: "Big Data Hadoop" },
    { imageUrl: require("../assets/python.png"), technology: "Python" },
    { imageUrl: require("../assets/js.png"), technology: "JS" },
    { imageUrl: require("../assets/mongodb.png"), technology: "Mongo DB" },
    { imageUrl: require("../assets/react.png"), technology: "React" },
    { imageUrl: require("../assets/nodejs.png"), technology: "Node JS" },
    { imageUrl: require("../assets/angular.png"), technology: "Angular" },
    { imageUrl: require("../assets/c.png"), technology: "C Language" },
  ];

  // Function to handle subscription
  const handleSubscribe = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else {
      // Handle subscription
      Alert.alert('Success', `Subscribed with email: ${email}`);
      // Clear the email field
      setEmail('');
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return pattern.test(email);
  };

  // Render component
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Frame Section */}
        <View style={styles.frame}>
          <Text style={styles.frameText}>About Us</Text>
        </View>

        {/* About Cards Section */}
        <AboutCard
          title="About Us"
          imageUrl={require("../assets/about1.png")}
          description="Our team aspires to inspire every Trainee who chooses us. Imparting quality skills, at affordable charges being the major objective, we have a truly committed team comprising highly Reputed and Certified Industry Experts as trainers. Concepts are taught with the utmost professionalism, where the trainees are also exposed to Industry level Coding standards and Scenarios."
        />
        <AboutCard
          title="Our Mission"
          imageUrl={require("../assets/about2.png")}
          description="We are aspiring to prove that every Trainee irrespective of his background, academic percentage or work experience can learn and execute programming in any of the Technical language of his choice. Our Mission is to provide the best quality technical + Cognitive training with high level practical exposure so as to improve knowledge and also thought process which might end the dreaded 'By-Heart technique' in education."
        />
        <AboutCard
          title="Our Expertise"
          imageUrl={require("../assets/about3.png")}
          description="We have Certified Professionals in technologies like - Salesforce , Java , Microsoft Azure , ITIL etc. The trainers have extensive experience in coaching & follow best trainee friendly procedures to enhance the outreach of subject to every trainee irrespective of his knowledge, confidence and communication."
        />
        <AboutCard
          title="What Makes us Unique ?"
          imageUrl={require("../assets/about4.png")}
          description="At Bodha Soft, we consider each trainee as a new member to our family. Apart from the technical part of coaching, we aim at mental well-being and motivation, which would drive one to success naturally. So, your holistic development and improvement is our target."
        />

        {/* Why Choose Us Section */}
        <Text style={styles.h1}>Why Choose Us?</Text>
        <Image source={require('../assets/underlinedown.png')} style={styles.underline} resizeMode="contain" />
        <ScrollView horizontal>
          <ChooseCard
            title="Coaching Right from Basics"
            imageSource={require("../assets/c1.png")}
            description="Basics are the building blocks of Success. At Bodha Soft, Experts in every course lay a strong foundation and then advance to the next levels."
          />
          <ChooseCard
            title="Coaching from Certified Industry Experts"
            imageSource={require("../assets/c2.png")}
            description="Coaching becomes fruitful, only when it is delivered by the best resource and guess what? We have them! Our teams are some of the best, finest Certified Experts in the country."
          />
          <ChooseCard
            title="Interactive Learning"
            imageSource={require("../assets/c3.png")}
            description="We prefer Live 2 - Way interactions to catch your pulse and train you accordingly."
          />
          <ChooseCard
            title="Live Practical Exposure"
            imageSource={require("../assets/c4.png")}
            description="To help you stand out in the market, our Certified Experts will expose you to the latest industry trends and technologies including competitions nation-wide."
          />
        </ScrollView>

        {/* Technology Section */}
        <Text style={styles.h1}>Technology we Offer</Text>
        <Image source={require('../assets/underline.png')} style={styles.underline} resizeMode="contain" />
        <Text style={styles.paragraph}>Join our Bodha Up skill Program and get trained by Certified Industry Experts on Live.</Text>
        <ScrollView horizontal>
          {technologies.map((tech, index) => (
            <TechnologyContainer
              key={index}
              imageSource={tech.imageUrl}
              technology={tech.technology}
            />
          ))}
        </ScrollView>

        {/* Subscribe Section */}
        <View style={styles.subscribeContainer}>
          <Text style={styles.h3}>Subscribe To Our Newsletter</Text>
          <Text style={styles.paragraph}>Enter your email address to register to our newsletter subscription</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={handleSubscribe}
            >
              <Text style={styles.subscribeButtonText}>Subscribe {'>>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const { width: windowWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  frame: {
    width: windowWidth,
    height: 70,
    backgroundColor: '#6E37F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  frameText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  underline: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    height: 25,
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'justify',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  subscribeContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:10,
    marginBottom: 20,
  },
  subscribeButton: {
    backgroundColor: '#6E37F9',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
``
