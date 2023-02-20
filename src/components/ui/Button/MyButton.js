import * as React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import {MyIcon} from '../Icon/MyIcon';

export const MyButton = ( props ) => {

    let { title, onButtonClick, buttonStyle, textStyle, iconName, iconGroup, iconSize,
          iconColor, iconPosition, isDisabled } = props

    return(
        <TouchableOpacity
            onPress={onButtonClick}
            disabled={isDisabled}
            style={{
                backgroundColor: myColors.pastelFive,
                height: hp(5),
                padding: hp(1),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                flexDirection: "row",
                ...buttonStyle
            }}>

            {
                iconName && iconPosition === "left" &&
                <MyIcon iconName={iconName} iconSize={iconSize} iconColor={iconColor} iconGroup={iconGroup}/>
            }

            {
                title &&
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: hp(2),
                        fontWeight: "bold",
                        marginHorizontal: hp(1),
                        ...textStyle
                    }}>

                    { title }

                </Text>
            }

            {
                iconName && iconPosition === "right" &&
                <MyIcon iconName={iconName} iconSize={iconSize} iconColor={iconColor} iconGroup={iconGroup}/>
            }

        </TouchableOpacity>
    )
}

MyButton.propTypes = {
    title: PropTypes.string,
    onButtonClick: PropTypes.func,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
    iconName: PropTypes.string,
    iconGroup: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    iconPosition: PropTypes.string,
    isDisabled: PropTypes.bool
}

MyButton.defaultProps = {
    iconColor: "white",
    iconSize: 2,
    iconGroup: "Feather",
    iconPosition: "right",
    isDisabled: false,
}
