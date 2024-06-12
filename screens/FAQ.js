import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FAQItem from '../components/FAQItem';

/**
 * FAQScreen Component
 * Renders a screen displaying frequently asked questions.
 * @returns {JSX.Element} FAQScreen component
 */
const FAQScreen = () => {
  // State to manage the index of the expanded FAQ item
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Frequently Asked Questions section */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.faqText}>Frequently Asked Questions</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/underline.png')} // Assuming 'underline.png' is the image asset
            style={styles.underlineImage}
          />
        </View>
        
        {/* FAQ items */}
        <FAQItem
          question="Curriculum Overview"
          answer="We provide a full 360 degree course where the curriculum being split into Basic(Theory + Competitive Coding), Cognitive and Advanced Technical to help you crack any MNC with ease."
          index={0}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
        <FAQItem
          question="What is Java?"
          answer="Platform Independence: Java programs are typically compiled to bytecode, which can be executed on any Java Virtual Machine (JVM), making Java platform-independent."
          index={1}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
        <FAQItem
          question="Tell us about Assignments?"
          answer="Daily Assignment tasks are given to students because practice is the key. It would consist of both MCQs and Coding Questions which are expected to be practiced and solved by students, at which you will excel on being consistent. For better clarifications, Recorded solutions of the same are made available."
          index={2}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
        {/* Add more FAQ items as needed */}
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
    alignItems: 'center', // Align horizontally center
  },
  faqText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  underlineImage: {
    width: 300, // Adjust width as needed
    height: 20, // Adjust height as needed
    resizeMode: 'contain',
  },
});

export default FAQScreen;
