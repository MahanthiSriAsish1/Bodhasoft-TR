import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

/**
 * FAQItem Component
 * Renders a single FAQ item with a question and an optional answer that can be toggled.
 * @param {Object} props - The component props
 * @param {string} props.question - The question text
 * @param {string} props.answer - The answer text
 * @param {number} props.index - The index of the FAQ item
 * @param {number} props.expandedIndex - The index of the currently expanded FAQ item
 * @param {Function} props.setExpandedIndex - Function to update the expanded index state
 * @returns {JSX.Element} FAQItem component
 */
const FAQItem = ({ question, answer, index, expandedIndex, setExpandedIndex }) => {
  /**
   * Toggles the expansion state of the FAQ item.
   */
  const toggleExpansion = () => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={[styles.container, expandedIndex === index ? styles.expandedContainer : null]}>
      {/* Question container */}
      <TouchableOpacity onPress={toggleExpansion} style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>

      {/* Answer container */}
      {expandedIndex === index && (
        <View style={styles.answerContainer}>
          <View style={styles.line} />
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

// Get window width
const { width: windowWidth } = Dimensions.get('window');
// Calculate width for FAQ item
const questionBoxWidth = windowWidth * 0.9;

// Styles
const styles = StyleSheet.create({
  container: {
    width: questionBoxWidth,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 3, // Add elevation for drop shadow effect on Android
    shadowColor: '#000', // Add shadow properties for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  expandedContainer: {
    marginBottom: 20, // Increase marginBottom when expanded
  },
  questionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answerContainer: {
    padding: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#4C4C4C',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQItem;
