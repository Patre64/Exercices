<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

<p id="demo"></p>

<script>

var xmlhttp= new XMLHttpRequest();

xmlhttp.onreadystatechange= function() {
    if (this.readyState== 4 && this.status== 200) {
        myObj= JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML= myObj.name;
    }
};
xmlhttp.open("GET", "demo_file.php", true);
xmlhttp.send();

</script>




    
</body>

</html>