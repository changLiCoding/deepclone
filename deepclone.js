sampleObj = {
	city: "beijing",
	country: "China",
	temperature: "27",
	mustGo: ["the fobiden city", "the great wall"],
	food: {
		spicy: ["stink tofu", "lamb on stick"],
		mild: ["piking duck", "peking hot pot"],
	},
};
const copiedObj = new Object();
const deepclone = function (newObj, oldObj) {
	for (let key in oldObj) {
		let value = oldObj[key];
		if (value instanceof Array) {
			newObj[key] = [];
			deepclone(newObj[key], value);
		} else if (value instanceof Object) {
			newObj[key] = {};
			deepclone(newObj[key], value);
		} else {
			newObj[key] = oldObj[key];
		}
	}
};
deepclone(copiedObj, sampleObj);
sampleObj.city = "nanjing";
sampleObj.mustGo.push("shijingshan Park");
console.log(copiedObj);
console.log(sampleObj);
