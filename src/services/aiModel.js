import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Tạo Kế hoạch Du lịch cho Địa điểm: Huế, trong 3 Ngày dành cho Cặp đôi với Ngân sách Tiết kiệm. Cho tôi danh sách các lựa chọn Khách sạn gồm: Tên khách sạn, Địa chỉ khách sạn, Giá, URL hình ảnh khách sạn, Tọa độ địa lý, Đánh giá, Mô tả và đề xuất lịch trình gồm: Tên địa điểm, Chi tiết địa điểm, URL hình ảnh địa điểm, Tọa độ địa lý, Giá vé, Đánh giá, Thời gian di chuyển đến từng địa điểm trong 3 ngày, với kế hoạch từng ngày kèm thời điểm tốt nhất để tham quan, dưới định dạng JSON.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            destination: "Las Vegas",
            duration: "3 Ngày",
            travelers: "Cặp đôi",
            budget: "Tiết kiệm",
            hotels: [
              {
                name: "Excalibur Hotel & Casino",
                address: "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
                price: "$40 - $90/đêm",
                image_url:
                  "https://images.unsplash.com/photo-1581351721010-8cf859cb61e4",
                geo_coordinates: {
                  latitude: 36.1017,
                  longitude: -115.1754,
                },
                rating: "3.8/5",
                description:
                  "Khách sạn theo chủ đề lâu đài trung cổ nằm ngay tại trung tâm The Strip, giá cả phải chăng, vị trí thuận lợi để đi bộ khám phá.",
              },
              {
                name: "Flamingo Las Vegas Hotel & Casino",
                address: "3555 S Las Vegas Blvd, Las Vegas, NV 89109",
                price: "$50 - $110/đêm",
                image_url:
                  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
                geo_coordinates: {
                  latitude: 36.1154,
                  longitude: -115.1702,
                },
                rating: "3.9/5",
                description:
                  "Khách sạn phong cách nhiệt đới kinh điển, nổi tiếng với khu vườn hồng Flamingo Wildlife Habitat miễn phí và vị trí trung tâm sầm uất.",
              },
            ],
            itinerary: {
              day_1: {
                theme: "Khám phá The Strip Cổ điển & Lãng mạn",
                best_time_to_visit: "Chiều và Tối",
                activities: [
                  {
                    place_name: "Bellagio Conservatory & Botanical Gardens",
                    details:
                      "Khu vườn kính trong nhà với các tác phẩm điêu khắc hoa theo mùa tuyệt đẹp, hoàn hảo cho các cặp đôi chụp ảnh kỷ niệm.",
                    image_url:
                      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
                    geo_coordinates: {
                      latitude: 36.1126,
                      longitude: -115.1767,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.8/5",
                    travel_time_from_previous:
                      "Xuất phát từ khách sạn (Đi bộ khoảng 10-15 phút)",
                  },
                  {
                    place_name: "Fountains of Bellagio",
                    details:
                      "Thưởng thức màn trình diễn nhạc nước đỉnh cao, kết hợp ánh sáng và âm nhạc vô cùng lãng mạn về đêm.",
                    image_url:
                      "https://images.unsplash.com/photo-1518684079-3c830dcef090",
                    geo_coordinates: {
                      latitude: 36.1125,
                      longitude: -115.1741,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.9/5",
                    travel_time_from_previous:
                      "Đi bộ 2 phút từ vườn hoa Bellagio",
                  },
                  {
                    place_name: "Paris Las Vegas (Khu vực Tháp Eiffel giả)",
                    details:
                      "Đi dạo qua các con phố mang phong cách Paris lãng mạn, ngắm nhìn bản sao tháp Eiffel lên đèn lung linh.",
                    image_url:
                      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5",
                    geo_coordinates: {
                      latitude: 36.1125,
                      longitude: -115.1707,
                    },
                    ticket_price: "Miễn phí (chụp ảnh bên ngoài)",
                    rating: "4.5/5",
                    travel_time_from_previous: "Đi bộ qua đường khoảng 7 phút",
                  },
                ],
              },
              day_2: {
                theme: "Vẻ đẹp Tự nhiên & Downtown Fremont",
                best_time_to_visit: "Sáng sớm và Đêm",
                activities: [
                  {
                    place_name: "Seven Magic Mountains",
                    details:
                      "Khu nghệ thuật thị giác ngoài sa mạc với những cột đá đầy màu sắc rực rỡ, điểm sống ảo không thể bỏ qua cho cặp đôi.",
                    image_url:
                      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
                    geo_coordinates: {
                      latitude: 35.8394,
                      longitude: -115.2536,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.4/5",
                    travel_time_from_previous:
                      "Lái xe khoảng 25-30 phút từ trung tâm Strip",
                  },
                  {
                    place_name: "Fremont Street Experience",
                    details:
                      "Khu phố cổ Las Vegas với mái vòm màn hình LED khổng lồ, âm nhạc đường phố sôi động và các nghệ sĩ biểu diễn tự do.",
                    image_url:
                      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
                    geo_coordinates: {
                      latitude: 36.1699,
                      longitude: -115.1408,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.6/5",
                    travel_time_from_previous:
                      "Lái xe khoảng 20 phút từ Seven Magic Mountains về Downtown",
                  },
                ],
              },
              day_3: {
                theme: "Thư giãn & Check-in Biểu tượng Las Vegas",
                best_time_to_visit: "Buổi sáng",
                activities: [
                  {
                    place_name: "Flamingo Wildlife Habitat",
                    details:
                      "Khám phá khu vườn xanh mát ngay trong khách sạn Flamingo với những chú hồng hạc thực sự, cá Koi và chim cánh cụt.",
                    image_url:
                      "https://images.unsplash.com/photo-1470246973918-29a93221c455",
                    geo_coordinates: {
                      latitude: 36.1154,
                      longitude: -115.1712,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.5/5",
                    travel_time_from_previous:
                      "Xuất phát từ khách sạn (Đi bộ hoặc di chuyển ngắn)",
                  },
                  {
                    place_name: "Welcome to Fabulous Las Vegas Sign",
                    details:
                      "Biển chào mừng huyền thoại của Las Vegas, địa điểm bắt buộc phải có một bức ảnh kỷ niệm cho chuyến đi.",
                    image_url:
                      "https://images.unsplash.com/photo-1581351721010-8cf859cb61e4",
                    geo_coordinates: {
                      latitude: 36.0837,
                      longitude: -115.1706,
                    },
                    ticket_price: "Miễn phí",
                    rating: "4.7/5",
                    travel_time_from_previous:
                      "Đi xe buýt Deuce hoặc lái xe khoảng 10 phút về phía Nam The Strip",
                  },
                ],
              },
            },
          }),
        },
      ],
    },
  ],
});

export async function generateTripWithAI(DYNAMIC_PROMPT) {
  try {
    const result = await chat.sendMessage(DYNAMIC_PROMPT);

    const textResponse = result.response.text();

    const cleanJson = textResponse.replace(/```json|```/g, "").trim();
    console.log(cleanJson);
  } catch (error) {
    console.error("Error generating trip: ", error);
    throw error;
  }
}
