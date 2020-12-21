import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Modal, Text, ActivityIndicator} from 'react-native';
import {loadCategory} from '../services/ducks/actions';
import {useDispatch, useSelector} from 'react-redux';
import CoverList from '../components/lists/CoverList';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const postsAlaUne = useSelector(
    (state) => state.categ.categories['A la une'],
  );
  // console.log(postsAlaUne.length)

  useEffect(() => {
    dispatch(loadCategory(15, 20));
  }, []);

  setTimeout(() => {
    setloading(false);
  }, 15000);

  return (
    <>
      {loading && (
        <Modal
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              alignSelf: 'center',
              top:'70%',
              position: 'absolute',
            }}>
            <ActivityIndicator color='red' />
          </Text>

          <LottieView
            source={require('../assets/lottie/news.json')}
            autoPlay
            loop
          />
        </Modal>
      )}
      <View style={styles.container}>
        <CoverList data={postsAlaUne} home/>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
