import React , {useEffect, useState} from 'react';
import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modalbox';

export const NoteDetailScreen = ({ route }) => {

    const { item } = route.params;

    const [title, setTitle] = useState("Note title");
    const [description, setDescription] = useState("Sample note description");
    const [selectedNoteCategory, setSelectedNoteCategory] = useState(0);
    const [isColorModalVisible, setIsColorModalVisible] = useState(false);
    const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);

    useEffect(() => {
        setSelectedNoteCategory(item.category)
        setTitle(item.title)
        setDescription(item.description)
    }, []);

    const _renderIconButton = ( onButtonClick = null  ) => {
        return(
            <TouchableOpacity
                onPress={onButtonClick}
                style={{
                    backgroundColor: "red",
                    width: hp(6),
                    height: hp(6),
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                }}>

                <Feather name={"trash"} size={hp(3)} color={"white"} />

            </TouchableOpacity>
        )
    }

    const _renderNoteCategoryItem = (type = 0) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    setSelectedNoteCategory(type);
                    setIsColorModalVisible(false)
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
        <MainScreen
            title={"Note Detail"}>

            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}>

                <View
                    style={{
                        flex:1
                    }}>

                    {/*buttons view*/}
                    <View
                        style={{
                            margin: hp(2),
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}>

                        <TouchableOpacity
                            onPress={() => setIsColorModalVisible(true)}
                            style={{
                                backgroundColor: myColors.pastelFive,
                                height: hp(6),
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
                                Category
                            </Text>

                            <View
                                style={{
                                    backgroundColor: myColors.noteCategoryColors[selectedNoteCategory],
                                    borderRadius: 99,
                                    height: hp(2),
                                    width: hp(2),
                                    marginLeft: hp(1),
                                }} />

                        </TouchableOpacity>

                        { _renderIconButton(() => {setIsDeleteDialogVisible(true)}) }

                    </View>

                    <TextInput
                        style={{
                            fontWeight:"bold",
                            fontSize: hp(3),
                            margin: hp(1),
                            color: myColors.softPurple
                        }}
                        spellCheck={false}
                        autoCorrect={false}
                        multiline
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Note Description"/>

                    <TextInput
                        style={{
                            fontSize: hp(2),
                            margin: hp(1),
                            color: myColors.softPurple
                        }}
                        autoCorrect={false}
                        spellCheck={false}
                        multiline
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Note Description"/>
                </View>


            </TouchableWithoutFeedback>
            <Modal
                style={{
                    backgroundColor: "white",
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: hp(20),
                    width: wp(90),
                    borderRadius: 10,
                }}
                isOpen={isColorModalVisible}
                onClosed={() => setIsColorModalVisible(false)}
                backdropOpacity={0.2}
                coverScreen={true}
                position={"center"}>

                <Text
                    style={{
                        fontSize: hp(3),
                        fontWeight: "bold",
                        color: myColors.softPurple
                    }}>Note Category</Text>

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

            <Modal
                style={{
                    backgroundColor: "white",
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: hp(25),
                    width: wp(90),
                    borderRadius: 10,
                }}
                isOpen={isDeleteDialogVisible}
                onClosed={() => setIsDeleteDialogVisible(false)}
                backdropOpacity={0.2}
                coverScreen={true}
                position={"center"}>

                <Text
                    style={{
                        width: "70%",
                        textAlign: "center",
                        fontSize: hp(2.5),
                        fontWeight: "bold",
                        color: myColors.softPurple
                    }}>
                    Are you sure you want to delete this note?
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                    }}>

                    <TouchableOpacity
                        onPress={() => {setIsDeleteDialogVisible(false)}}
                        style={{
                            backgroundColor: myColors.logoutColor,
                            padding: hp(1),
                            borderRadius: 10,
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold"
                            }}>
                            Delete
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {setIsDeleteDialogVisible(false)}}
                        style={{
                            backgroundColor: myColors.darkBlueColor,
                            padding: hp(1),
                            borderRadius: 10,
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold"
                            }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                </View>

            </Modal>

        </MainScreen>
    )
}


