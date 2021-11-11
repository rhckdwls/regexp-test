const str = `
010-1234-5678
theckdwls12@naver.com
https://www.afreecatv.com/
the apple rrr ee wwqq you are the
aabbccdddd
`


// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

const regexp = /apple/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp,'AAA'))
