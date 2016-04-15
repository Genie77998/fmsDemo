//nodemon -w fms.js fms.js
var fms = require('fms')
var roundNum = function(start, end) {
    var total = end - start + 1;
    return Math.floor(Math.random() * total + start);
}
var fsk = [200, 300, 400, 500, 600, 700];
fms.run()
fms.ajax({
    url: '/weather/today',
    type: 'get',
    request: {
        id: 1
    },
    res: {
        ok: {
            code: 0,
            result: {
                "a": [1, 2, 3, 4, 5],
                "b": [2, 3, 5],
                "status1": roundNum(1, 10),
                "status2": fsk[roundNum(0, 5)],
                "status3": roundNum(1, 12)
            }
        },
        err: 'no'
    }
})

fms.ajax({
    url: '/car/illegal/record',
    type: 'get',
    request: {
        id: 1
    },
    res: {
        ok : {
            "code": 0,
            "msg": "请求成功",
            "info": {
                "data": [{
                    "date": "1460440103876",
                    "address": "古墩路",
                    "detail": "不按规定停放影响其他车辆和行人通行的",
                    "money": "100",
                    "point": "1",
                    "handled": 0
                },{
                    "date": "1435",
                    "address": "古墩路浙商财富中心",
                    "detail": "不按规定停放影响其他车辆和行人通行的",
                    "money": "200",
                    "point": "2",
                    "handled": 1
                },{
                    "date": "1435592322",
                    "address": "古墩路浙商财富中心",
                    "detail": "不按规定停放影响其他车辆和行人通行的",
                    "money": "200",
                    "point": "1",
                    "handled": 0
                },{
                    "date": "1435791322",
                    "address": "古墩路浙商财富中心",
                    "detail": "不按规定停放影响其他车辆和行人通行的",
                    "money": "500",
                    "point": "3",
                    "handled": 1
                }],
                "total_num": 4,
                "total_money": 1000,
                "total_score": 6,
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
            code: 0,
            result: 'seven'
        },
        err: 'no'
    }
})
