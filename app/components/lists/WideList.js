import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import WideCard from '../cards/Wide';
import colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';

const WideList = ({data, CategoryId}) => {
  const navigation = useNavigation();

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
