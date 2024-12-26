const http = require('http');


http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Bookie Basher</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
            margin: 0;
            font-family: 'Arial', sans-serif;
        }
        .marquee {
            font-size: 2em;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .button-container {
            margin-top: 20px;
        }
        .button {
            background-color: #ffffff;
            color: #5151E5;
            border: 2px solid #5151E5;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1em;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }
        .button:hover {
            background-color: #5151E5;
            color: #ffffff;
        }
    </style>
</head>
<body>
    <div class="marquee">The Bookie Basher</div>
    <div class="button-container">
        <a href="https://www.youtube.com/c/CarlTech?sub_confirmation=1" target="_blank" class="button">LEARN MORE HERE</a>
    </div>
</body>
</html>
`);

}).listen(7860, () => {

  console.log('Server listening on port 7860');

});