import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import CoverList from '../components/lists/CoverList';
import LottieView from 'lottie-react-native';

const Favorite = () => {
  const postsAlaUne = useSelector((state) => state.categ.favs);
  
 if(postsAlaUne.length <= 0) return (
    <View
    style={{
      height: 500,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <LottieView
      source={require('../assets/lottie/wait.json')}
      autoPlay
      loop
    />
  </View>
 )

  return (
    <View >
      <CoverList data={postsAlaUne} />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
