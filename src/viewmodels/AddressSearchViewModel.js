import React, { useEffect, useState } from 'react'
import { debounce } from '../utils/debounce';
import { searchAddress } from '../services/api';

const useAddressSearch = () => {
    const [textSearch, setTextSearch] = useState('');  // text search
    const [results, setResults] = useState([]); //  search results list
    const [isloading, setLoading] = useState(false) 


   const onChangeTextSearch =(text)=>{
         setTextSearch(text)
    }
   const getAddressSearch = async () => {
    // kiểm tra nếu query rông trả về []
    if(textSearch === ''){
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true);  // cập nhật trạng thái get data
    const items = await searchAddress(textSearch);  // fetch results
    setResults(items);
    setLoading(false);
   }
   // debounce cho phép  gọi hàm searchAddress khi thời gian giữa 2 lần search thấp hơn 1s
    const handleSearch = debounce(getAddressSearch, 1000);
  
    useEffect(() => {
      handleSearch()
    }, [textSearch]);
  
    return {textSearch,results,isloading,onChangeTextSearch};
}
export default useAddressSearch