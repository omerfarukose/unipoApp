import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {MyInput} from '../components/ui/Input/MyInput';
import {MyButton} from '../components/ui/Button/MyButton';
import {myStrings} from '../values/Strings/Strings';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../values/Colors/Colors';
import {DismissKeyboardView} from '../components/ui/General/DismissKeyboardView';
import {navigate} from './Router/RootNavigation';
import {sampleProjectDataList} from '../values/SampleData/SampleData';

export const CreateProjectScreen = () => {

    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    let sampleProjectData = sampleProjectDataList[2]

    return(
        <MainScreen
            title={myStrings.screenTitle.createProject}
            backButton={false}>

            <DismissKeyboardView>

                {/*category & cancel button*/}
                <MyButton
                    onButtonClick={() => {
                        navigate('ManageProjectScreen', {item:sampleProjectData});
                        setProjectTitle("")
                        setProjectDescription("")
                    }}
                    title={myStrings.button.create}
                    isDisabled={projectTitle === "" && projectDescription === ""}
                    buttonStyle={{
                        margin: hp(1),
                        alignSelf: "flex-end",
                        height: hp(6),
                        backgroundColor: (projectTitle !== "" && projectDescription !== "") ? myColors.pastelFour : 'gray'
                    }}/>

                {/*input view*/}
                <View
                    style={{
                        marginTop: hp(2),
                        padding: hp(1),
                    }}>

                    {/*title input*/}
                    <Text
                        style={{
                            fontSize: hp(2.5),
                            fontWeight: "bold",
                            color: myColors.darkPurple,
                            marginLeft: hp(0.5),
                        }}>

                        { myStrings.title.projectTitle }

                    </Text>

                    <View
                        style={{
                            height: hp(5),
                            justifyContent: "center",
                            borderColor: myColors.pastelFive,
                            borderWidth: 1.5,
                            borderRadius: 10,
                            paddingLeft: hp(1),
                            marginTop: hp(0.7),
                        }}>

                        <MyInput
                            setValue={setProjectTitle}
                            value={projectTitle}/>

                    </View>

                    {/*description view*/}
                    <Text
                        style={{
                            fontSize: hp(2.5),
                            fontWeight: "bold",
                            color: myColors.darkPurple,
                            marginLeft: hp(0.5),
                            marginTop: hp(4),
                        }}>

                        { myStrings.title.projectDescription }

                    </Text>

                    <View
                        style={{
                            height: hp(30),
                            padding: hp(1),
                            justifyContent: "center",
                            borderColor: myColors.pastelFive,
                            borderWidth: 1.5,
                            borderRadius: 10,
                            marginTop: hp(0.7),
                        }}>

                        <MyInput
                            setValue={setProjectDescription}
                            value={projectDescription}
                            style={{
                                height: hp(28),
                            }}/>

                    </View>

                </View>

            </DismissKeyboardView>

        </MainScreen>
    )
}
