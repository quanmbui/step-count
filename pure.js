// alert("Hello Quan")

// Let's change the text that say 'Hello, Quan', into 'Hello, [someone]'.
// Pick the h1 tag
// const headerTag = document.querySelector("h1")

// Then, change the html content
// headerTag.innerHTML = "Hello someone"

// Then, change the html to a red background
// headerTag.style.backgroundColor = "var(--primary-orange)"

// Font size goes big!
// headerTag.style.fontSize = "64px"

// Let's pick all of the h1 tags on the page.

// Then, for each tag, let it have a background color.
const headerTags = document.querySelectorAll("h1")

// Unfortunately we can't do headerTags.innerHTML = "whatever"
// Instead, we'll use a forEach loop.
// headerTags.forEach(h1 => {
//   const hue = 360 * Math.random()
//   h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)"
// })

// Pick each tag and label it with each tag's number, the index!!
headerTags.forEach((h1, index) => {
  h1.innerHTML = "this is tag number " + index
})


// Let's select ALL of the rect tags on the page.
// Then, let's change the width of the rects.
// const rectTags = document.querySelectorAll("rect")
const data = [5, 10, 11, 22, 25, 60, 55, 42, 33, 10, 12, 80, 90, 91, 112, 50, 1]

// data[0] ...... 550
// data[1] ...... 420
// data[2] ...... 731

// rectTags.forEach((tag, i) => {
//   // tag.style.fill = "red"
//   // const width = 100 + 200 * i
//   const width = data[i]
//   tag.setAttribute("width", width + "px")
// })

const todaySvg = document.querySelector("svg")

// width bar = 24
// gap between bars = 12
// max height = 112

data.forEach((d, i) => {
  // Add a rectangle tag to todaySvg
  const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rectTag.setAttribute("x", i * 36)
  rectTag.setAttribute("y", 112 - d)
  rectTag.setAttribute("width", "24")
  rectTag.setAttribute("height", d)
  todaySvg.append(rectTag)
})









