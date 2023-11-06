import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { ICON_BACK, AVT, BACKGROUND } from '../../../resource/assets/images'

const PostNew: React.FC = () => {
    const [valueInput, setValueInput] = React.useState('');
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={{ uri: ICON_BACK }} style={styles.icon_back} />
                </TouchableOpacity>
                <Text style={styles.txt_title}>Tạo bài viết</Text>
                <Text style={styles.txt_title1}>.</Text>
            </View>
            {/* AVATAR AND NAME */}
            <View style={styles.info}>
                <Image source={{ uri: AVT }} style={styles.avatar} />
                <Text style={styles.name}>Nguyễn Văn Thông</Text>
            </View>
            {/* INPUT  */}
            <View style={styles.input}>
                <TextInput
                    placeholder='Cảm nghĩ của bạn ?'
                    onChangeText={setValueInput}
                    value={valueInput}
                    style={styles.txt_input}
                    numberOfLines={8}
                    textAlignVertical='top'
                    multiline
                />
            </View>
            {/* BUTTON PICTURE */}
            <View style={styles.btn_pic}>
                <TouchableOpacity style={styles.take_pic}>
                    <Image source={require('../../../container/img/camera.png')} style={styles.imgPic} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.take_pic}>
                    <Image source={require('../../../container/img/image.png')} style={styles.imgPic} />
                </TouchableOpacity>
            </View>
            {/* IMAGE  */}
            <View style={styles.image}>
                <TouchableOpacity style={{ width: '48%' }}>
                    <Image source={{ uri: BACKGROUND }} style={styles.imgStore} />
                </TouchableOpacity>
                <View style={styles.imageLibaryStyle}>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <Image source={{ uri: BACKGROUND }} style={styles.imgStore1} />
                    </TouchableOpacity>
                    <Text style={styles.numberImage}>+1</Text>
                </View>
            </View>
            {/* BUTTON POST */}
            <TouchableOpacity>
                <View style={styles.btn_post}>
                    <Text style={styles.txt_post}>Đăng</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PostNew