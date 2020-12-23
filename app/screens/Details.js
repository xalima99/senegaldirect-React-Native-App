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
const {height, width} = Dimensions.get('window');
import {StackActions} from '@react-navigation/native';

const Details = ({route}) => {
  const navigation = useNavigation();
  const {author, data, description, id, uri, title, category} = route.params;
  const similarPosts = useSelector((state) => state.categ.similar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSimilar(category));
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.Container}>
          <Image style={styles.Image} source={{uri}} />
          <View style={styles.content}>
            <Title size={23} style={styles.title} numberOfLines={5}>
              {title}
            </Title>
            <View
              styles={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HTML
                staticContentMaxWidth={width}
                html={description}
                imagesMaxWidth={Dimensions.get('window').width}
                baseFontStyle={{fontSize: 20}}
              />
            </View>
          </View>
        </View>
        {similarPosts.length ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>
              Articles Similaires
            </Text>
            {similarPosts.map((itemSim) => {
              if (itemSim.id !== id)
                return (
                  <Cover
                    mystyle={{width: '90%'}}
                    key={itemSim.id}
                    id={itemSim.id}
                    title={itemSim.title}
                    uri={itemSim.uri}
                    style={styles.cover}
                    date={itemSim.datejs}
                    onPress={() => navigation.push('Details', itemSim)}
                  />
                );
            })}
          </View>
        ) : null}
      </ScrollView>
      <Close onPress={() => navigation.dispatch(StackActions.popToTop())} />
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
