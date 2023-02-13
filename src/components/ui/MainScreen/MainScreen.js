import {Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';
import Feather from 'react-native-vector-icons/Feather';
import * as React from 'react';
import PropTypes from 'prop-types';
import {myGoBack} from '../../../pages/Router/RootNavigation';

export const MainScreen = ( props ) => {

    let { navigation, goBack = true, style, title } = props;

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                ...style
            }}>

            <View
                style={{
                    width: wp(100),
                    height: hp(9),
                    paddingTop: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: myColors.pastelFive,
                }}>

                <Text
                    style={{
                        fontSize: hp(3),
                        fontWeight: "bold",
                        color: "white"
                    }}>

                    unipo.

                </Text>

            </View>

            {
                title &&
                <View
                    style={{
                        width: wp(100),
                        backgroundColor: myColors.pastelFive,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                        flexDirection: "row",
                    }}>

                    {
                        goBack &&
                        <TouchableOpacity
                            onPress={() => {
                                myGoBack()
                            }}
                            style={{
                                position: "absolute",
                                left: 0,
                                marginLeft: hp(2),
                            }}>
                            <Feather name={"chevron-left"} size={hp(3.5)} color={"white"} />
                        </TouchableOpacity>
                    }

                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: hp(2),
                            includeFontPadding: false
                        }}>

                        { title }

                    </Text>

                </View>
            }

            <View
                style={{
                    flex: 1
                }}>

                {props.children}

            </View>

        </View>
    )
}

MainScreen.propTypes = {
    goBack: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string
}

MainScreen.defaultProps = {
    goBack: true
}
