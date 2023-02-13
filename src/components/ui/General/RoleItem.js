import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {myColors} from '../../../values/Colors/Colors';

export const RoleItem = ( props ) => {

    let { text } = props

    return(
        <View
            style={{
                backgroundColor: myColors.mainColor,
                padding: 10,
                borderRadius: 10
            }}>

            <Text
                style={{
                    fontWeight: "bold",
                    color: "white"
                }}>
                { "#" + text }
            </Text>

        </View>
    )
}

RoleItem.propTypes = {
    text: PropTypes.string.isRequired
}
