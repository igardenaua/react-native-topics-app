import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Page from '../layouts/page';
import URLs from '../network/urls';

export default function PostScreen({ route }) {
	let {item} = route.params;

	const navigation = useNavigation();

	React.useEffect(() => {
		if (item.gallery && item.gallery.length) navigation.setOptions({
			headerTitle: item.title
		});
	});
	
  	return <Page data={item} dataUrl={URLs.postWithID(item.id)} />;
}