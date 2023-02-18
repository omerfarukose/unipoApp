import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text, TouchableOpacity, View} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import React from 'react';
import {NoteDetailScreen} from '../../../pages/Profile/Notes/NoteDetailScreen';
import * as propType from 'prop-types';

export const NoteCategoryModal = (props) => {

    let { isVisible, onClose, onItemClick } = props

    const _renderNoteCategoryItem = (type = 0) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    onItemClick(type);
                    onClose()
                }}
                style={{
                    backgroundColor: myColors.pastelFive,
                    width: hp(6),
                    height: hp(6),
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                }}>

                <View
                    style={{
                        backgroundColor: myColors.noteCategoryColors[type],
                        borderRadius: 99,
                        height: hp(2),
                        width: hp(2),
                    }} />

            </TouchableOpacity>
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
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: hp(20),
                width: wp(90),
                borderRadius: 10,
            }}>

            {/*modal title*/}
            <Text
                style={{
                    fontSize: hp(3),
                    fontWeight: "bold",
                    color: myColors.softPurple
                }}>

                Note Category

            </Text>

            {/*category buttons*/}
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>

                {_renderNoteCategoryItem(0)}
                {_renderNoteCategoryItem(1)}
                {_renderNoteCategoryItem(2)}
                {_renderNoteCategoryItem(3)}
                {_renderNoteCategoryItem(4)}

            </View>

        </Modal>
    )
}

NoteDetailScreen.propTypes = {
    isVisible: propType.bool,
    onClose: propType.func
}
