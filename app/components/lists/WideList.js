import React, {useState} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import WideCard from '../cards/Wide';
import colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';
import {loadCategory} from '../../services/ducks/actions';
import {useDispatch} from 'react-redux';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const WideList = ({data, CategoryId}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setrefreshing(true);

    dispatch(loadCategory(CategoryId, 30));

    wait(3000).then(() => setrefreshing(false));
  }, []);

  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({item}) => {
    return (
      <WideCard
        id={item.id}
        uri={item.uri}
        date={item.datejs}
        title={item.title}
        onPress={() =>
          navigation.navigate('Details', {screen: 'Details', params: item})
        }
        key={item.id}
        description={item.description}
      />
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white, padding: 15}}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <WideCard
              type="Voir plus d'articles"
              id={CategoryId}
              onPress={() =>
                navigation.navigate('category', {
                  screen: 'category',
                  params: {id: CategoryId},
                })
              }
            />
          )}
        />
      </View>
    </>
  );
};

export default WideList;

const styles = StyleSheet.create({});
