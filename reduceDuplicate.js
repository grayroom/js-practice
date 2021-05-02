const colors = ["red", "red", "green", "blue", "green"]

const distinctColor = colors.reduce(
	(distinct, color) =>
		(distinct.indexOf(color) !== -1) ?
		distinct :
		[...distinct, color],
	[]
)

console.log(distinctColor)