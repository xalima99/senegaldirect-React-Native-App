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
import {useNavigation} from '@react-navigation/native';
import Title from '../components/common/Title';
import colors from '../config/colors';
import HTML from 'react-native-render-html';
import Close from '../components/common/Close';
import {loadSimilar} from '../services/ducks/actions';
import Cover from '../components/cards/Cover';
import Wide from '../components/cards/Wide';
const {height, width} = Dimensions.get('window');
import {StackActions} from '@react-navigation/native';
import {BannerAd, TestIds} from '@react-native-firebase/admob';
import {BannerAdSize} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-7791252054702236/8159438301';

const Details = ({route}) => {
  const navigation = useNavigation();
  const {author, datejs, description, id, uri, title, category} = route.params;
  const similarPosts = useSelector((state) => state.categ.similar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSimilar(category));
  }, []);

  const handleNav = (itemSim) => {
    if (itemSim) {
      navigation.push('Details', itemSim);
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.Container}>
          <Image style={styles.Image} source={{uri}} />
          <View style={styles.content}>
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
            <Title size={23} style={styles.title} numberOfLines={5}>
              {title}
            </Title>
            <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
            <View
              styles={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HTML
                ignoredStyles={['padding']}
                staticContentMaxWidth={width}
                html={description}
                imagesMaxWidth={Dimensions.get('window').width}
                baseFontStyle={{fontSize: 20}}
              />
            </View>
          </View>
        </View>
        <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
        {similarPosts.length ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>
              Articles Similaires
            </Text>
            {similarPosts.map((itemSim) => {
              if (itemSim.id !== id)
                return (
                  <Wide
                    mystyle={{width: '90%'}}
                    key={itemSim.id}
                    id={itemSim.id}
                    title={itemSim.title}
                    uri={itemSim.uri}
                    style={styles.cover}
                    date={itemSim.datejs}
                    onPress={() => handleNav(itemSim)}
                  />
                );
            })}
          </View>
        ) : null}
      </ScrollView>
      <Close onPress={() => navigation.dispatch(StackActions.popToTop())} />
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
