import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import {myColors} from '../../values/Colors/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {navigate} from '../Router/RootNavigation';
import {useEffect, useState} from 'react';
import {sampleProjectDataList} from '../../values/SampleData/SampleData';

export const ProjectsScreen = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjectList()
    }, []);

    function getProjectList(){
        setProjectList(sampleProjectDataList)
    }

    const _renderProjectItem = (item, index) => {
        return(
            <TouchableOpacity
                onPress={() => navigate("ManageProjectScreen", {item: item})}
                style={{
                    backgroundColor: myColors.pastelFive,
                    marginHorizontal: hp(1),
                    marginTop: hp(1),
                    padding: hp(1),
                    borderRadius: 10,
                    flexDirection: "row",
                }}>

                <Image
                    style={{
                        height: hp(8),
                        width: hp(8),
                        borderRadius: 99,
                        borderColor: "white",
                        borderWidth: hp(0.3),
                        overflow: "hidden"
                    }}
                    source={require('../../assets/images/bitmo-img.png')}/>

                <View
                    style={{
                        marginLeft: hp(1),
                        justifyContent: "space-evenly",
                        flex: 1,
                    }}>

                    <Text style={{color: "white", fontWeight:"bold", fontSize: hp(2)}}>

                        { item.projectName }

                    </Text>

                    <Text style={{color: "white", fontWeight:"bold", fontSize: hp(1.8)}}>

                        { item.ownerUniversity }

                    </Text>
                </View>

                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Feather name={"chevron-right"} size={hp(5)} color={"white"} />
                </View>

            </TouchableOpacity>
        )
    }

    return(
        <MainScreen
            title={'Projects'}>

            <FlatList
                data={projectList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => _renderProjectItem(item, index)}/>

        </MainScreen>
    )
}
