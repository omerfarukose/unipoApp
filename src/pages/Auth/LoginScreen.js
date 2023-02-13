import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../values/Colors/Colors';
import {Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as React from 'react';
import {useContext, useState} from 'react';
import {MyButton} from '../../components/ui/Button/MyButton';
import {MyInput} from '../../components/ui/Input/MyInput';
import {LoginContext} from '../../contexts/LoginContext';

export const LoginScreen = ( ) => {

    const {setIsLogin} = useContext(LoginContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <MainScreen
            style={{
                backgroundColor: myColors.pastelFive,
            }}>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: hp(4),
                        textAlign: "center",
                        marginBottom: hp(2)
                    }}>

                    Login

                </Text>

                <MyInput value={username} setValue={setUsername} placeholder={"E-mail"} />

                <MyInput value={password} setValue={setPassword} placeholder={"Password"} />

                <MyButton
                    onButtonClick={() => setIsLogin(true)}
                    buttonStyle={{
                        backgroundColor: "white",
                    }}
                    textStyle={{
                        color: myColors.navbarIconColor
                    }}
                    title={"Login"}/>

                <View
                    style={{
                        width: wp(90),
                        alignItems: "flex-start",
                        marginTop: hp(4),
                    }}>

                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: hp(2),
                            marginBottom: hp(0.5),
                            color: myColors.navbarIconColor
                        }}>

                        Don't you have a Unipo account yet?

                    </Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: hp(3),
                            color: myColors.navbarIconColor,
                            textDecorationLine: 'underline'
                        }}>

                        Create an account

                    </Text>

                </View>

            </View>

        </MainScreen>
    )
}
