import {FlatList, ScrollView, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ProjectCard} from '../../components/ui/Card/ProjectCard';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../values/Colors/Colors';
import {myStrings} from '../../values/Strings/Strings';
import {useEffect, useState} from 'react';
import {sampleProjectDataList} from '../../values/SampleData/SampleData';
import * as React from 'react';

export const HomeScreen = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjectList()
    }, []);

    function getProjectList(){
        setProjectList(sampleProjectDataList)
    }

    return(
        <MainScreen
            style={{
                backgroundColor: myColors.pastelFive
            }}>

            <FlatList
                data={projectList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => ProjectCard(item, index)}/>

        </MainScreen>
    )
}
