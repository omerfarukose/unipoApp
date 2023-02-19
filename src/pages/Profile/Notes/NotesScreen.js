import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import {navigate} from '../../Router/RootNavigation';
import {sampleNoteDataList} from '../../../values/SampleData/SampleData';
import {useEffect, useState} from 'react';
import {myStrings} from '../../../values/Strings/Strings';
import {MyButton} from '../../../components/ui/Button/MyButton';

export const NotesScreen = () => {

    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        _getNoteList();
    }, []);

    const _getNoteList = ( ) => {
        setNoteList(sampleNoteDataList);
    }

    const _renderNoteItem = ( item, index ) => {

        let categoryIndex = item.category

        return(
            <TouchableOpacity
                onPress={() => navigate("NoteDetailScreen", {item: item})}
                style={{
                    backgroundColor: myColors.pastelFive,
                    marginHorizontal: hp(1),
                    marginTop: hp(1),
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                <View
                    style={{
                        backgroundColor: myColors.noteCategoryColors[categoryIndex],
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        height: "100%",
                        width: hp(2),
                    }}/>

                <Text
                    style={{
                        flex: 1,
                        fontSize: hp(2),
                        color: "white",
                        fontWeight: "bold",
                        padding: hp(1),
                    }}>

                    { item.title }

                </Text>


            </TouchableOpacity>
        )
    }

    return(
        <MainScreen
            title={"Notes"}>

            <MyButton
                onButtonClick={() => navigate("CreateNoteScreen")}
                title={myStrings.button.newNote}
                iconName={"plus"}
                iconSize={3}
                textStyle={{
                    marginRight: hp(1),
                    color: "white",
                    fontWeight: "bold",
                    fontSize: hp(1.7),
                }}
                buttonStyle={{
                    backgroundColor: myColors.pastelFour,
                    width: hp(15),
                    margin: hp(1),
                    marginBottom: 0,
                    alignSelf: "flex-end",
                }}/>

            <FlatList
                data={noteList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => _renderNoteItem(item, index)}/>

        </MainScreen>
    )
}
