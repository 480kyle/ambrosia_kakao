var finalhandler = require('finalhandler');
var http         = require('http');
var Router       = require('router');
 
var router = Router();

router.get('/keyboard', (req, res) => {
    const menu = {
        type: 'button',
        buttons: ['와인 추천', '와인 설명', '마리아주']
    };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(menu));
});

router.post('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    console.log(_obj);

    let message = {
        "message": {
            "text": "응답 메세지..."
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "menu1",
                "menu2",
                "menu3"
            ]
        } 
    };
});
 
var server = http.createServer((req, res) => {
  router(req, res, finalhandler(req, res));
})

server.listen(3000);
