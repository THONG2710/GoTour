import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const NewsDetail = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={data.img} />
                <Text style={styles.txtTittle}>{data.title}</Text>
                <Text style={styles.txtDate}>{data.date}</Text>
                <Text style={styles.txtDetail}>{data.detail}</Text>
            </View>
        </ScrollView>

    );
};


export default NewsDetail;
const data = 
    {
        id: 1,
        img: require("../resource/images/new1.webp"),
        date: '12/12/2021',
        title: 'Kỳ nghỉ lễ 2/9 kéo dài 4 ngày là thời điểm thích hợp để có nhưng chuyến du lịch ngắn ngày',
        detail: `TPO - Công chúa Haifa bint Mohammed Al-Saud cho biết, Ả-rập Xê-út đang xem xét việc cấp visa điện tử cho du khách đến từ Việt Nam, đồng thời hy vọng sẽ sớm thiết lập đường bay thẳng giữa hai nước để thúc đẩy hợp tác du lịch.
    Trong khuôn khổ chuyến thăm Ả-rập Xê-út của Thủ tướng Phạm Minh Chính, chiều 9/10, Bộ Văn hóa, Thể thao và Du lịch Việt Nam và Bộ Du lịch Ả-rập Xê-út đã ký kết “Chương trình hành động trong lĩnh vực du lịch” giữa hai bộ.
    Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch Nguyễn Văn Hùng cho biết, Việt Nam luôn mong muốn tăng cường hợp tác quốc tế để xây dựng và phát triển chuỗi giá trị du lịch Halal phù hợp với thị hiếu khách du lịch đến từ cộng đồng các nước Hồi giáo, đồng thời đẩy mạnh xúc tiến du lịch Việt Nam tại các nước như Ả-rập Xê-út.
Bộ trưởng đề xuất Ả-rập Xê-út hỗ trợ Việt Nam về thị hiếu du khách và thị trường Halal, xây dựng tiêu chuẩn, quy chuẩn về du lịch Halal, cũng như giới thiệu các thương hiệu nổi tiếng của Ả-rập Xê-út vào đầu tư, hoạt động tại Việt Nam. Bộ VHTT&DL sẵn sàng làm đầu mối kết nối các nhà đầu tư, doanh nghiệp Ả-rập Xê-út với các danh mục đầu tư trong lĩnh vực du lịch tại các địa phương của Việt Nam.`
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 10,
    },
    txtTittle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        marginTop: 10,
        textAlign: 'justify',

        
    },
    txtDate: {
        color: 'blue',
        fontSize: 15,
        
    },
    txtDetail: {
        marginTop: 10,
        color: 'black',
        textAlign: 'justify',
        fontWeight: '500',
        fontSize: 15,
    }
});
