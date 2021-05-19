const { o3 } = require('goss_proto')
let protoNames = [];
let proto = o3.prototype;
while (proto !== null) {
    protoNames.push(proto.name);
    proto = proto.prototype;
}
console.log(protoNames);

/*
$ node index.js
[ 'JavaScript', 'LiveScript', 'Mocha' 
*/