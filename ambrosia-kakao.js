var express = require('express');
 
var app = express();

app.get('/keyboard', (req, res) => {
    console.log("/keyboard");
    const menu = {
        type: 'button',
        buttons: ['와인 추천', '와인 설명', '마리아주']
    };
  res.setHeader('Content-Type', 'text/json');
  res.json(menu);
});

app.post('/message', (req, res) => {
    console.log("/message");
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

    res.setHeader('Content-Type', 'text/json');
    res.json(message);
});
 
var appListen = function(){
    console.log("start server...");
    app.listen(3000);
}();

