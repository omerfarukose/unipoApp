import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text, TouchableOpacity, View} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import React from 'react';

export const MyModal = (props) => {

    let { title, subtitle, isVisible, onClose, containerStyle,  leftButtonText, rightButtonText,
          leftButtonClick, rightButtonClick, leftButtonStyle, rightButtonStyle,
          titleStyle, subtitleStyle,
         } = props

    return(
        <Modal
            style={{
                backgroundColor: "white",
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: hp(25),
                width: wp(90),
                borderRadius: 10,
                ...containerStyle
            }}
            isOpen={isVisible}
            onClosed={onClose}
            backdropOpacity={0.2}
            coverScreen={true}
            position={"center"}>

            {/* title */}
            <Text
                style={{
                    width: "70%",
                    textAlign: "center",
                    fontSize: hp(2.5),
                    fontWeight: "bold",
                    color: myColors.softPurple,
                    ...titleStyle
                }}>

                { title }

            </Text>

            {/* subtitle */}
            <Text
                style={{
                    width: "70%",
                    textAlign: "center",
                    fontSize: hp(2.5),
                    fontWeight: "bold",
                    color: myColors.softPurple,
                    ...subtitleStyle
                }}>

                { subtitle }

            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
                }}>

                {/* left button */}
                <TouchableOpacity
                    onPress={leftButtonClick}
                    style={{
                        backgroundColor: myColors.logoutColor,
                        padding: hp(1),
                        borderRadius: 10,
                        ...leftButtonStyle
                    }}>

                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold"
                        }}>

                        { leftButtonText }

                    </Text>

                </TouchableOpacity>

                {/* right button */}
                <TouchableOpacity
                    onPress={rightButtonClick}
                    style={{
                        backgroundColor: myColors.darkBlueColor,
                        padding: hp(1),
                        borderRadius: 10,
                        ...rightButtonStyle
                    }}>

                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold"
                        }}>

                        { rightButtonText }

                    </Text>

                </TouchableOpacity>

            </View>

        </Modal>
    )
}
