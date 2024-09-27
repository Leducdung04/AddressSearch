import { Linking } from "react-native";
import {API_URL_Map} from "@env"

export const openInGoogleMaps =async (Position) => {
    const url = `${API_URL_Map}/dir/?api=1&destination=${Position.lat},${Position.lng}&directionsmode=driving`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
          await Linking.openURL(url);
      } else {
          console.error("Không thể mở Google Maps");
      }
  } catch (error) {
      console.error("Lỗi khi mở Google Maps: ", error);
  }
  };