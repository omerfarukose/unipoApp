import {ScrollView, Text} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {myColors} from '../values/Colors/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {NotificationCard} from '../components/ui/Card/NotificationCard';

export const NotificationsScreen = ( ) => {
    return(
        <MainScreen
            title={"Notifications"}
            backButton={false}>

            <ScrollView style={{ flex: 1 }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(2.5),
                        marginLeft: hp(2.5),
                        marginVertical: hp(1),
                        marginTop: hp(2),
                        color: myColors.softPurple
                    }}>

                    Today

                </Text>

                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard isRead={true}/>
                <NotificationCard isRead={true}/>
                <NotificationCard isRead={true}/>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(2.5),
                        marginLeft: hp(2.5),
                        marginVertical: hp(1),
                        color: myColors.softPurple
                    }}>

                    Yesterday

                </Text>

                <NotificationCard isRead={true}/>
                <NotificationCard isRead={true}/>
                <NotificationCard isRead={true}/>

            </ScrollView>

        </MainScreen>
    )
}
