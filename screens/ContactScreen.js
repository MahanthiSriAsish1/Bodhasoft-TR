// Import necessary modules and components from React Native and third-party libraries
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Linking,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hoverable from '../components/Hoverable';

// ContactScreen Component
const ContactScreen = () => {
  // State hooks for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  // Handler to open email client
  const handleEmailPress = () => {
    Linking.openURL('mailto:info@bodhasoft.com');
  };

  // Handler to open social media URLs
  const handleSocialPress = (url) => {
    Linking.openURL(url);
  };

  // Handler for form submission
  const handleFormSubmit = () => {
    if (!name || !email || !mobile || !message) {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else if (!validateMobile(mobile)) {
      Alert.alert('Error', 'Please enter a valid mobile number');
    } else {
      // Submit the form data
      Alert.alert('Success', 'Message submitted successfully');
      // Clear the form fields
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Function to validate mobile number format
  const validateMobile = (mobile) => {
    const pattern = /^[0-9]{10}$/;
    return pattern.test(mobile);
  };

  // List of social media icons with URLs and colors
  const socialIcons = [
    { name: 'linkedin', url: 'https://www.linkedin.com', color: '#0077b5' },
    { name: 'instagram', url: 'https://www.instagram.com', color: '#E1306C' },
    { name: 'facebook', url: 'https://www.facebook.com', color: '#1877F2' },
  ];

  // Handler for newsletter subscription
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View> */}
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Frame Section */}
        <View style={styles.frame}>
          <Text style={styles.frameText}>Contact Us</Text>
        </View>
        
        {/* Help Text Section */}
        <View style={styles.helpTextContainer}>
          <Text style={styles.h1}>Looking for help? Fill the form and start a new adventure.</Text>
        </View>
        
        {/* Address Section */}
        <View style={styles.addressContainer}>
          <Text style={styles.h1}>Address</Text>
          <Text style={styles.paragraph}>
            Bodha Software Technologies Private Limited, Dr no.23A-6-7, first floor, GK complex, Behind RR-Peta park, Sankaramatam Road, RR-Peta, Eluru. 534002
          </Text>
        </View>
        
        {/* Email Section */}
        <View style={styles.defaultContainer}>
          <Text style={styles.h1}>Email</Text>
          <Text style={styles.paragraph} onPress={handleEmailPress}>
            info@bodhasoft.com
          </Text>
        </View>
        
        {/* Social Media Icons Section */}
        <View style={styles.socialContainer}>
          {socialIcons.map((icon, index) => (
            <Hoverable key={index}>
              {(isHovered) => (
                <TouchableOpacity
                  onPress={() => handleSocialPress(icon.url)}
                  style={[
                    styles.socialIcon,
                    isHovered && styles.socialIconHovered,
                  ]}
                >
                  <Icon
                    name={icon.name}
                    size={30}
                    color={isHovered ? '#FFFFFF' : icon.color}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
          ))}
        </View>
        
        {/* Contact Form Section */}
        <View style={styles.defaultContainer}>
          <Text style={styles.h1}>Get In Touch</Text>
          <Text style={styles.paragraph}>Share us your thought and team will connect to you back</Text>
          <TextInput
            style={[styles.input, { marginTop: 20, marginBottom: 10 }]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, { marginTop: 10, marginBottom: 10 }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, { marginTop: 10, marginBottom: 10 }]}
            placeholder="Mobile no"
            value={mobile}
            onChangeText={setMobile}
          />
          <TextInput
            style={[styles.input, { height: Math.max(100, message.split('\n').length * 20), marginTop: 10, marginBottom: 10 }]}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleFormSubmit}
          >
            <Text style={styles.submitButtonText}>Submit Message</Text>
          </TouchableOpacity>
        </View>
        
        {/* Programs Section */}
        <View style={styles.defaultContainer}>
          <Text style={styles.h1}>Our Programs</Text>
          <Text style={styles.paragraph}>College to Corporate Program</Text>
          <Text style={styles.paragraph}>Upskill Program</Text>
        </View>
        
        {/* Newsletter Subscription Section */}
        <View style={styles.defaultContainer}>
          <Text style={styles.h1}>Subscribe To Our Newsletter</Text>
          <Text style={styles.paragraph}>
            Enter your email address to register to our newsletter subscription
          </Text>
          <View style={styles.subscribeContainer}>
            <TextInput
              style={[styles.input, { marginTop: 20, marginBottom: 20, flex: 1 }]}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={handleSubscribe}
            >
              <Text style={styles.subscribeButtonText}>Subscribe</Text>
              <Icon name="arrow-right" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Footer Section */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View> */}
    </SafeAreaView>
  );
};

// Get window dimensions for responsive design
const { width: windowWidth } = Dimensions.get('window');

// Styles for the ContactScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 90,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  frame: {
    width: '100%',
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
  helpTextContainer: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  addressContainer: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  defaultContainer: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  h1: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'justify',
    marginTop: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    width: 50,
    height: 50,
  },
  socialIconHovered: {
    backgroundColor: '#9712FF',
    shadowColor: '#9712FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
  footerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#9712FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subscribeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribeButton: {
    backgroundColor: '#9712FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  subscribeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default ContactScreen;
