import {Text, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';

export const CreateProjectScreen = () => {
    return(
        <MainScreen
            goBack={false}
            title={"Create Project"}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>CreateProjectScreen</Text>

            </View>
        </MainScreen>
    )
}
