import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../../values/Colors/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import * as React from 'react';
import {navigate} from '../../Router/RootNavigation';
import {sampleNoteDataList} from '../../../values/SampleData/SampleData';
import {useEffect, useState} from 'react';

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
                    }} />

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

            <TouchableOpacity
                style={{
                    alignSelf: "flex-end",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: myColors.pastelFour,
                    padding: hp(1),
                    width: hp(15),
                    borderRadius: 10,
                    margin: hp(1),
                    marginBottom: 0,
                }}>

                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold"
                    }}>

                    New Note

                </Text>

                <Feather name={"plus"} size={hp(3)} color={"white"} />

            </TouchableOpacity>

            <FlatList
                data={noteList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => _renderNoteItem(item, index)}/>

        </MainScreen>
    )
}
