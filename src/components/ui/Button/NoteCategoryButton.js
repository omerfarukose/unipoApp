import {Text, TouchableOpacity, View} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import {myStrings} from '../../../values/Strings/Strings';

export const NoteCategoryButton = (props) => {

    let { onButtonPress, selectedCategory = 0 } = props

    return(
        <TouchableOpacity
            onPress={onButtonPress}
            style={{
                backgroundColor: myColors.pastelFive,
                height: hp(6),
                width: hp(15),
                padding: hp(1),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                flexDirection: "row",
                marginRight: hp(2),
            }}>

            <Text
                style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: hp(2),
                }}>

                { myStrings.button.category }

            </Text>

            <View
                style={{
                    backgroundColor: myColors.noteCategoryColors[selectedCategory],
                    borderRadius: 99,
                    height: hp(2),
                    width: hp(2),
                    marginLeft: hp(1),
                }}/>

        </TouchableOpacity>
    )
}
