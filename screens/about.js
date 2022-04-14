import React from 'react';

import Api from '../network/api';
import Page from '../layouts/page';
import Loader from '../shared/loader';
import URLs from '../network/urls';

export default function AboutScreen() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		Api.fetch(URLs.about, setData, []/*, d => navigation.setOptions({ headerTitle: d.title })*/ );
	}, []);

	return data === null ? <Loader /> : <Page data={data} dataUrl={URLs.about} />;
}

