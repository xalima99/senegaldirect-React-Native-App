import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../components/common/Title';
import colors from '../config/colors';
import HTML from 'react-native-render-html';
import {loadPushArticle} from '../services/ducks/actions';
const {height, width} = Dimensions.get('window');
import {BannerAd, TestIds} from '@react-native-firebase/admob';
import {BannerAdSize} from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-7791252054702236/8159438301';

const Details = ({route}) => {
  console.log('ROUTE', route.params);
  const push = useSelector((state) => state.categ.push);
  const {description, uri, title, author, datejs} = push;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPushArticle(route.params.id));
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.Container}>
          {uri && <Image style={styles.Image} source={{uri}} />}
          <View style={styles.content}>
            {author && (
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Title
                  size={15}
                  style={[styles.title, {marginRight: 5}]}
                  numberOfLines={5}>
                  Publié par {author}
                </Title>
                <Text size={15} style={styles.title} numberOfLines={5}>
                  {datejs}
                </Text>
              </View>
            )}
            {title && (
              <Title size={23} style={styles.title} numberOfLines={5}>
                {title}
              </Title>
            )}
            <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
            <View
              styles={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {description && (
                <HTML
                  staticContentMaxWidth={width}
                  html={description}
                  imagesMaxWidth={Dimensions.get('window').width}
                  baseFontStyle={{fontSize: 20}}
                />
              )}
            </View>
            <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: colors.white,
  },
  Image: {
    width: '100%',
    height: height / 2.8,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 15,
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    top: -35,
  },
  title: {
    marginVertical: 15,
  },
});
