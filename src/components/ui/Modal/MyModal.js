import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text, View} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import React from 'react';
import PropTypes from 'prop-types';
import {MyButton} from '../Button/MyButton';

export const MyModal = (props) => {

    let { title, subtitle, isVisible, onClose, containerStyle,  leftButtonText, rightButtonText,
          leftButtonClick, rightButtonClick, leftButtonStyle, rightButtonStyle,
          titleStyle, subtitleStyle } = props

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
                height: hp(25),
                width: wp(90),
                borderRadius: 10,
                ...containerStyle
            }}>

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
                    fontSize: hp(2),
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
                <MyButton
                    onButtonClick={leftButtonClick}
                    title={leftButtonText}
                    textStyle={{
                        color: "white",
                        fontWeight: "bold"
                    }}
                    buttonStyle={{
                        backgroundColor: myColors.logoutColor,
                        padding: hp(1),
                        borderRadius: 10,
                        ...leftButtonStyle
                    }}/>

                {/* right button */}
                <MyButton
                    onButtonClick={rightButtonClick}
                    title={rightButtonText}
                    textStyle={{
                        color: "white",
                        fontWeight: "bold"
                    }}
                    buttonStyle={{
                        backgroundColor: myColors.darkBlueColor,
                        padding: hp(1),
                        borderRadius: 10,
                        ...rightButtonStyle
                    }}/>

            </View>

        </Modal>
    )
}

MyModal.prototype = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    leftButtonText: PropTypes.string,
    rightButtonText: PropTypes.string,
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    leftButtonClick: PropTypes.func,
    rightButtonClick: PropTypes.func,
    containerStyle: PropTypes.object,
    leftButtonStyle: PropTypes.object,
    rightButtonStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object,
}
