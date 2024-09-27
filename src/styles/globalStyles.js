import { Dimensions, StyleSheet} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff',
    },
    img:{
        width:200,
        height:200,
        alignSelf:'center',
        marginTop:-50,
        marginBottom:100
    },
    imgEmptyComponent:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:40
    },
    item:{
        flexDirection:'row',
        marginVertical:8,
        padding:12,
        marginHorizontal:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
    conten:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        color:'gray',
        marginStart:12,
        maxWidth:300,
    },
    iconClose:{
        position: 'absolute',
        right: 12
    },
    searchContainer:{
        flexDirection:'row',
        height:50,
        marginTop:50,
        marginBottom:24,
        marginHorizontal:32,
        paddingHorizontal:24,
        borderRadius:24,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor:'gray',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        shadowRadius:4,
        elevation: 5,
    },
    searchInput:{
        marginHorizontal:12,
        fontSize:16,
    },
    textNotification:{
        textAlign:'center',
        marginTop:12
    }
})