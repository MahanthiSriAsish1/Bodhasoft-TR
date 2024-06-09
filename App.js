import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.home} source={require('./assets/home.png')} />
          <Image style={styles.not} source={require('./assets/bell.jpg')} />
        </View>
        <View style={styles.body}>
          <Button
            title="Workshoparea"
            onPress={() => navigation.navigate('Workshop')}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => console.log("FAQ's")} style={styles.footerItem}>
            <Text style={styles.fotext}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Blogs")} style={styles.footerItem}>
            <Text style={styles.fotext}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Profile")} style={styles.footerItem}>
            <Text style={styles.fotext}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Placements")} style={styles.footerItem}>
            <Text style={styles.fotext}>Placements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Mentoring")} style={styles.footerItem}>
            <Text style={styles.fotext}>Mentoring</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function WorkshopareaScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.background}
    >
      <View style={styles.works}>
        <View style={styles.header}>
          <Image style={styles.home} source={require('./assets/home.png')} />
          <Image style={styles.not} source={require('./assets/bell.jpg')} />
        </View>
        <View style={styles.containerone}>
          <Text style={styles.workt}>Workshop Area</Text>
          <TouchableOpacity style={styles.button}>
            <ImageBackground
              source={require('.//assets/poll.png')}
              style={styles.imageButton}
            />
            <View style={styles.overlay}>
              <Text style={styles.Text}>POLL DIVISION</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <ImageBackground
              source={require('.//assets/code1.png')}
              style={styles.imageButton1}
            />
            <View style={styles.overlay}>
              <Text style={styles.Text}>CODING ENVIRONMENT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => console.log("FAQ's")} style={styles.footerItem}>
            <Text style={styles.fotext}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Blogs")} style={styles.footerItem}>
            <Text style={styles.fotext}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Profile")} style={styles.footerItem}>
            <Text style={styles.fotext}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Placements")} style={styles.footerItem}>
            <Text style={styles.fotext}>Placements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Mentoring")} style={styles.footerItem}>
            <Text style={styles.fotext}>Mentoring</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Workshop" component={WorkshopareaScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row-reverse"
  },
  works: {
    flex: 1,
  },
  t: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    marginLeft: 10,
    height: 50,
    width: 50
  },
  not: {
    marginRight: 0,
    height: 50,
    width: 50
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 20
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'purple',
    paddingVertical: 10,
  },
  fotext: {
    color: "white"
  },
  containerone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent', 
    paddingHorizontal: 20 
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginLeft: -110,
  },
  button2: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginRight: -110,
  },
  imageButton: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
    
  },
  imageButton1: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    alignSelf: 'center',
    
  },
  Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
  },
  workt: {
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'top',
    position: 'absolute',
    top: 0,
    paddingTop: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(128, 0, 128, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
