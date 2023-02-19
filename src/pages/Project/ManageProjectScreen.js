import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myStrings} from '../../values/Strings/Strings';
import {Image, Text, View} from 'react-native';
import {MyButton} from '../../components/ui/Button/MyButton';
import React, {useState} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../values/Colors/Colors';
import {ProjectQrModal} from '../../components/ui/Modal/ProjectQrModal';

export const ManageProjectScreen = ({ route }) => {

    const { item } = route.params;

    const [isQrVisible, setIsQrVisible] = useState(false);

    return(
        <MainScreen
            title={myStrings.screenTitle.manageProject}>

            <View style={{ padding: hp(1) }}>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }}>

                    <MyButton
                        onButtonClick={() => {}}
                        iconName={"user-plus"}
                        iconSize={3}
                        buttonStyle={{
                            margin: hp(1),
                            height: hp(5.5),
                            width: hp(5.5),
                            backgroundColor: myColors.darkBlueColor
                        }}/>

                    <MyButton
                        onButtonClick={() => {}}
                        iconName={"bell"}
                        iconSize={3}
                        buttonStyle={{
                            margin: hp(1),
                            height: hp(5.5),
                            width: hp(5.5),
                            backgroundColor: myColors.darkBlueColor
                        }}/>

                    <MyButton
                        onButtonClick={() => setIsQrVisible(true)}
                        iconName={"qr-code-sharp"}
                        iconGroup={"Ionicons"}
                        iconSize={3.5}
                        buttonStyle={{
                            margin: hp(1),
                            height: hp(5.5),
                            width: hp(5.5),
                            backgroundColor: myColors.darkBlueColor
                        }}/>

                    <MyButton
                        onButtonClick={() => {}}
                        iconName={"trash"}
                        iconSize={3.5}
                        buttonStyle={{
                            margin: hp(1),
                            height: hp(5.5),
                            width: hp(5.5),
                            backgroundColor: myColors.logoutColor
                        }}/>

                </View>

                {/*project owner info*/}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>

                    {/*owner image*/}
                    <Image
                        source={require('./../../assets/images/user-img-2.jpeg')}
                        style={{
                            height: hp(7.5),
                            width: hp(7.5),
                            borderRadius: 99,
                            borderColor: myColors.pastelFive,
                            borderWidth: hp(0.3),
                            overflow: "hidden"
                        }}/>

                    <View
                        style={{
                            height: hp(8),
                            justifyContent: "space-evenly",
                            marginLeft: hp(1)
                        }}>

                        {/*owner name*/}
                        <Text
                            style={{
                                fontSize: hp(2.5),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>

                            { item.ownerName }

                        </Text>

                        {/*owner university*/}
                        <Text
                            style={{
                                fontSize: hp(2),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>

                            { item.ownerUniversity }

                        </Text>

                    </View>

                </View>

                <Text
                    style={{
                        marginTop: hp(3),
                        fontSize: hp(3),
                        fontWeight: "bold",
                        color: myColors.darkPurple,
                    }}>

                    { item.projectName }

                </Text>

                <Text
                    style={{
                        fontSize: hp(2.3),
                        color: myColors.darkPurple,
                    }}>

                    { item.projectDescription }

                </Text>

            </View>

            <ProjectQrModal
                qrData={item.qrCode}
                isVisible={isQrVisible}
                onClose={() => setIsQrVisible(false)}/>

        </MainScreen>
    )
}
