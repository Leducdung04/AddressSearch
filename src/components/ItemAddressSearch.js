import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { openInGoogleMaps } from '../utils/LingkingMap';
import Position from '../model/position';
import { globalStyles } from '../styles/globalStyles';
import { getHighlightedText } from '../utils/getHighlightedText';

const ItemAddressSearch = ({item,textSearch}) => {
    const addressPosition = new Position(item?.position.lat,item?.position.lng)

  return (
    <View style={globalStyles.item}>
        <View style={globalStyles.conten}>
            <Ionicons name='location' size={24} color={'gray'}/>
            <Text style={globalStyles.title}>{getHighlightedText(item?.title,textSearch)}</Text>
        </View>
        
        <TouchableOpacity onPress={() => openInGoogleMaps(addressPosition)}>
            <FontAwesome6 name="diamond-turn-right" size={22} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default ItemAddressSearch
