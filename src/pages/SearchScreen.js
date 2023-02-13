import {Text, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';

export const SearchScreen = () => {
    return(
        <MainScreen
            goBack={false}
            title={"Search"}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>SearchScreen</Text>

            </View>
        </MainScreen>
    )
}
