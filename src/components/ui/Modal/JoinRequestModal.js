import React, {useState} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MyButton} from '../Button/MyButton';
import {myColors} from '../../../values/Colors/Colors';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modalbox';
import {MyIcon} from '../Icon/MyIcon';

export const JoinRequestModal = (props) => {

    let { isVisible, onClose, roleList } = props

    roleList = [...roleList, "Other"]

    const [isRolesVisible, setIsRolesVisible] = useState(true);

    const _renderRoleItem = ( roleTitle, index ) => {
        return(
            <TouchableOpacity
                onPress={() => setIsRolesVisible(false)}
                style={{
                    marginBottom: hp(1),
                    backgroundColor: myColors.pastelFive,
                    width: wp(80),
                    height: hp(5),
                    flexDirection: "row",
                    paddingHorizontal: hp(2),
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 10,
                }}>

                <Text
                    style={{
                        fontSize: hp(1.8),
                        fontWeight: "bold",
                        color: myColors.darkBlueColor
                    }}>

                    { roleTitle }

                </Text>

                <MyIcon iconName={"send"} iconGroup={"Ionicons"} />

            </TouchableOpacity>
        )
    }

    const _renderRequestNote = ( ) => {
        return(
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>

                <Text
                    style={{
                        fontSize: hp(2.5),
                        fontWeight: "bold",
                        color: myColors.darkPurple,
                        marginTop: hp(2),
                    }}>

                    Request Message

                </Text>

                <View
                    style={{
                        height: hp(25),
                        width: wp(80),
                        padding: hp(1),
                        backgroundColor: myColors.pastelFive,
                        borderRadius: 10,
                    }}>

                    <Text
                        style={{
                            color: myColors.darkPurple
                        }}>
                        Message :
                    </Text>

                </View>

                <View
                    style={{
                        width: wp(80),
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>

                    <MyButton
                        onButtonClick={() => {
                            onClose();
                            setIsRolesVisible(true)
                        }}
                        title={"Send"}
                        buttonStyle={{
                            backgroundColor: myColors.pastelSeven
                        }}/>

                    <MyButton
                        onButtonClick={() => {
                            setIsRolesVisible(true)
                        }}
                        title={"Back"}
                        buttonStyle={{
                            backgroundColor: myColors.logoutColor
                        }}/>

                </View>

            </View>
        )
    }

    const _renderRoles = ( ) => {
        return(
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                }}>

                <Text
                    style={{
                        fontSize: hp(2.5),
                        fontWeight: "bold",
                        color: myColors.darkPurple,
                        marginBottom: hp(3),
                        marginTop: hp(2),
                    }}>

                    Roles

                </Text>

                <FlatList
                    data={roleList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => _renderRoleItem(item, index)}/>

            </View>
        )
    }

    return(
        <Modal
            isOpen={isVisible}
            onClosed={onClose}
            backdropOpacity={0.2}
            coverScreen={true}
            position={"center"}
            style={{
                backgroundColor: "white",
                alignItems: 'center',
                height: hp(45),
                width: wp(90),
                borderRadius: 10,
                padding: hp(1),
            }}>

            <MyButton
                onButtonClick={onClose}
                iconName={"x"}
                buttonStyle={{
                    zIndex: 99,
                    position: "absolute",
                    alignSelf: "flex-end",
                    top: hp(1),
                    right: hp(1),
                    height: hp(4),
                    width: hp(4),
                    backgroundColor: myColors.logoutColor,
                }}/>

            {
                isRolesVisible ?
                    _renderRoles()
                    :
                    _renderRequestNote()
            }

        </Modal>
    )
}
