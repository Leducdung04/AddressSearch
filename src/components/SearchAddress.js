import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalStyles } from '../styles/globalStyles';

const SearchAddress = ({isloading,textSearch,onChangeTextSearch}) => {
  return (
    <View style={globalStyles.searchContainer}>
             {  
                isloading ?  
                <ActivityIndicator size={25} color="green" /> 
                :<Ionicons name='search' size={25} color='gray'/>
            }
            <TextInput
                style={globalStyles.searchInput}
                placeholder='Enter keywords'
                numberOfLines={1}
                value={textSearch} 
                onChangeText={(text)=>onChangeTextSearch(text)}
                />
            {
                textSearch.length > 0 &&
                <TouchableOpacity onPress={() => onChangeTextSearch('')} style={globalStyles.iconClose} >
                    <Ionicons name='close-circle' size={25} color='gray'/>
                </TouchableOpacity>
            }
        </View>
  )
}

export default SearchAddress
