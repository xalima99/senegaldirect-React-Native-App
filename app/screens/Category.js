import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, Easing, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadMore} from '../services/ducks/actions';
import WideCard from '../components/cards/Wide';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

const Category = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [progress, setprogress] = useState(true);
  const morePosts = useSelector((state) => state.categ.more);

  useEffect(() => {
    dispatch(loadMore(route.params.id));
  }, []);

  setTimeout(() => {
    setprogress(false);
  }, 4000);

  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({item}) => {
    return (
      <>
        <WideCard
          uri={item.uri}
          date={item.datejs}
          title={item.title}
          onPress={() =>
            navigation.navigate('Details', {screen: 'Details', params: item})
          }
          key={item.id}
          description={item.description}
        />
      </>
    );
  };

  return (
    <View style={{backgroundColor: colors.white, padding: 15}}>
      {progress ? (
        <View
          style={{
            height: 500,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../assets/lottie/news.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={morePosts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
