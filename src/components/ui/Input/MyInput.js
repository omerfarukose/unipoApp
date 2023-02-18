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
                padding: hp(1),
                ...style
            }}
            spellCheck={false}
            autoCorrect={false}
            multiline
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
    placeholderColor: myColors.softPurple
}
