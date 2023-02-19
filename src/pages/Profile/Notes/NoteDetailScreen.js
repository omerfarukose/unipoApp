import React , {useEffect, useState} from 'react';
import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MyButton} from '../../../components/ui/Button/MyButton';
import {MyInput} from '../../../components/ui/Input/MyInput';
import {NoteCategoryModal} from '../../../components/ui/Modal/NoteCategoryModal';
import {NoteCategoryButton} from '../../../components/ui/Button/NoteCategoryButton';
import {myStrings} from '../../../values/Strings/Strings';
import {MyModal} from '../../../components/ui/Modal/MyModal';

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

                        <NoteCategoryButton
                            selectedCategory={selectedNoteCategory}
                            onButtonPress={() => setIsColorModalVisible(true)}/>

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

            <MyModal
                isVisible={isDeleteDialogVisible}
                onClose={() => setIsDeleteDialogVisible(false)}
                title={myStrings.dialog.deleteNote}
                leftButtonText={myStrings.button.delete}
                rightButtonText={myStrings.button.cancel}
                rightButtonClick={() => {setIsDeleteDialogVisible(false)}}
                leftButtonClick={() => {setIsDeleteDialogVisible(false)}}
                containerStyle={{
                    backgroundColor: "white",
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: hp(20),
                    width: wp(90),
                    borderRadius: 10,
                }}/>

        </MainScreen>
    )
}


