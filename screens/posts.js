import React from 'react';

import CardList from '../layouts/card-list';
import Api from '../network/api';
import URLs from '../network/urls';
import Loader from '../shared/loader';

export default function CategoryScreen({ route }) {
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

