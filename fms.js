//nodemon -w fms.js fms.js
var fms = require('fms')
var roundNum = function(start, end) { 
    var total = end - start + 1;
    return Math.floor(Math.random() * total + start);
}
var fsk = [200,300,400,500,600,700];
fms.run()
fms.ajax({
    url: '/weather/today',
    type: 'get',
    request: {
        id: 1
    },
    res: {
        ok: {
            code : 0,
            result: {
                "a" : [1,2,3,4,5],
                "b" : [2,3,5],
                "status1" : roundNum(1,10),
                "status2" : fsk[roundNum(0,5)],
                "status3" : roundNum(1,12) 
            }
        },
        err: 'no'
    }
})

fms.ajax({
    url: '/weather/sevenDay',
    type: 'get',
    request: {
        id: 1
    },
    res: {
        ok: {
            code : 0,
            result: 'seven'
        },
        err: 'no'
    }
})
