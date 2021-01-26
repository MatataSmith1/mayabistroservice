<?php
$bestellung 	= $_POST['bestellung'];
$telefon		= $_POST['telefon'];
$gutscheincode  = $_POST['gutscheincode'];
$plz			= $_POST['plz'];
$adresse	    = $_POST['adresse'];

$supportedPLZ = ["5211", "5202", "5204"];

$gutscheincodes = ["maya10", "mani20"];


if($bestellung == null || $telefon == null || $plz == null || $adresse == null) {
	header('Location: http://localhost:3000/bestellung_fehlgeschlagen');
}
if(!isValidGutschein($gutscheincodes, $gutscheincode)) {
	die("dieser gutschein funktioniert nicht");
}
if(isPLZSupported($supportedPLZ, $plz)) {
	$nachricht = '<html><body>
		<strong>Telefonnummer:</strong> '.$telefon.'
		<strong>Gutscheincode:</strong> '.$gutscheincode.'
		<strong>Postleitzahl:</strong>  '.$plz.'
		<strong>Adresse:</strong>	    '.$adresse.'
		<h1>Bestellung:</strong>        '.$bestellung.'</h1></body></html>';
	
	$headers = "From: web-page-mailservice\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	$success = mail('manuelirauschek@gmx.at', 'Bestellung', $nachricht, $headers);
	if($success) {
		header('Location: http://localhost:3000/bestellung_gesendet');
	} else {
		header('Location: http://localhost:3000/bestellung_fehlgeschlagen');
	}
} else {
	die('diese PLZ wird nicht unterstützt!');
}

function isPLZSupported($supportedPlzs, $plz) {
	foreach($supportedPlzs as $splz) {
		if($plz == $splz) { return true; }
	}
}

function isValidGutschein($codes, $_code) {
	foreach($codes as $code) {
		if($code == $_code) { return true; }
	}
}

?>
