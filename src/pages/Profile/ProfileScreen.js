import * as React from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../values/Colors/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {navigate} from '../Router/RootNavigation';
import {sampleUserData} from '../../values/SampleData/SampleData';

export const ProfileScreen = () => {

    const [userInfo, setUserInfo] = useState({});
    const [name, setName] = useState("Ömer Faruk KÖSE");
    const [department, setDepartment] = useState("Computer Science");

    useEffect(() => {
        getUserInfo()
    }, []);

    function getUserInfo(){
        setUserInfo(sampleUserData)
    }

    const _renderInput = ( title, value, setValue ) => {
        return(
            <View
                style={{
                    width: wp(100),
                    height: hp(5),
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: hp(1),
                    paddingHorizontal: hp(3),
                    marginBottom: 2
                }}>

                <Text
                    style={{
                        width: wp(30),
                        color: "gray",
                        fontSize: hp(2),
                        fontWeight: "bold",
                    }}>

                    { title }

                </Text>

                <TextInput
                    style={{
                        fontWeight: "bold",
                        color: myColors.softPurple
                    }}
                    onChangeText={setValue}
                    value={value}
                />

            </View>
        )
    }

    const _renderCardItem =  ( text, icon, navigateTo ) => {
        return(
            <TouchableOpacity
                onPress={() => navigate(navigateTo)}
                style={{
                    backgroundColor: myColors.pastelFive,
                    height: wp(30),
                    width: wp(30),
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>

                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: hp(2),
                    }}>

                    {text}

                </Text>

                <Feather name={icon} size={hp(5)} color={"white"} />

            </TouchableOpacity>
        )
    }

    return(
        <MainScreen>

            {/* header */}
            <View>

                {/*image view*/}
                <View
                    style={{
                        height: hp(20),
                        backgroundColor: myColors.pastelFive,
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>

                    <TouchableOpacity>

                        <Image
                            style={{
                                height: hp(15),
                                width: hp(15),
                                borderRadius: 99,
                                borderColor: "white",
                                borderWidth: hp(0.3),
                                overflow: "hidden"
                            }}
                            source={require('../../assets/images/user-img.jpeg')}/>

                    </TouchableOpacity>

                </View>

                {/* university */}
                <View
                    style={{
                        width: wp(100),
                        backgroundColor: myColors.pastelFive,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: hp(2),
                    }}>

                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: hp(2),
                            includeFontPadding: false
                        }}>

                        { userInfo.university }

                    </Text>

                </View>

            </View>

            {/* card list */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: hp(1),
                    paddingVertical: hp(1),
                }}>
                {_renderCardItem("Projects","folder", "ProjectsScreen")}
                {_renderCardItem("Tasks", "list", "TasksScreen")}
                {_renderCardItem("Invites", "mail", "InvitesScreen")}
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>
                {_renderCardItem("Notes", "edit-3", "NotesScreen")}
                {_renderCardItem("Saved", "bookmark", "SavedProjectsScreen")}
                {_renderCardItem("Settings", "settings", "SettingsScreen")}
            </View>

            {/*input views*/}
            <View
                style={{
                    marginTop: hp(3),
                    height: hp(100),
                }}>

                { _renderInput("Name", name, setName)}

                { _renderInput("Department", department, setDepartment)}

            </View>

        </MainScreen>
    )
}

