//App.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
//Landing Page
function HomeScreen({ navigation }) {
    return (
        <View style={styles.body}>
            <View style={styles.boxes}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TRQuestions')}>
                    <ImageBackground source={require('./assets/tr.png')} style={styles.imageBackground}>
                        <View style={styles.overlay} />
                        <Text style={styles.boxText}>TR            QUESTIONS</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('HRQuestions')}>
                    <ImageBackground source={require('./assets/hr.png')} style={styles.imageBackground}>
                        <View style={styles.overlay} />
                        <Text style={styles.boxText}>HR            QUESTIONS</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.boxes}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('MCQPracticeQuestions')}>
                    <ImageBackground source={require('./assets/mcq.png')} style={styles.imageBackground}>
                        <View style={styles.overlay} />
                        <Text style={styles.boxText}>MCQ PRACTICE QUESTIONS</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('MockInterviews')}>
                    <ImageBackground source={require('./assets/mock.png')} style={styles.imageBackground}>
                        <View style={styles.overlay} />
                        <Text style={styles.boxText}>MOCK    INTERVIEWS</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.boxSingle} onPress={() => navigation.navigate('WorkshopAreas')}>
                <ImageBackground source={require('./assets/workshop.jpg')} style={styles.imageBackground}>
                    <View style={styles.overlay} />
                    <Text style={styles.boxText}>WORKSHOP                                                    AREA</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}
//TR Questions
const TRQuestions = () => (
    <View style={styles.centeredView}>
        <Text>TR Questions Page</Text>
    </View>
);
//HR Questions
const HRQuestions = () => (
    <View style={styles.centeredView}>
        <Text>HR Questions Page</Text>
    </View>
);
//MCQ Practice Questions
const MCQPracticeQuestions = () => (
    <View style={styles.centeredView}>
        <Text>MCQ Practice Questions Page</Text>
    </View>
);
//Mock Interviews
const MockInterviews = () => (
    <View style={styles.centeredView}>
        <Text>Mock Interviews Page</Text>
    </View>
);
//Workshop Area
const WorkshopAreas = () => (
    <View style={styles.centeredView}>
        <Text>Workshop Areas Page</Text>
    </View>
);
//Notification page from Header
const Notifications = () => (
    <View style={styles.centeredView}>
        <Text>Notifications Page</Text>
    </View>
);
//FAQ page from in footer
const FAQ = () => (
    <View style={styles.centeredView}>
        <Text>FAQ Page</Text>
    </View>
);
//Blogs page from in footer
const Blogs = () => (
    <View style={styles.centeredView}>
        <Text>Blogs Page</Text>
    </View>
);
//Placements page from in footer
const Placements = () => (
    <View style={styles.centeredView}>
        <Text>Placements Page</Text>
    </View>
);
//Contact Us page from in footer
const ContactUs = () => (
    <View style={styles.centeredView}>
        <Text>Contact Us Page</Text>
    </View>
);
//About Us page from in footer
const AboutUs = () => (
    <View style={styles.centeredView}>
        <Text>About Us Page</Text>
    </View>
);
//College to Corporate in menu
const CollegeToCorporate = () => (
    <View style={styles.centeredView}>
        <Text>College to Corporate Page</Text>
    </View>
);
//Workshop in menu
const Workshop = () => (
    <View style={styles.centeredView}>
        <Text>Workshop Page</Text>
    </View>
);
//Mentoring in menu
const Mentoring = () => (
    <View style={styles.centeredView}>
        <Text>Mentoring Page</Text>
    </View>
);
//Profile in menu
const Profile = () => (
    <View style={styles.centeredView}>
        <Text>Profile Page</Text>
    </View>
);
//Logout in menu
const Logout = () => (
    <View style={styles.centeredView}>
        <Text>Logout Page</Text>
    </View>
);
//Header part
const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.home} source={require('./assets/HomeIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Notifications')}>
                <Image style={styles.notification} source={require('./assets/Notification Icon.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>BodhaSoft</Text>
            <Image style={styles.logo} source={require('./assets/bodhasoft 1.png')} />
            <TouchableOpacity style={styles.headerButton} onPress={() => navigation.openDrawer()}>
                <Image style={styles.menu} source={require('./assets/Menu Icon.png')} />
            </TouchableOpacity>
        </View>
    );
};
//Footer part
const Footer = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('FAQ')}>
                <Image style={styles.FAQ} source={require('./assets/FAQIcon.png')} />
                <Text style={styles.footerText}>FAQ's</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Blogs')}>
                <Image style={styles.Blogs} source={require('./assets/BlogsIcon.png')} />
                <Text style={styles.footerText}>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Placements')}>
                <Image style={styles.Placements} source={require('./assets/PlacementsIcon.png')} />
                <Text style={styles.footerText}>Placements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('ContactUs')}>
                <Image style={styles.Contact} source={require('./assets/ContactUsIcon.png')} />
                <Text style={styles.footerText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AboutUs')}>
                <Image style={styles.About} source={require('./assets/AboutUsIcon.png')} />
                <Text style={styles.footerText}>About Us</Text>
            </TouchableOpacity>
        </View>
    );
};
//Keerthana part for drawer menu
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <Text style={styles.drawerHeaderText}>Menu Bar</Text>
        </View>
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/home-icon.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>Home</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/ctc.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>College to Corporate</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('CollegeToCorporate')}
        />
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/work.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>Workshop Area</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('Workshop')}
        />
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/mentoring.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>Mentoring</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('Mentoring')}
        />
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/profile.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>Profile</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
            label={() => (
                <View style={styles.drawerItem}>
                    <Image source={require('./assets/logout.png')} style={styles.drawerIcon} />
                    <Text style={styles.drawerLabel}>Logout</Text>
                </View>
            )}
            onPress={() => props.navigation.navigate('Logout')}
        />
    </DrawerContentScrollView>
);
//All navigating pages
function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TRQuestions" component={TRQuestions} options={{ title: 'TR Questions' }} />
            <Stack.Screen name="HRQuestions" component={HRQuestions} options={{ title: 'HR Questions' }} />
            <Stack.Screen name="MCQPracticeQuestions" component={MCQPracticeQuestions} options={{ title: 'MCQ Practice Questions' }} />
            <Stack.Screen name="MockInterviews" component={MockInterviews} options={{ title: 'Mock Interviews' }} />
            <Stack.Screen name="WorkshopAreas" component={WorkshopAreas} options={{ title: 'Workshop Areas' }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
            <Stack.Screen name="FAQ" component={FAQ} options={{ title: 'FAQ' }} />
            <Stack.Screen name="Blogs" component={Blogs} options={{ title: 'Blogs' }} />
            <Stack.Screen name="Placements" component={Placements} options={{ title: 'Placements' }} />
            <Stack.Screen name="ContactUs" component={ContactUs} options={{ title: 'Contact Us' }} />
            <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'About Us' }} />
            <Stack.Screen name="CollegeToCorporate" component={CollegeToCorporate} options={{ title: 'College to Corporate' }} />
            <Stack.Screen name="Workshop" component={Workshop} options={{ title: 'Workshop' }} />
            <Stack.Screen name="Mentoring" component={Mentoring} options={{ title: 'Mentoring' }} />
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
            <Stack.Screen name="Logout" component={Logout} options={{ title: 'Logout' }} />
        </Stack.Navigator>
    );
}
//Navigating drawer
const DrawerNavigator = () => (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
            header: (props) => <Header {...props} />,
        }}
    >
        <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
);
//Page arranging
export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <DrawerNavigator />
                <Footer />
            </View>
        </NavigationContainer>
    );
}


//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#9712FF',
        borderBottomWidth: 1,
        marginTop: 35,
    },
    headerButton: {
        flex: 1,
        alignItems: 'center',
    },
    home: {
        width: 34,
        height: 27,
    },
    notification: {
        width: 20.16,
        height: 28,
        marginRight: 20,
    },
    menu: {
        width: 30,
        height: 20,
        marginRight: -2,
    },
    logo: {
        width: 64,
        height: 56,
        marginLeft: 5,
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 33,
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        marginRight: 35,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    boxes: {
        flexDirection: 'row',
        columnGap: 20,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: -20,
    },
    box: {
        width: '43%',
        height: 168,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 2,
        elevation: 5,
        overflow: 'hidden',
    },
    boxSingle: {
        width: '95%',
        height: 110,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 10,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(143, 0, 255, 0.45)',
    },
    boxText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    footerText: {
        color: '#6D6D6D',
        fontSize: 12,
    },
    FAQ: {
        width: 50,
        height: 33.5,
        marginBottom: 5,
    },
    Blogs: {
        width: 50,
        height: 39.7,
        marginBottom: 5,
    },
    Placements: {
        width: 27,
        height: 40.5,
        marginBottom: 5,
    },
    Contact: {
        width: 50,
        height: 33.5,
        marginBottom: 5,
    },
    About: {
        width: 39,
        height: 39.76,
        marginBottom: 5,
        marginLeft: 8,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#9712FF',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerIcon: {
        width: 24,
        height: 24,
        marginRight: 20,
    },
    drawerLabel: {
        fontSize: 16,
    },
});