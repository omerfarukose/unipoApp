import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MyButton} from '../Button/MyButton';
import {myColors} from '../../../values/Colors/Colors';
import {Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {myStrings} from '../../../values/Strings/Strings';

export const ProjectQrModal = (props) => {

    let { isVisible, onClose, qrData } = props

    return(
        <Modal
            isOpen={isVisible}
            onClosed={onClose}
            backdropOpacity={0.2}
            coverScreen={true}
            position={"center"}
            style={{
                backgroundColor: "white",
                alignItems: 'center',
                height: hp(35),
                width: wp(90),
                borderRadius: 10,
            }}>

            <MyButton
                onButtonClick={onClose}
                iconName={"x"}
                buttonStyle={{
                    margin: hp(1),
                    alignSelf: "flex-end",
                    height: hp(4),
                    width: hp(4),
                    backgroundColor: myColors.logoutColor,
                }}/>

            <Text
                style={{
                    fontSize: hp(2.5),
                    fontWeight: "bold",
                    color: myColors.darkPurple,
                    marginBottom: hp(3),
                }}>

                { myStrings.shareQr }

            </Text>

            <QRCode
                size={hp(20)}
                value={qrData}
                logo={require("../../../assets/images/app-logo.png")}
                logoSize={hp(5)}
                logoBackgroundColor='transparent'/>

        </Modal>
    )
}

