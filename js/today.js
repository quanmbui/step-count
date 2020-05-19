const todaySvg = d3.select("svg.today")

// Create a scale
const barScale = d3.scaleLinear()
	.domain([0, 2000]) // min and max of input data
	.range([1, 112]) // min and max of bar height in pixels

const hourFormat = d3.format("02")

// Using groups
const todayGroups = todaySvg
	.selectAll("g")
	.data(todayData)
	.enter()
	.append("g")
	.attr("transform", (d, i) => { return "translate(" + (i * 36) + ", 0)" }) // space apart using a factor of 36

// Transparent rectangles for hovering
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 24)
	.attr("height", 140)
	.attr("class", "transparent")

// Add bars using groups
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", (d, i) => { return 112 })
	.attr("width", 24)
	.attr("height", 0)
	.transition()
	.delay((d, i) => { return i * 50  })
	.attr("y", (d, i) => { return 120 - barScale(d) })
	.attr("height", (d, i) => { return barScale(d) })
	
// Add text tags using groups
todayGroups
	.append("text")
	.attr("class", "hours")
	.attr("x", 12)
	.attr("y", 140)
	.text((d, i) => { return hourFormat(i) })

todayGroups
	.append("text")
	.attr("class", "steps")
	.attr("x", 12)
	.attr("y", (d, i) => { return 110 - barScale(d) })
	.text((d, i) => { return d })