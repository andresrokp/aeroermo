var i = parseInt(metadata.index);
var len = parseInt(metadata.dataLength);

var nextIndex = i < len-1 ? i + 1 : 0;

return {msg: msg, metadata: {index:nextIndex}, msgType: msgType};