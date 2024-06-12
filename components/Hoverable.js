import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Hoverable Component
 * @param {Object} props - Component props
 * @param {Function} props.children - Function to render children components
 * @returns {JSX.Element} - Hoverable component
 */
const Hoverable = ({ children }) => {
  // State hook to track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View
      style={isHovered ? styles.hovered : styles.notHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Render children with hover state */}
      {children(isHovered)}
    </View>
  );
};

// Styles for hovered and notHovered states
const styles = StyleSheet.create({
  hovered: {
    backgroundColor: '#9712FF',
    shadowColor: '#9712FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  notHovered: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default Hoverable;
