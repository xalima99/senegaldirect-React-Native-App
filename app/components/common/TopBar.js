import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../config/colors';
import Title from './Title';

const TopBar = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="menu-unfold" size={25} color="black" />
            <Title>News</Title>
            <AntDesign name="search1" size={25} color={colors.black} />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: colors.white
    }
})
