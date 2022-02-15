import React from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';

import Loader from '../shared/loader';
import Api from '../network/api';
import URLs from '../network/urls';

import CardList from '../layouts/card-list';

export default function CategoriesScreen({ route, navigation }) {
	const [categories, setCategories] = React.useState(null);

	React.useEffect(() => { Api.fetch(URLs.categories, setCategories); }, []);

	return (
	    categories == null ? <Loader /> :
	    <CardList 
	    	data={categories}
	    	refreshUrl={URLs.categories}
	    	navigate={item => ['Posts', { category: item }]}
	    />
  	);
}

const styles = StyleSheet.create({

});