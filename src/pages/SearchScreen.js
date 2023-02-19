import {Text, TouchableOpacity, View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {myStrings} from '../values/Strings/Strings';
import {MyButton} from '../components/ui/Button/MyButton';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {sampleProjectDataList} from '../values/SampleData/SampleData';
import {myColors} from '../values/Colors/Colors';
import {navigate} from './Router/RootNavigation';

export const SearchScreen = () => {

    const [isQrScannerVisible, setIsQrScannerVisible] = useState(false);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjectDataList()
    }, []);

    function handleQrResult(qrData){
        const result = projectList.filter(project => project.qrCode === qrData);

        if (result.length > 0) {
            setIsQrScannerVisible(false)
            navigate("ManageProjectScreen", {item: result[0]})
        }
        else {
            console.log("Project not found !");
        }
    }

    function getProjectDataList(){
        setProjectList(sampleProjectDataList)
    }

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

                <MyButton
                    onButtonClick={() => setIsQrScannerVisible(true)}
                    iconName={"qr-code-sharp"}
                    iconGroup={"Ionicons"}
                    title={"Scan QR"}
                    buttonStyle={{
                        backgroundColor: myColors.darkBlueColor
                    }}
                    textStyle={{
                        marginRight: hp(1),
                    }}/>

            </View>

            <Modal
                isOpen={isQrScannerVisible}
                onClosed={() => setIsQrScannerVisible(false)}
                backdropOpacity={0.2}
                coverScreen={true}
                position={"center"}
                style={{
                    backgroundColor: "white",
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: hp(60),
                    width: wp(100),
                    borderRadius: 10,
                }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        paddingTop: hp(3),
                        fontSize: hp(3),
                        color: myColors.darkPurple,
                        textAlign: "center",
                    }}>

                    Scan Project QR

                </Text>

                <MyButton
                    onButtonClick={() => setIsQrScannerVisible(false)}
                    iconName={"x"}
                    buttonStyle={{
                        right: hp(1),
                        top: hp(1),
                        position: "absolute",
                        alignSelf: "flex-end",
                        height: hp(4),
                        width: hp(4),
                        backgroundColor: myColors.logoutColor,
                    }}/>

                <QRCodeScanner
                    cameraProps={{ratio: "1:1"}}
                    vibrate={true}
                    fadeIn={true}
                    cameraTimeout={0}
                    onRead={(e) => handleQrResult(e.data)}/>

            </Modal>

        </MainScreen>
    )
}
