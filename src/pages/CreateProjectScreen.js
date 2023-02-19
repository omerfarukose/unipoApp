import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import React, {useState} from 'react';
import {MyInput} from '../components/ui/Input/MyInput';
import {MyButton} from '../components/ui/Button/MyButton';
import {myStrings} from '../values/Strings/Strings';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../values/Colors/Colors';
import {DismissKeyboardView} from '../components/ui/General/DismissKeyboardView';
import {navigate} from './Router/RootNavigation';

export const CreateProjectScreen = () => {

    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    return(
        <MainScreen
            title={"Create Project"}
            backButton={false}>

            <DismissKeyboardView>

                {/*category & cancel button*/}
                <MyButton
                    onButtonClick={() => {
                        navigate('ManageProjectScreen');
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

                <View
                    style={{
                        marginTop: hp(2),
                        padding: hp(1),
                    }}>

                    <Text
                        style={{
                            fontSize: hp(2.5),
                            fontWeight: "bold",
                            color: myColors.darkPurple,
                            marginLeft: hp(0.5),
                        }}>

                        Project Title

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

                    <Text
                        style={{
                            fontSize: hp(2.5),
                            fontWeight: "bold",
                            color: myColors.darkPurple,
                            marginLeft: hp(0.5),
                            marginTop: hp(4),
                        }}>

                        Project Description

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
                            style={{
                                height: hp(28),
                            }}
                            setValue={setProjectDescription}
                            value={projectDescription}/>

                    </View>

                </View>

            </DismissKeyboardView>

        </MainScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
