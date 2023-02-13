import * as React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';


export const MyIcon = (props ) => {

    let { iconName, iconGroup, iconColor, iconSize} = props

    let icon = <Feather name={"home"} size={hp(iconSize)} color={iconColor} />

    switch (iconGroup) {
        case "Feather":
            icon =  <Feather name={iconName} size={hp(iconSize)} color={iconColor} />
            break;
        case "Ionicons":
            icon =  <Ionicons name={iconName} size={hp(iconSize)} color={iconColor} />
            break;
    }

    return icon
}

MyIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconGroup: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number
}

MyIcon.defaultProps = {
    iconName: "terminal",
    iconGroup: "Feather",
    iconColor: "white",
    iconSize: 2
}
