import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import ItemAddressSearch from "./ItemAddressSearch";

const ListSearchAddress = ({results,textSearch}) => {
  return (
    <FlatList
      data={results}
      renderItem={(item) => <ItemAddressSearch textSearch={textSearch} item={item.item} />}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => {
        if ( textSearch === "") {
          return (
            <View>
                <Image
                    source={require("../images/image.png")}
                    style={globalStyles.imgEmptyComponent}/>
                <Text style={globalStyles.textNotification}>Please enter an address to search.</Text>
            </View>
          );
        } 
        if(textSearch.length > 0 && results.length ==0) {
          return (
            <View>
                <Image
                    source={require("../images/nolocation.png")}
                    style={globalStyles.imgEmptyComponent}/>
                <Text style={[globalStyles.textNotification,{color:'red'}]}>No search results found.</Text>
            </View>
          );
        }
      }}
    />
  );
};

export default ListSearchAddress;
