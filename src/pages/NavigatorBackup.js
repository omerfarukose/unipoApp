// import {ProfileScreen} from './ProfileScreen';
//
// export const TabNavigator = () => {
//     return (
//         <HomeTabNavigator.Navigator>
//             <HomeTabNavigator.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                     tabBarLabel: 'Home',
//                 }}
//             />
//             <HomeTabNavigator.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarLabel: 'Profile',
//                 }}
//             />
//             <HomeTabNavigator.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//                 options={{
//                     tabBarLabel: 'Settings',
//                 }}
//             />
//         </HomeTabNavigator.Navigator>
//     );
// };
//
// function CustomDrawerContent(props) {
//     return (
//         <DrawerContentScrollView {...props}>
//             <DrawerItem
//                 label="Home"
//                 onPress={() => props.navigation.navigate('Home')}
//             />
//             <DrawerItem
//                 label="Profile"
//                 onPress={() => props.navigation.navigate('Profile')}
//             />
//             <DrawerItem
//                 label="Settings"
//                 onPress={() => props.navigation.navigate('Settings')}
//             />
//         </DrawerContentScrollView>
//     );
// }
//
// function getHeaderTitle(route) {
//     return getFocusedRouteNameFromRoute(route) ?? 'Home';
// }
//
// const StackNavigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Tabs"
//                 component={TabNavigator}
//                 options={({route}) => ({
//                     headerTitle: getHeaderTitle(route),
//                 })}
//             />
//             <Stack.Screen name="EditProfile" component={EditProfileScreen} />
//             <Stack.Screen name="Details" component={DetailsScreen} />
//             <Stack.Screen name="AccountDetail" component={AccountDetailsScreen} />
//         </Stack.Navigator>
//     );
// };
//
// export const Drawer = () => {
//     return (
//         <AppDrawer.Navigator
//             initialRouteName="Home"
//             drawerContent={(props) => <CustomDrawerContent {...props} />}>
//             <AppDrawer.Screen name="Stack" component={StackNavigator} />
//         </AppDrawer.Navigator>
//     );
// };
//
// export const App = () => {
//     return (
//         <NavigationContainer>
//             <Drawer />
//         </NavigationContainer>
//     );
// }
