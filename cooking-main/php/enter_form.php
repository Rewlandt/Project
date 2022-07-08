<?php
    $filepath = __DIR__ . 'H:\cooking-main\php\formtext.txt';
    if(!empty($_ENTER))
    {
    echo '<pre>';
    file_put_contents($filepath, $_ENTER);
    die();
    }
    require_once('index.html');
?>