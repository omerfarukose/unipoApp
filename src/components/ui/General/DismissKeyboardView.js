import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';

export const DismissKeyboardView = (props) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{ flex:1  }}>

                { props.children }

            </View>

        </TouchableWithoutFeedback>
    )
}
