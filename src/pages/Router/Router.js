import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../Profile/ProfileScreen';
import {ProjectsScreen} from '../Profile/ProjectsScreen';
import {TasksScreen} from '../Profile/TasksScreen';
import {InvitesScreen} from '../Profile/InvitesScreen';
import {NotesScreen} from '../Profile/NotesScreen';
import {SavedProjectsScreen} from '../Profile/SavedProjectsScreen';
import {SettingsScreen} from '../Profile/SettingsScreen';
import {myColors} from '../../values/Colors/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {HomeScreen} from '../Home/HomeScreen';
import {LoginScreen} from '../Auth/LoginScreen';
import {SearchScreen} from '../SearchScreen';
import {CreateProjectScreen} from '../CreateProjectScreen';
import {NotificationsScreen} from '../NotificationsScreen';
import {useContext, useRef} from 'react';
import {LoginContext} from '../../contexts/LoginContext';
import {ProjectDetailScreen} from '../Home/ProjectDetailScreen';
import {navigationRef} from './RootNavigation';

const UserTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Router = ( ) => {

    const {isLogin} = useContext(LoginContext);

    // get tab bar icon
    const getTabBarIcon = ( routeName ) => {
        let iconName;

        switch (routeName) {
            case 'HomeStack':
                iconName = 'home';
                break;
            case 'ProfileStack':
                iconName = 'user';
                break;
            case 'CreateProjectScreen':
                iconName = 'plus-circle';
                break;
            case 'NotificationsScreen':
                iconName = 'bell';
                break;
            case 'SearchScreen':
                iconName = 'search';
                break;
            case 'LoginScreen':
                iconName = 'log-in';
                break;
        }

        return iconName;
    }

    // Screen Stacks
    function ProfileStackScreen() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ProjectsScreen" component={ProjectsScreen} />
                <Stack.Screen name="TasksScreen" component={TasksScreen} />
                <Stack.Screen name="InvitesScreen" component={InvitesScreen} />
                <Stack.Screen name="NotesScreen" component={NotesScreen} />
                <Stack.Screen name="SavedProjectsScreen" component={SavedProjectsScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            </Stack.Navigator>
        );
    }

    function HomeStackScreen() {
        return(
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProjectDetailScreen" component={ProjectDetailScreen} />
            </Stack.Navigator>
        )
    }

    // Tab Navigators
    const GuessTabNavigator = () => {
        return(
            <UserTab.Navigator
                initialRouteName={"HomeStack"}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: myColors.infoColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => <Feather name={getTabBarIcon(route.name)} size={size} color={color} />,
                })}>
                <UserTab.Screen name="HomeStack" component={HomeStackScreen} />
                <UserTab.Screen name="LoginScreen" component={LoginScreen} />
            </UserTab.Navigator>
        )
    }

    const UserTabNavigator = () => {
        return(
            <UserTab.Navigator
                initialRouteName={"HomeStack"}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: myColors.infoColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, size }) => <Feather name={getTabBarIcon(route.name)} size={size} color={color} />,
                })}>
                <UserTab.Screen name="HomeStack" component={HomeStackScreen} />
                <UserTab.Screen name="SearchScreen" component={SearchScreen} />
                <UserTab.Screen name="CreateProjectScreen" component={CreateProjectScreen} />
                <UserTab.Screen name="NotificationsScreen" component={NotificationsScreen} />
                <UserTab.Screen name="ProfileStack" component={ProfileStackScreen} />
            </UserTab.Navigator>
        )
    }

    return(
        <NavigationContainer
            ref={navigationRef}>

            {
                isLogin ?

                    UserTabNavigator()

                    :

                    GuessTabNavigator()
            }

        </NavigationContainer>
    )
}
