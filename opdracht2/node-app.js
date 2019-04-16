console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
var url = 'https://onezero.medium.com/machine-learning-might-render-the-human-quest-for-knowledge-pointless-5425f8b00a45'
 var Mercury = require('@postlight/mercury-parser')
Mercury.parse(url).then(result => console.log(result));