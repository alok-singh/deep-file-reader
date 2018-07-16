const deepFileReader = require('./main');


console.log(deepFileReader(process.argv[2] /* your directory */, ['jpg', 'png', 'webp']));