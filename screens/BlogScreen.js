import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import BlogCard from '../components/BlogCard';

/**
 * BlogScreen Component
 * Renders a screen displaying blogs and news.
 * @returns {JSX.Element} - BlogScreen component
 */
const BlogScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Frame Section */}
        <View style={styles.frame}>
          <Text style={styles.frameText}>Blogs & News</Text>
        </View>

        {/* Blog Cards Section */}
        <BlogCard title="Companies And Their Placement Patterns" imageUrl={require("../assets/b1.png")} />
        <BlogCard title="A Quick Guide to Secure Your Dream Jobs" imageUrl={require("../assets/b2.png")} />
        <BlogCard title="Enhance Your Technical Knowledge with Chatgpt : The Ultimate Tool For Professionals And Students" imageUrl={require("../assets/b3.png")} />
      </ScrollView>

      {/* Footer Section */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View> */}
    </SafeAreaView>
  );
};

// Styles
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
  frame: {
    height: 70,
    width: '100%',
    backgroundColor: '#6E37F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 10,
  },
  frameText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BlogScreen;
