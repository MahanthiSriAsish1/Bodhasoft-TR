import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CPlus() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E9D6F5', // Light purple background
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    topBox: {
      width: '90%',
      backgroundColor: '#FFFFFF', // White background for contrast
      borderRadius: 20,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    // heading: {
    //   fontSize: 24,
    //   fontWeight: 'bold',
    //   color: '#000000', // Black text
    //   marginBottom: 0,
    // },
    // circleContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginVertical: 10,
    // },
    // circle: {
    //   width: 50, // Diameter of 1 cm in pixels (assuming 1 cm = 37.8 px at 96 DPI)
    //   height: 50,
    //   borderRadius: 45, // Half of the width/height for a perfect circle
    //   backgroundColor: '#EE82ED', // Violet
    //   marginRight: 10,
    // },
    textContainer: {
      flexDirection: 'column',
    },
    subHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#EE82ED', // Violet text
    },
    description: {
      fontSize: 20,
      color: '#000000', // Black text
    },
    instructionsHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000', // Black text
      marginBottom: 10,
    },
    instruction: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginVertical: 5,
      fontSize: 12,
    },
    bulletPoint: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000000', // Black bullet point
      marginRight: 5,
    },
    instructionText: {
      fontSize: 16,
      color: '#000000', // Black text
      flexShrink: 1,
    },
    button: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#700CBC', // Violet background
      borderRadius: 5,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 18,
      color: '#FFFFFF', // White text
    },
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.topBox}>
        <Text style={styles.heading}>C programming test</Text>
        <View style={styles.circleContainer}>
          <View style={styles.circle} />
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>15</Text>
            <Text style={styles.description}>Multiple choice questions</Text>
          </View>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circle} />
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>10 mins</Text>
            <Text style={styles.description}>Exam Time Duration</Text>
          </View>
        </View>
        <View style={styles.circleContainer}>
          <View style={styles.circle} />
          <View style={styles.textContainer}>
            <Text style={styles.subHeading}>80%</Text>
            <Text style={styles.description}>Pass Mark</Text>
          </View>
        </View>
      </View> */}
      <View style={styles.topBox}>
        <Text style={styles.instructionsHeading}>Instructions</Text>
        <View style={styles.instruction}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.instructionText}>Ensure a quiet, private space with no one else present during the exam</Text>
        </View>
        <View style={styles.instruction}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.instructionText}>Ensure a quiet, private space with no one else present during the exam</Text>
        </View>
        <View style={styles.instruction}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.instructionText}>Ensure a quiet, private space with no one else present during the exam</Text>
        </View>
        <View style={styles.instruction}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.instructionText}>Ensure a quiet, private space with no one else present during the exam</Text>
        </View>
        <View style={styles.instruction}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.instructionText}>Ensure a quiet, private space with no one else present during the exam</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CPlusTestpage')}>
          <Text style={styles.buttonText}>Start test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}