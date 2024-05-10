<?php
date_default_timezone_set('Asia/Yekaterinburg');
$title = "Добро пожаловать на ветку lesson16!";
$header = "Добро пожаловать!";

function getCurrentTime()
{
    $hour = date('H');
    $minute = date('i');

    if (($hour >= 5 && $hour <= 20) || $hour == 0) {
        $hourText = ' часов ';
    } elseif (($hour >= 2 && $hour <= 4) || ($hour >= 22 && $hour <= 24)) {
        $hourText = ' часа ';
    } else {
        $hourText = ' час ';
    }

    if ($minute > 20 || $minute < 10) {
        if ($minute % 10 == 1)
            $minuteText = ' минута';
        else if ($minute % 10 == 2 || $minute % 10 == 3 || $minute % 10 == 4)
            $minuteText = ' минуты';
        else $minuteText = ' минут';
    } else $minuteText = ' минут';

    return $hour . $hourText . $minute . $minuteText;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>

<body>
<div class="container">
    <header>
        <h1><?php echo $header; ?></h1>
    </header>
    <main>
        <p>Текущее время: <?php echo getCurrentTime(); ?></p>
    </main>
</div>
</body>

</html>
