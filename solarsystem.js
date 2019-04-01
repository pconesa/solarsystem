var solarSysytem ={
	scale: Math.pow(10,9),
	getItem: function(index){
		item = this.items[index]
		
		// Create a clone to the scale
		var scaledItem = {
			name: item.name,
			distanceKm: item.distanceKm/this.scale,
			sizeKm: item.sizeKm/this.scale,
			color: item.color
		};
		
		return scaledItem;
		
	},
	items:[
		{
			name:	"Sol",
			distanceKm: 0,
			sizeKm: 1390000,
			color: "#f80c12"
		},
		{
			name: "Mercurio",
			distanceKm: 57910000,
			sizeKm: 4880,
			color: "#ff4422"
		},
		{
			name: "Venus",
			distanceKm: 108200000,
			sizeKm: 12104,
			color: "#ff9933"
		},
		{
			name: "Tierra",
			distanceKm: 149600000,
			sizeKm: 12756,
			color: "#ccbb33"
		},
		{
			name: "Marte",
			distanceKm: 227940000,
			sizeKm: 6794,
			color: "#69d025"
		},
		{
			name: "Jupiter",
			distanceKm: 778330000,
			sizeKm: 142984,
			color: "#11aabb"
		},
		{
			name: "Satruno",
			distanceKm: 1429400000,
			sizeKm: 120536,
			color: "#3311bb"
		},
		{
			name: "Urano",
			distanceKm: 2870990000,
			sizeKm: 51118,
			color: "#442299"
		},
		{
			name: "Neptuno",
			distanceKm: 4504000000,
			sizeKm: 49532,
			color: "black"
		}
	]
};