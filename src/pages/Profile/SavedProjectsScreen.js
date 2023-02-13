import {Text} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';

export const SavedProjectsScreen = (props) => {
    return(
        <MainScreen
            {...props}
            title={"Saved"}>

            <Text>
                SavedProjectsScreen
            </Text>

        </MainScreen>
    )
}
