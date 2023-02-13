import {Text} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';

export const TasksScreen = (props) => {
    return(
        <MainScreen
            {...props}
            title={"Tasks"}>

            <Text>
                TasksScreen
            </Text>

        </MainScreen>
    )
}
