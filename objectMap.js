let schools = [
	{name: "Yorktown"},
	{name: "Stratford"},
	{name: "Washington & Lee"},
	{name: "Wakefield"}
]

/*
const editName = (oldName, name, arr) =>
	arr.map(item => {
		if(item.name === oldName) {
			return {
				...item,
				name
			}
		} else {
			return item
		}
	})
*/


const editName = (oldName, name, arr) =>
	arr.map(item => item.name === oldName ?
			({...item, name}) : 
			item
		   )

const editNth = (n, name, arr) =>
	arr.map( (item, i) => i === n ?
			({...item, name}) :
			item
			)


let updateSchools = editNth(2, "HB Woodlwan", schools)

console.log(updateSchools[2])
console.log(schools[2])
