import React from 'react';
import { StyleSheet, /*Text, ScrollView, View, Image, ImageBackground, RefreshControl*/ } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../network/api';
import Page from '../layouts/page';
import Loader from '../shared/loader';
import URLs from '../network/urls';

export default function AboutScreen({ route }) {
	const [data, setData] = React.useState(null);
	const navigation = useNavigation();

	React.useEffect(() => {
		Api.fetch(URLs.about, setData, []/*, d => navigation.setOptions({ headerTitle: d.title })*/ );
	}, []);

	return data === null ? <Loader /> : <Page data={data} dataUrl={URLs.about} />;
}

const AboutStyles = StyleSheet.create({

});