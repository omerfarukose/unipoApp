import {MainScreen} from '../../components/ui/MainScreen/MainScreen';
import {myStrings} from '../../values/Strings/Strings';
import {Text} from 'react-native';

export const ManageProjectScreen = ( ) => {
    return(
        <MainScreen
            title={myStrings.screenTitle.manageProject}>

            <Text>
                Manage Project
            </Text>

        </MainScreen>
    )
}
