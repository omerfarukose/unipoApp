import React , {useEffect, useState} from 'react';
import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Modal from 'react-native-modalbox';
import {MyButton} from '../../../components/ui/Button/MyButton';
import {MyInput} from '../../../components/ui/Input/MyInput';
import {NoteCategoryModal} from '../../../components/ui/Modal/NoteCategoryModal';

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

    return(
        <MainScreen
            title={"Note Detail"}>

            {/*dismiss keyboard*/}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={{ flex:1  }}>

                    {/*buttons view*/}
                    <View
                        style={{
                            margin: hp(2),
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}>

                        {/*category button*/}
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
                                }}/>

                        </TouchableOpacity>

                        {/*delete button*/}
                        <MyButton
                            onButtonClick={() => setIsDeleteDialogVisible(true)}
                            iconName={"trash"}
                            iconSize={3}
                            buttonStyle={{
                                backgroundColor: myColors.logoutColor,
                                width: hp(6),
                                height: hp(6),
                            }}/>

                    </View>

                    {/*title input*/}
                    <MyInput
                        value={title}
                        setValue={setTitle}
                        style={{
                            fontWeight:"bold",
                            fontSize: hp(3),
                            color: myColors.softPurple
                        }}/>

                    {/*description input*/}
                    <MyInput
                        value={description}
                        setValue={setDescription}
                        style={{
                            fontSize: hp(2),
                            color: myColors.softPurple
                        }}/>

                </View>

            </TouchableWithoutFeedback>

            <NoteCategoryModal
                isVisible={isColorModalVisible}
                onClose={() => setIsColorModalVisible(false)}
                onItemClick={(type) => setSelectedNoteCategory(type)}/>

        </MainScreen>
    )
}


