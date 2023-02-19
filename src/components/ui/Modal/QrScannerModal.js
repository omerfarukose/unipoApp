import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import {MyButton} from '../Button/MyButton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import React from 'react';
import {myStrings} from '../../../values/Strings/Strings';

export const QrScannerModal = (props) => {

    let { isVisible, onClose, onScanResult } = props

    return(
        <Modal
            isOpen={isVisible}
            onClosed={onClose}
            backdropOpacity={0.2}
            coverScreen={true}
            position={"center"}
            style={{
                backgroundColor: "white",
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: hp(60),
                width: wp(100),
                borderRadius: 10,
            }}>

            <Text
                style={{
                    fontWeight: "bold",
                    paddingTop: hp(3),
                    fontSize: hp(3),
                    color: myColors.darkPurple,
                    textAlign: "center",
                }}>

                { myStrings.scanQr }

            </Text>

            <MyButton
                onButtonClick={onClose}
                iconName={"x"}
                buttonStyle={{
                    right: hp(1),
                    top: hp(1),
                    position: "absolute",
                    alignSelf: "flex-end",
                    height: hp(4),
                    width: hp(4),
                    backgroundColor: myColors.logoutColor,
                }}/>

            <QRCodeScanner
                cameraProps={{ratio: "1:1"}}
                vibrate={true}
                fadeIn={true}
                cameraTimeout={0}
                onRead={(e) => onScanResult(e.data)}/>

        </Modal>
    )
}
