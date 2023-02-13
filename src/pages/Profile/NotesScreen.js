import {Text} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';

export const NotesScreen = (props) => {
    return(
        <MainScreen
            {...props}
            title={"Notes"}>

            <Text>
                NotesScreen
            </Text>

        </MainScreen>
    )
}
