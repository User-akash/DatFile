<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Singin</title>
    <link rel="stylesheet" href="static/css/style.css">
</head>
<body>
    <div class="container sign">
        <div class="cover">
            <img src="/static/media/img2.png" alt="">
        </div>
        <div class="card">
            <div class="card-head">
                <h2>Loging</h2>
            </div>
            <form action="/login.php" method="POST">
                <div class="card-body">
                    
                        <div class="input-group">
                            <label for="username">User Name</label>
                            <input type="text" name="username" id="username">
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password">
                        </div>
                        <button type="submit" class="btn">Sign In</button>
                        <a href="#" class="text-mute">Are you Forget your password?</a>
                    
                </div>
            </form>
        </div>
    </div>
</body>
</html>