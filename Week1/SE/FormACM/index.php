<?php
	$insert = false;
	if(isset($_POST['Name'])){
	$server = "localhost";
	$username = "root";
	$password = "";

	$con = mysqli_connect($server, $username, $password);

	if(!$con)
	{
		die("Connection to this database failed due to ".mysqli_connect_error());
	}
	//echo "Successfull Connection";

	$name = $_POST['Name'];
	$age = $_POST['Age'];
	$email = $_POST['Email'];
	$phone = $_POST['Phone'];

	$sql = "INSERT INTO `ptp_data`.`data` (`Name`, `Age`, `Email`, `Phone`, `Date`) VALUES ('$name', '$age', '$email', '$phone', current_timestamp());";
	//echo $sql;

	if($con->query($sql)==true)
	{
		//echo "Succesfully Inserted";
		$insert = true;
	}
	else {
		echo "ERROR : $sql <br> $con->error";
    }

	$con->close();
	}
?>

<!DOCTYPE html>
<html lang = "en">
<head>
	<meta charset = "UTF-8">
	<title>First PHP project</title>
	<link rel = "stylesheet" href ="style.css">
</head>

<body>
	<div class = "container">
		<h1>Form for Prequal to Perfection</h1>
		<p class = "submit_msg"> Please join the whatsapp gorroup for further details. *Whatsapp link*</p>
	</div>

</body>

</html>