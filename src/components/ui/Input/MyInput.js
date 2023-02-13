import {TextInput} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import * as React from 'react';
import PropTypes from 'prop-types';

export const MyInput = ( props ) => {

    let { placeholder, placeholderColor, value, setValue, style } = props

    return(
        <TextInput
            style={{
                fontWeight: "bold",
                color: "red",
                backgroundColor: "white",
                width: wp(90),
                height: hp(5),
                borderRadius: 18,
                padding: hp(2),
                marginBottom: hp(2),
                ...style
            }}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            onChangeText={setValue}
            value={value}/>
    )
}

MyInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    setValue: PropTypes.any,
    style: PropTypes.object,
    placeholderColor: PropTypes.string
}

MyInput.defaultProps = {
    placeholderColor: myColors.navbarIconColor
}
