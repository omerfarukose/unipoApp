import {Text, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';

export const CreateProjectScreen = () => {
    return(
        <MainScreen
            title={"Create Project"}
            backButton={false}>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <Text>

                    Create Project Screen

                </Text>

            </View>

        </MainScreen>
    )
}
