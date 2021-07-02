const ages = [19, 20, 21, 23, 25]
const ages2 = [15, 17, 27]
const ages3 = [30, 35, 33, ]
const allAges = ages.concat(ages2).concat(ages3)
const allAges2 = [...ages, ...ages2, ...ages3]
console.log(allAges2);