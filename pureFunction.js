const schools = [
	"Yorktown",
	"Washington & Lee",
	"Wakefield"
]

const highSchools = schools.map(school => `${school} High School`)

console.log(highSchools.join('\n'))