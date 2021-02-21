import {StyleSheet} from 'react-native';
import colors from '../../../config/colors'


export default StyleSheet.create({
    container: {
      width: "100%",
      height: 110,
      flexDirection: "row",
      marginVertical: 5,
      borderRadius: 15,
      overflow: "hidden",
      padding: 5,
      backgroundColor: colors.white,
      borderColor: colors.gray,
      borderWidth:1
    },
    Image: {
      height: "100%",
      width: "30%",
      borderRadius: 15,
    },
    content: {
      padding: 10,
      width: "70%",
      justifyContent:'center'
    },
    SeeMore:{
      backgroundColor:colors.gray,
      justifyContent:'center',
      alignItems:'center',
      height:100,
      width:'100%',
      borderRadius:25,
      marginVertical: 5,
    }
  });