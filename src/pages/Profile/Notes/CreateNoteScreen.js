import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {myStrings} from '../../../values/Strings/Strings';
import {View} from 'react-native';
import {MyInput} from '../../../components/ui/Input/MyInput';
import React, {useState} from 'react';
import {DismissKeyboardView} from '../../../components/ui/General/DismissKeyboardView';
import {NoteCategoryModal} from '../../../components/ui/Modal/NoteCategoryModal';
import {NoteCategoryButton} from '../../../components/ui/Button/NoteCategoryButton';
import {MyButton} from '../../../components/ui/Button/MyButton';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {myColors} from '../../../values/Colors/Colors';

export const CreateNoteScreen = () => {

    const [isColorModalVisible, setIsColorModalVisible] = useState(false);
    const [selectedNoteCategory, setSelectedNoteCategory] = useState(0);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDescription, setNoteDescription] = useState("");

    return(
        <MainScreen title={myStrings.screenTitle.createNote}>

            <DismissKeyboardView>

                {/*buttons view*/}
                <View
                    style={{
                        flexDirection: "row",
                        padding: hp(1),
                        justifyContent: "space-between"
                    }}>

                    {/*category & cancel button*/}
                    <View
                        style={{
                            flexDirection: "row",
                            alignSelf: "flex-start"
                        }}>

                        <NoteCategoryButton
                            selectedCategory={selectedNoteCategory}
                            onButtonPress={() => setIsColorModalVisible(true)}/>

                        <MyButton
                            title={myStrings.button.cancel}
                            buttonStyle={{
                                alignSelf: "flex-end",
                                height: hp(6),
                                backgroundColor: myColors.logoutColor,
                            }}/>

                    </View>

                    {
                        noteTitle &&
                        <MyButton
                            title={myStrings.button.save}
                            buttonStyle={{
                                paddingHorizontal: hp(2),
                                marginRight: hp(1),
                                height: hp(6),
                                backgroundColor: myColors.pastelFour,
                            }}/>
                    }

                </View>

                {/*input view*/}
                <View
                    style={{
                        marginTop: hp(3),
                    }}>

                    <MyInput
                        value={noteTitle}
                        setValue={setNoteTitle}
                        placeholder={myStrings.placeholder.noteTitle}
                        style={{
                            fontSize: hp(3.4),
                            fontWeight: "bold"
                        }}/>

                    <MyInput
                        value={noteDescription}
                        setValue={setNoteDescription}
                        placeholder={myStrings.placeholder.noteDescription}
                        style={{
                            fontSize: hp(2.5),
                        }}/>

                </View>

            </DismissKeyboardView>

            <NoteCategoryModal
                isVisible={isColorModalVisible}
                onClose={() => setIsColorModalVisible(false)}
                onItemClick={(type) => setSelectedNoteCategory(type)}/>

        </MainScreen>
    )
}
