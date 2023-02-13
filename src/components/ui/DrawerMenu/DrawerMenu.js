import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {navigate} from '../../../pages/Router/RootNavigation';

export const DrawerMenu = ( props ) => {

    const renderDrawerItem = (title, navigateTo ) => {
        return(
            <TouchableOpacity
                onPress={() => navigate(navigateTo, {drawerNavigate: true})}>

                <Text>
                    {title}
                </Text>

            </TouchableOpacity>
        )
    }

    return(
        <View
            style={{
                paddingTop: hp(3),
                backgroundColor: "#eceff1",
                flex: 1,
            }}>

            <ScrollView
                style={{
                    marginTop: hp("4%"),
                    marginBottom: hp("1%"),
                    paddingHorizontal: hp(1)
                }}>

                {renderDrawerItem("Home Detail", "HomeDetail")}
                {renderDrawerItem("Home Another", "HomeAnother")}
                {renderDrawerItem("Profile Detail", "ProfileAnother")}
                {renderDrawerItem("Profile Another", "ProfilerAnother")}

            </ScrollView>

        </View>
    )
}
