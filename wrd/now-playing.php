<?php
/* ----------- Server configuration ---------- */

$ip = "cast4.servcast.net";
$port = "8532";

/* ----- No need to edit below this line ----- */
/* ------------------------------------------- */

$fp = @fsockopen($ip,$port,$errno,$errstr,1);
if (!$fp) 
	{ 
	echo "Connection refused"; // Displays when sever is offline
	} 
	else
	{ 
	fputs($fp, "GET /7.html HTTP/1.0\r\nUser-Agent: Mozilla\r\n\r\n");
	while (!feof($fp)) 
		{
		$info = fgets($fp);
		}
	$info = str_replace('</body></html>', "", $info);
	$split = explode(',', $info);
	if (empty($split[6]) )
		{
		echo "The current song is not available"; // Displays when sever is online but no song title
		}
	else
		{
		$title = str_replace('\'', '`', $split[6]);
		$title = str_replace(',', ' ', $title);
		echo "$title"; // Displays song
		}
	}
?>
