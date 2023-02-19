import {TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import * as React from 'react';
import PropTypes from 'prop-types';

export const MyInput = ( props ) => {

    let { placeholder, placeholderColor, value, setValue, style } = props

    return(
        <TextInput
            spellCheck={false}
            autoCorrect={false}
            multiline
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            onChangeText={setValue}
            value={value}
            style={{
                padding: hp(1),
                ...style
            }}/>
    )
}

MyInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.any.isRequired,
    style: PropTypes.object,
    placeholderColor: PropTypes.string
}

MyInput.defaultProps = {
    placeholderColor: myColors.softPurple
}
