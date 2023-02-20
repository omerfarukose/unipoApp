import {View} from 'react-native';
import {MainScreen} from '../components/ui/MainScreen/MainScreen';
import {myStrings} from '../values/Strings/Strings';
import {MyButton} from '../components/ui/Button/MyButton';
import React, {useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {sampleProjectDataList} from '../values/SampleData/SampleData';
import {myColors} from '../values/Colors/Colors';
import {navigate} from './Router/RootNavigation';
import {QrScannerModal} from '../components/ui/Modal/QrScannerModal';
import {MyInput} from '../components/ui/Input/MyInput';
import Feather from 'react-native-vector-icons/Feather';
import {DismissKeyboardView} from '../components/ui/General/DismissKeyboardView';

export const SearchScreen = () => {

    const [isQrScannerVisible, setIsQrScannerVisible] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

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

            <DismissKeyboardView>

                <View
                    style={{
                        flex: 1,
                        padding: hp(1)
                    }}>

                    <View
                        style={{
                            backgroundColor: myColors.pastelFive,
                            padding: hp(1),
                            paddingHorizontal: hp(2),
                            borderRadius: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>

                        <MyInput
                            onSubmit={() => {
                                console.log("test");
                            }}
                            placeholderColor={"white"}
                            placeholder={"Search"}
                            setValue={setSearchValue}
                            value={searchValue}
                            returnKeyType={"search"}
                            style={{
                                fontWeight: "bold",
                                fontSize: hp(2),
                                color: "white",
                            }}/>

                        <Feather name={"search"} size={hp(2.3)} color={"white"} />

                    </View>

                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
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
                </View>

            </DismissKeyboardView>

            <QrScannerModal
                onScanResult={(res) => handleQrResult(res)}
                onClose={() => setIsQrScannerVisible(false)}
                isVisible={isQrScannerVisible}/>

        </MainScreen>
    )
}
