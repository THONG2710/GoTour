import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { TOURPLACE } from '../../../../resource/assets/images'




const IntroduceScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <Image source={{uri: TOURPLACE}} style={styles.imgBackround} />
            <View style={styles.slogan}>
                <Text style={styles.text1}>GoTour</Text>
                <Text style={styles.text2}>Du lịch khắp Việt Nam</Text>
            </View>
            {/* BODY */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Giới thiệu về chúng tôi</Text>
            <View style={styles.content}>
                <Text>
                    Nếu trước đây khi đi du lịch chúng ta phải mò mẫm mua vé máy bay, vé xe, khách sạn,
                    tour tham quan… theo cách thủ công rất tốn thời gian, công sức thì bây giờ mọi việc
                    đơn giản hơn rất nhiều khi có sự xuất hiện của app book tour du lịch. Nhờ ứng dụng
                    công nghệ số, những app này hỗ trợ người dùng book phương tiện di chuyển và nơi lưu
                    trú một cách tiện lợi mà giá cả lại vô cùng phải chăng. F
                </Text>
                <Text>
                    Nếu là một người mê xê dịch, hay đi đây đi đó thì bạn nhất định không được bỏ qua chúng tôi.
                    Cách thức tiện lợi: Các ứng dụng book tour cho phép người dùng thao tác dễ dàng trên điện thoại.
                    Vì là app hỗ trợ trên mobile nên giao diện được thiết kế rất trực quan, phù hợp cho người dùng.
                    Bên cạnh đó có thể tải app trên cả hệ điều hành Android lẫn iOS.
                </Text>
                <Text>
                    Dễ dàng theo dõi: Các app đặt tour du lịch luôn gửi xác nhận về điện thoại hoặc email cho khách hàng.
                    Nhờ đó bạn có thể dễ dàng theo dõi và quản lý. Ví dụ khi book khách sạn sẽ có xác nhận gửi về email,
                    vào ngày nhận phòng bạn chỉ cần đưa xác nhận cho nhân viên check-in để được hỗ trợ.
                </Text>
                <Text>
                    Tiết kiệm chi phí: Book vé du lịch qua app tiết kiệm hơn khi bạn book thủ công vì các ứng dụng có
                    thể so sánh giá để giúp bạn có lựa chọn rẻ nhất. Ngoài ra những nền tảng ứng dụng thường xuyên có
                    chương trình khuyến mãi hoặc chiết khấu cho khách hàng thân thiết.
                </Text>
                <Text>
                    Tự động hóa thanh toán: Bạn không cần phải thanh toán bằng tiền mặt hay trực tiếp.
                    Tất cả các bước đều tự động hóa, bạn có thể chọn các phương thức thanh toán qua tài khoản ngân hàng, ví điện tử…
                </Text>
                <Text>
                    Đa dạng dịch vụ: Trên một nền tảng ứng dụng thường cung cấp cho khách hàng đầy đủ về
                    các dịch vụ du lịch như vé máy bay, vé tàu xe, khách sạn, homestay, tour tham quan… Nói chung là từ A đến Z.
                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default IntroduceScreen