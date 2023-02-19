import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myStrings} from '../../values/Strings/Strings';
import {Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import uuid from 'react-native-uuid';
import {MyButton} from '../../components/ui/Button/MyButton';
import React, {useState} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../values/Colors/Colors';
import Modal from 'react-native-modalbox';

export const ManageProjectScreen = ({ route }) => {

    const { item } = route.params;

    const [isQrVisible, setIsQrVisible] = useState(false);

    return(
        <MainScreen
            title={myStrings.screenTitle.manageProject}>

            <MyButton
                onButtonClick={() => setIsQrVisible(true)}
                title={"Show QR"}/>

            <Text>
                Manage Project
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
                    logo={require("../../assets/images/bitmo-img.png")}
                    logoSize={hp(5)}
                    logoBackgroundColor='transparent'/>

            </Modal>

        </MainScreen>
    )
}
