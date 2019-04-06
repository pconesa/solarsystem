var solarSystem ={
	scale: Math.pow(10,9),
	getItem: function(index){
		item = this.items[index]
		
		// Create a clone to the scale
		var scaledItem = Object.assign({}, item);
		// Apply the scale
		scaledItem.distanceKm = item.distanceKm/this.scale;
		scaledItem.sizeKm = item.sizeKm/this.scale;		
		
		return scaledItem;
		
	},
	items:[
		{
			name:	"Sol",
			distanceKm: 0,
			sizeKm: 1390000,
			color: "#f80c12",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Sun-icon.png"
		},
		{
			name: "Mercurio",
			distanceKm: 57910000,
			sizeKm: 4880,
			color: "#ff4422",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Mercury-icon.png"
		},
		{
			name: "Venus",
			distanceKm: 108200000,
			sizeKm: 12104,
			color: "#ff9933",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Venus-icon.png"
		},
		{
			name: "Tierra",
			distanceKm: 149600000,
			sizeKm: 12756,
			color: "#ccbb33",
			icon:"http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Earth-icon.png"
		},
		{
			name: "Marte",
			distanceKm: 227940000,
			sizeKm: 6794,
			color: "#69d025",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Mars-icon.png"
		},
		{
			name: "Jupiter",
			distanceKm: 778330000,
			sizeKm: 142984,
			color: "#11aabb",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Jupiter-icon.png"
		},
		{
			name: "Satruno",
			distanceKm: 1429400000,
			sizeKm: 120536,
			color: "#3311bb",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Saturn-icon.png"
		},
		{
			name: "Urano",
			distanceKm: 2870990000,
			sizeKm: 51118,
			color: "#442299",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Uranus-icon.png"
		},
		{
			name: "Neptuno",
			distanceKm: 4504000000,
			sizeKm: 49532,
			color: "black",
			icon: "http://icons.iconarchive.com/icons/dan-wiersma/solar-system/48/Neptune-icon.png"
		}
	]
};
