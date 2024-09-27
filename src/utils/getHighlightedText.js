import { Text } from "react-native";

export const getHighlightedText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi')); // Phân tách theo query, không phân biệt chữ hoa chữ thường
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <Text key={index+1} style={{ color: 'black',fontWeight:'bold' }}>{part}</Text> // Đổi màu cho phần chứa query
      ) : (
        <Text key={index+1}>{part}</Text> 
      )
    );
}

