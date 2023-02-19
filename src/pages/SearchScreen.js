import {Text, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {myStrings} from '../values/Strings/Strings';

export const SearchScreen = () => {
    return(
        <MainScreen
            title={myStrings.screenTitle.search}
            backButton={false}>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <Text>

                    Search Screen

                </Text>

            </View>

        </MainScreen>
    )
}
