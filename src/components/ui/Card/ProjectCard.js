import {Image, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import {navigate} from '../../../pages/Router/RootNavigation';

export const ProjectCard = (item, index) => {

    return(
        <TouchableWithoutFeedback
            onPress={() => navigate('ProjectDetailScreen', {projectData: item})}>

            <View
                style={{
                    backgroundColor: "white",
                    borderRadius: hp(2),
                    borderWidth: 1,
                    borderColor: "#eceff1",
                    minHeight: hp(30),
                    margin: hp(1),
                    padding: hp(1.5),
                }}>

                {/*project name*/}
                <Text
                    style={{
                        fontSize: hp(2),
                        fontWeight: "bold",
                        color: myColors.softPurple
                    }}>

                    {item.projectName}

                </Text>

                {/*project description*/}
                <Text
                    style={{
                        flex: 1,
                        color: myColors.softPurple,
                        marginTop: hp(1),
                    }}>

                    {item.projectDescription}

                </Text>

                {/*project owner info*/}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>

                    <Image
                        style={{
                            height: hp(6),
                            width: hp(6),
                            borderRadius: 99,
                            borderColor: "white",
                            borderWidth: hp(0.3),
                            overflow: "hidden"
                        }}
                        source={require('./../../../assets/images/user-img-2.jpeg')}/>

                    <View
                        style={{
                            height: hp(5),
                            justifyContent: "space-evenly",
                            marginLeft: hp(1)
                        }}>

                        <Text
                            style={{
                                fontSize: hp(1.5),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>

                            {item.ownerName}

                        </Text>

                        <Text
                            style={{
                                fontSize: hp(1.5),
                                fontWeight: "bold",
                                color: myColors.softPurple
                            }}>

                            {item.ownerUniversity}

                        </Text>

                    </View>

                </View>

            </View>

        </TouchableWithoutFeedback>
    )
}
