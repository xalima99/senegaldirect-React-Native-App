import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadCategory} from '../services/ducks/actions';

import WideList from '../components/lists/WideList';

const TabCategory = ({route}) => {
  const {id, name} = route.params;
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.categ.categories[name]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadCategory(id, 25));
    }, 2000);
  }, []);

  return <WideList data={categoryPosts} CategoryId={id} />;
};

export default TabCategory;

const styles = StyleSheet.create({});
