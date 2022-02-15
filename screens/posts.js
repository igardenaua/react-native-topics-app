import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import CardList from '../layouts/card-list';
import Loader from '../shared/loader';
import Api from '../network/api';
import URLs from '../network/urls';

export default function CategoryScreen({ route, navigation }) {
	const [posts, setPosts] = React.useState(null);

  	let {category} = route.params;

	React.useEffect(() => { Api.fetch(URLs.categoryPosts(category.id), setPosts); }, []);

  	return (
  		posts == null ? <Loader /> :
  		<CardList 
	    	data={posts}
	    	refreshUrl={URLs.categoryPosts(category.id)}
	    	navigate={item => ['Item', { item, category }]}
	    />
  	);
}

const PostsStyles = StyleSheet.create({
});