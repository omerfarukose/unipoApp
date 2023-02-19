import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myStrings} from '../../values/Strings/Strings';
import {Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {MyButton} from '../../components/ui/Button/MyButton';
import React, {useState} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Modal from 'react-native-modalbox';
import {myColors} from '../../values/Colors/Colors';

export const ManageProjectScreen = ({ route }) => {

    const { item } = route.params;

    const [isQrVisible, setIsQrVisible] = useState(false);

    return(
        <MainScreen
            title={myStrings.screenTitle.manageProject}>

            <MyButton
                onButtonClick={() => setIsQrVisible(true)}
                iconName={"qr-code-sharp"}
                iconGroup={"Ionicons"}
                iconSize={3.5}
                buttonStyle={{
                    alignSelf: "flex-end",
                    margin: hp(1),
                    height: hp(5.5),
                    width: hp(5.5),
                    backgroundColor: myColors.darkBlueColor
                }}/>

            <Text
                style={{
                    fontSize: hp(2.5),
                    fontWeight: "bold",
                    color: myColors.darkPurple,
                }}>

                { item.ownerName }

            </Text>

            <Text
                style={{
                    fontSize: hp(2.5),
                    fontWeight: "bold",
                    color: myColors.darkPurple,
                }}>

                { item.ownerUniversity }

            </Text>

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
                    fontSize: hp(3),
                    color: myColors.darkPurple,
                }}>
                { item.projectDescription }

            </Text>

            <Modal
                isOpen={isQrVisible}
                onClosed={() => setIsQrVisible(false)}
                backdropOpacity={0.2}
                coverScreen={true}
                position={"center"}
                style={{
                    backgroundColor: "white",
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: hp(30),
                    width: wp(90),
                    borderRadius: 10,
                }}>

                <QRCode
                    size={hp(20)}
                    value={item.qrCode}
                    logo={require("../../assets/images/app-logo.png")}
                    logoSize={hp(5)}
                    logoBackgroundColor='transparent'/>

            </Modal>

        </MainScreen>
    )
}
