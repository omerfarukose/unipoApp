import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {myColors} from '../values/Colors/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {NotificationCard} from '../components/ui/Card/NotificationCard';

export const NotificationsScreen = ( ) => {

    return(
        <MainScreen
            style={{
                backgroundColor: "white",
            }}
            goBack={false}
            title={"Notifications"}>

            <ScrollView
                style={{
                    flex: 1,
                }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(2.5),
                        marginLeft: hp(2.5),
                        marginVertical: hp(1),
                        marginTop: hp(2),
                        color: myColors.navbarIconColor
                    }}>
                    Today
                </Text>

                <NotificationCard notificationType={1}/>
                <NotificationCard notificationType={2}/>
                <NotificationCard notificationType={3}/>
                <NotificationCard notificationType={4}/>
                <NotificationCard notificationType={5}/>
                <NotificationCard notificationType={6}/>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(2.5),
                        marginLeft: hp(2.5),
                        marginVertical: hp(1),
                        color: myColors.navbarIconColor
                    }}>
                    Yesterday
                </Text>

                <NotificationCard notificationType={1} isRead={true}/>
                <NotificationCard notificationType={2} isRead={true}/>
                <NotificationCard notificationType={3} isRead={true}/>

            </ScrollView>
        </MainScreen>
    )
}
