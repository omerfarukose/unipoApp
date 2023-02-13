import {Text} from 'react-native';
import {MainScreen} from '../../components/ui/MainScreen/MainScreen';

export const InvitesScreen = (props) => {
    return(
        <MainScreen
            {...props}
            title={"Invites"}>

            <Text>
                InvitesScreen
            </Text>

        </MainScreen>
    )
}
