const BLUE = {
	GLOBAL: "#0096FF",
	CARD: {
		BACKGROUND: "#fff",
		SUBTITLE: "#888",
		BORDER: "#ddd",
		SHADOW: "#555"
	},
	HEADER: {
		TINT: "#fff",
		SHADOW: "#555"
	},
	ITEM: {
		SUBTITLE: '#58BCFF'
	}
};

const PURPLE = {...BLUE,
	GLOBAL: "purple"
};

const DARK = {...BLUE,
	GLOBAL: "#333"
};

const THEMES = {BLUE, PURPLE, DARK};
let chosen = 'BLUE'; // [BLUE, PURPLE, DARK]

export default THEMES[chosen];