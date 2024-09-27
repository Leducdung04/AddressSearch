import { ActivityIndicator, Dimensions, FlatList, Image, SafeAreaView, View} from 'react-native'
import ItemAddressSearch from '../components/ItemAddressSearch';
import useAddressSearch from '../viewmodels/AddressSearchViewModel';
import SearchAddress from '../components/SearchAddress';
import { globalStyles } from '../styles/globalStyles';
import ListSearchAddress from '../components/ListSearchAddress';
import { useEffect } from 'react';

const AddressSearchScreen = () => {
    const  {textSearch,onChangeTextSearch,results,isloading} = useAddressSearch()
    
    return (
        <View style={globalStyles.container}>
            <SearchAddress textSearch={textSearch} isloading={isloading} onChangeTextSearch={onChangeTextSearch}/>
            <ListSearchAddress textSearch={textSearch} results={results}/> 
        </View>
    )
}

export default AddressSearchScreen