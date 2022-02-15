import COLORS from "./colors";

const Styles = {
	header: {
		icons: {
			color: '#fff',
			marginRight: 13,
			fontSize: 30
		},
		itself: {
			backgroundColor: COLORS.GLOBAL,
            shadowColor: COLORS.HEADER.SHADOW,
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,

			elevation: 5,
		}
	}
};

export default Styles;