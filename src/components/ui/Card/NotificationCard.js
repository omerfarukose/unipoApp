import {Image, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';

export const NotificationCard = ( props ) => {

    let { notificationType, isRead = false } = props

    let bgColor = myColors.pastelOne;

    switch (notificationType) {
        case 1:
            bgColor = myColors.pastelOne
            break;
        case 2:
            bgColor = myColors.pastelTwo
            break;
        case 3:
            bgColor = myColors.pastelThree
            break;
        case 4:
            bgColor = myColors.pastelFour
            break;
        case 5:
            bgColor = myColors.pastelFive
            break;
        case 6:
            bgColor = myColors.pastelSix
            break;
    }

    return(
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                width: wp(100),
                height: hp(10),
                padding: hp(1.5),
                flexDirection: "row",
                alignItems: "center",
            }}>

            {/*isRead*/}
            <View
                style={{
                    backgroundColor: isRead ? "transparent" : myColors.pastelFive,
                    height: hp(1),
                    width: hp(1),
                    borderRadius: 99,
                }}/>

            <Image
                style={{
                    height: hp(8),
                    width: hp(8),
                    borderRadius: 99,
                    borderColor: myColors.pastelFive,
                    borderWidth: hp(0.2),
                    overflow: "hidden",
                    marginHorizontal: hp(0.5),
                }}
                source={require('./../../../assets/images/user-img.jpeg')}/>

            <View
                style={{
                    height: "100%",
                    justifyContent: "space-evenly"
                }}>

                <View
                    style={{
                        flexDirection: "row",
                    }}>

                    <Text
                        style={{
                            color: myColors.navbarIconColor,
                            fontWeight: "500",
                            marginRight: 4,
                        }}>

                        Ömer Faruk KÖSE

                    </Text>

                    <Text
                        style={{
                            color: myColors.navbarIconColor,
                            fontWeight: "400",
                        }}>

                        liked your project

                    </Text>

                </View>

                <Text
                    style={{
                        color: myColors.navbarIconColor,
                    }}>
                    2 hours ago
                </Text>

            </View>

        </TouchableOpacity>
    )
}
