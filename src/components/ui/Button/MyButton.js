import {Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import * as React from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MyIcon} from '../Icon/MyIcon';

export const MyButton = ( props ) => {

    let { title, onButtonClick, buttonStyle, textStyle, iconName, iconGroup, iconSize, iconColor} = props

    return(
        <TouchableOpacity
            onPress={onButtonClick}
            style={{
                backgroundColor: myColors.pastelFive,
                height: hp(5),
                alignItems: "center",
                padding: hp(1),
                justifyContent: "center",
                borderRadius: 10,
                flexDirection: "row",
                ...buttonStyle
            }}>

            {
                iconName &&
                <MyIcon iconName={iconName} iconSize={iconSize} iconColor={iconColor} iconGroup={iconGroup}/>
            }

            <Text
                style={{
                    color: "white",
                    fontSize: hp(2),
                    fontWeight: "bold",
                    marginLeft: 10,
                    ...textStyle
                }}>

                { title }

            </Text>
        </TouchableOpacity>
    )
}

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
    iconName: PropTypes.string,
    iconGroup: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number
}

MyButton.defaultProps = {
    iconColor: "white",
    iconSize: 2,
}
