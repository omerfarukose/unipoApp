import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {Image, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../values/Colors/Colors';
import {MyButton} from '../../components/ui/Button/MyButton';
import {useState} from 'react';
import {myStrings} from '../../values/Strings/Strings';

export const ProjectDetailScreen = ({ route }) => {

    const { projectData } = route.params;

    const [isSaved, setIsSaved] = useState(projectData.isSaved);

    return(
        <MainScreen
            title={myStrings.screenTitle.projectDetails}>

            <View
                style={{
                    padding: hp(1.5),
                }}>

                {/*buttons view*/}
                <View
                    style={{
                        justifyContent: "space-evenly",
                        marginBottom: hp(1),
                    }}>

                    {/*join request button*/}
                    <MyButton
                        iconName={"plus"}
                        title={myStrings.button.joinRequest}
                        buttonStyle={{
                            marginBottom: hp(1),
                            backgroundColor: myColors.pastelSeven,
                        }}/>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>

                        {/*message button*/}
                        <MyButton
                            iconName={"message-square"}
                            title={myStrings.button.message}
                            buttonStyle={{
                                width: wp(45),
                                backgroundColor: myColors.lightBlue,
                            }}/>

                        {/*save button*/}
                        <MyButton
                            onButtonClick={() => setIsSaved(!isSaved)}
                            iconName={isSaved ? "bookmark" : "bookmark-outline"}
                            iconGroup={"Ionicons"}
                            title={isSaved ? myStrings.button.saved : myStrings.button.save}
                            buttonStyle={{
                                width: wp(45),
                                backgroundColor: isSaved ? myColors.darkBlueColor : myColors.lightBlue,
                            }}/>

                    </View>

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

                            { projectData.ownerName }

                        </Text>

                        {/*owner university*/}
                        <Text
                            style={{
                                fontSize: hp(2),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>

                            { projectData.ownerUniversity }

                        </Text>

                    </View>

                </View>

                {/*project name*/}
                <Text
                    style={{
                        fontSize: hp(3),
                        fontWeight: "bold",
                        color: myColors.softPurple,
                        marginVertical: hp(2),
                    }}>

                    { projectData.projectName }

                </Text>

                {/*project description*/}
                <Text
                    style={{
                        fontSize: hp(2),
                        fontWeight: "bold",
                        color: myColors.softPurple
                    }}>

                    { projectData.projectDescription }

                </Text>

            </View>

        </MainScreen>
    )
}
