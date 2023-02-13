import {Text, View} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {MyButton} from '../../components/ui/Button/MyButton';
import {LoginContext} from '../../contexts/LoginContext';
import {useContext} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../values/Colors/Colors';

export const SettingsScreen = () => {

    const {setIsLogin} = useContext(LoginContext);

    return(
        <MainScreen
            title={"Settings"}>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>

                <MyButton
                    onButtonClick={() => setIsLogin(false)}
                    title={"Logout"}
                    textStyle={{
                        color: "white"
                    }}
                    buttonStyle={{
                        backgroundColor: myColors.notificationBadgeColor,
                        width: wp(90)
                    }}/>

            </View>

        </MainScreen>
    )
}
