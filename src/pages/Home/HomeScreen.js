import { ScrollView, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ProjectCard} from '../../components/ui/Card/ProjectCard';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myColors} from '../../values/Colors/Colors';

export const HomeScreen = () => {

    return(
        <MainScreen
            style={{
                backgroundColor: myColors.pastelFive
            }}>

            <ScrollView>

                <Text
                    style={{
                        fontSize: hp(4),
                        fontWeight: "bold",
                        margin: hp(1),
                        color: "white"
                    }}>

                    Projects you might be interested in

                </Text>

                <ProjectCard type={1}/>
                <ProjectCard type={2}/>
                <ProjectCard type={3}/>
                <ProjectCard type={4}/>
                <ProjectCard type={5}/>
                <ProjectCard type={6}/>

            </ScrollView>
        </MainScreen>
    )
}
