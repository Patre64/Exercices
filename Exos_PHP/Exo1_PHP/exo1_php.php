<!DOCTYPE html>
<html>

<head>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>

<body>



<h1>Ma page web</h1>

<p>Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>



<script type="text/javascript" src="./error.php"></script>

<iframe src='./error.php'></iframe>

<?php include('./error.php'); ?>

<?php require('./error.php'); ?>


</body>

</html>