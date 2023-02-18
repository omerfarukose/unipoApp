import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {Image, Text, View} from 'react-native';
import {mySampleData} from '../../values/SampleData/SampleData';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../values/Colors/Colors';
import {MyButton} from '../../components/ui/Button/MyButton';
import {useState} from 'react';

export const ProjectDetailScreen = () => {

    let projectData = mySampleData.projectCardData

    const [isSaved, setIsSaved] = useState(false);

    return(
        <MainScreen
            title={"Project Details"}>

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

                    <MyButton
                        iconName={"plus"}
                        title={"Join Request"}
                        buttonStyle={{
                            marginBottom: hp(1),
                            backgroundColor: myColors.pastelSeven,
                        }}/>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <MyButton
                            iconName={"message-square"}
                            title={"Message"}
                            buttonStyle={{
                                width: wp(45),
                                backgroundColor: myColors.lightBlue,
                            }}/>

                        <MyButton
                            onButtonClick={() => setIsSaved(!isSaved)}
                            iconName={isSaved ? "bookmark" : "bookmark-outline"}
                            iconGroup={"Ionicons"}
                            title={isSaved ? "Saved" : "Save"}
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

                    <Image
                        style={{
                            height: hp(9),
                            width: hp(9),
                            borderRadius: 99,
                            borderColor: "white",
                            borderWidth: hp(0.3),
                            overflow: "hidden"
                        }}
                        source={require('./../../assets/images/user-img-2.jpeg')}/>

                    <View
                        style={{
                            height: hp(8),
                            justifyContent: "space-evenly",
                            marginLeft: hp(1)
                        }}>

                        <Text
                            style={{
                                fontSize: hp(2.5),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>
                            Ömer Faruk KÖSE
                        </Text>

                        <Text
                            style={{
                                fontSize: hp(2),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>
                            Pamukkale Üniversitesi
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
