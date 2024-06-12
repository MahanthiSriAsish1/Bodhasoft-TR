import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MockInterview from './screens/MockInterview';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import BlogScreen from './screens/BlogScreen';
import PlacementScreen from './screens/Placements';
import FAQScreen from './screens/FAQ';

// Main application component
const App = () => {
  // State to manage the current page index
  const [currentPage, setCurrentPage] = useState(0);

  // Array of pages to be rendered
  const pages = [
    <MockInterview />,
    <AboutScreen />,
    <ContactScreen />,
    <BlogScreen />,
    <PlacementScreen />,
    <FAQScreen />
  ];

  // Function to navigate to the next page
  const navigateForward = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to navigate to the previous page
  const navigateBackward = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render the app UI
  return (
    <SafeAreaView style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {/* Page container to render the current page */}
      <View style={styles.pageContainer}>
        {pages[currentPage]}
      </View>

      {/* Footer section with navigation buttons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateBackward} style={styles.navButton}>
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateForward} style={styles.navButton}>
          <Text style={styles.navButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Stack navigator for screen navigation
const Stack = createStackNavigator();

// AppWrapper component to handle navigation
const AppWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="MockInterview" component={MockInterview} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Placement" component={PlacementScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for the application
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
  pageContainer: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
  navButton: {
    backgroundColor: '#6E37F9',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AppWrapper;
