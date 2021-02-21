import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {loadArticles} from '../services/ducks/actions';
import {useDispatch, useSelector} from 'react-redux';
import CoverList from '../components/lists/CoverList';
import colors from '../config/colors';
import messaging from '@react-native-firebase/messaging';
import AwesomeAlert from 'react-native-awesome-alerts';
import {BannerAd, TestIds} from '@react-native-firebase/admob';
import {BannerAdSize} from '@react-native-firebase/admob';
import logo from '../assets/imgs/lgo.png';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-7791252054702236/8159438301';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [onAlert, setonAlert] = useState(false);
  const [notifTitle, setnotifTitle] = useState('');
  const [notifsubTitle, setnotifsubTitle] = useState('');
  const [notifId, setnotifId] = useState(null);
  const postsAlaUne = useSelector((state) => state.post.posts);

  useEffect(() => {
    const unsubscribe = messaging().onMessage((remoteMessage = {}) => {
      console.log('remoteMessage', remoteMessage);
      console.log('hello push');
      const notification = remoteMessage.notification || {};
      const title = notification.title;
      const body = notification.body;
      if (remoteMessage.data && remoteMessage.data.id) {
        setnotifId(remoteMessage.data.id);
      }

      if (title) {
        setnotifTitle(title);
      }
      if (body) {
        setnotifsubTitle(body);
      }

      setonAlert(true);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const onNotificationOpen = (remoteNotification) => {
      console.log('hello push');
      if (remoteNotification.data && remoteNotification.data.id) {
        navigation.navigate('push', {
          screen: 'push',
          params: {id: remoteNotification.data.id},
        });
      }
    };
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
    const unsubscribe = messaging().onNotificationOpenedApp(onNotificationOpen);

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(loadArticles());
  }, []);

  setTimeout(() => {
    setloading(false);
  }, 10000);

  return (
    <>
      {loading && (
        <Modal
          style={{
            // position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#ddd',
            }}>
            <LottieView
              source={require('../assets/lottie/news.json')}
              autoPlay
              loop
              style={{width: '60%', alignSelf: 'center'}}
            />
            <Image source={logo} style={{alignSelf: 'center'}} />
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.FULL_BANNER} />
        <CoverList data={postsAlaUne} home />
        <AwesomeAlert
          show={onAlert}
          showProgress={false}
          title={notifTitle}
          message={notifsubTitle}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Ok"
          confirmText="Lire l'article"
          confirmButtonColor="#AE0201"
          onCancelPressed={() => {
            setonAlert(false);
          }}
          onConfirmPressed={() => {
            setonAlert(false);
            navigation.navigate('push', {
              screen: 'push',
              params: {id: notifId},
            });
          }}
          contentContainerStyle={{width: '80%', height: 200}}
          contentStyle={{flex: 1}}
          actionContainerStyle={{width: '100%'}}
        />
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
