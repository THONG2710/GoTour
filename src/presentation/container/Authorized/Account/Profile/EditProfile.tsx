import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Shadow } from 'react-native-shadow-2'
import { TEXT_BUTTON_EDITPROFILE_VN, TEXT_TITLE_EDITPROFILE_VN } from '../../../EditProfile/Text/TextEditProfileVN'
import ViewForm from '../../../../component/Input/InputField'
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import Ripple from 'react-native-material-ripple'
import { TEXT_BUTTON_EDITPROFILE_EG } from '../../../EditProfile/Text/TextEditProfileEG'

const Editprofile = () => {
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Female',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Male',
            value: 'option2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
        // CONTAINER
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#FF380D', '#F9B889', '#FFEBDD']}>
                <View>
                    <Image style={styles.imgAvatar} source={require('../../../resource/assets/images/avtUser.png')}></Image>
                    <Image style={styles.chooseAvatar} source={require('../../../resource/assets/images/chooseAVT.png')}></Image>
                </View>
                <Text style={styles.textHeader}>Nguyễn Trường</Text>
            </LinearGradient>

            {/* FOOTER FORM */}
            <View style={styles.footer}>
                <Text style={styles.textTitle}>{TEXT_TITLE_EDITPROFILE_VN}</Text>
                <ViewForm image={require('../../../resource/assets/images/edtUsername.png')} placeholder='Enter Your Name'></ViewForm>
                <ViewForm image={require('../../../resource/assets/images/email.png')} placeholder='Enter Your Email'></ViewForm>
                <ViewForm image={require('../../../resource/assets/images/code.png')} placeholder='Enter Your Code'></ViewForm>
                <ViewForm image={require('../../../resource/assets/images/address.png')} placeholder='Enter Your Address'></ViewForm>
                <RadioGroup
                    containerStyle={{ marginLeft: 10, marginTop: 10 }}
                    layout='row'
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />
                <Ripple style={styles.gr_button} rippleCentered={true} rippleDuration={600} rippleContainerBorderRadius={10}>
                    <LinearGradient style={styles.button} colors={['#FF380D', '#F9B889', '#FFEBDD']}>
                        <Text style={styles.textButton}>{TEXT_BUTTON_EDITPROFILE_VN}</Text>
                    </LinearGradient>

                </Ripple>
            </View>



        </View>
    )
}

export default Editprofile

const styles = StyleSheet.create({
    // CONTAINER
    container:
    {
        flex: 1,
        backgroundColor: '#FBF7F7'
    },

    header:
    {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgAvatar:
    {
        width: 100,
        height: 100,
        position: 'relative',
    },

    chooseAvatar:
    {
        position: 'absolute',
        bottom: 1,
        right: 5

    },

    textHeader:
    {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20
    },


    // {/* FOOTER FORM */}

    footer:
    {
        flex: 0.65,
        marginHorizontal: 25,
        marginTop: -30,
        shadowColor: '#000',
        elevation: 20,
        backgroundColor: '#fff'
    },

    textTitle:
    {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000'
    },

    input:
    {
        borderWidth: 1,
        marginHorizontal: 20,
        height: 45,
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 40,
        backgroundColor: '#FFFBFB',
        borderColor: '#ccc',
        position: 'relative',

    },

    iconIP:
    {
        position: 'absolute',
        top: 70,
        zIndex: 1,
        left: 30,
        width: 20,
        height: 20
    },

    gr_button:
    {
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        marginHorizontal:35,
        marginTop:20
    },

    button:
    {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width:'100%',
        borderRadius: 20,
    },

    textButton:
    {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20
    }
})