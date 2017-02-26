<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<head>
	<title>Guest Book Administration</title>
	<style type="text/css">
		td { font: 12px Verdana, sans-serif; text-align:left; }
		h2 { font: 24px Verdana, sans-serif; }
	</style>
	<script type="text/javascript">
		function editMessage(ID)
		{
			document.getElementById("messageID").innerHTML = document.getElementById("ID_"+ID).innerHTML;
			document.form.name.value = document.getElementById("NAME_"+ID).innerHTML;
			document.form.date.value = document.getElementById("DATE_"+ID).innerHTML;
			document.form.email.value = document.getElementById("EMAIL_"+ID).innerHTML;
			document.form.comment.value = document.getElementById("COMMENT_"+ID).innerHTML;
		}

		function updateMessage()
		{
			document.form.id.value = document.getElementById("messageID").innerHTML;
		}
		
		function validateMessage()
		{
			if (document.form.id.value == "" || 
					document.form.name.value == "" || 
					document.form.comment.value == "")
			{
				alert("Select a message to edit and make sure Name and Comment has data.");
				return false;
			}
			return true;
		}

		function confirmDelete(id)
		{
			if (confirm("Are you sure you want to delete this record?"))
				window.location = "/gbadmin.php?delete=yes&id=" + id;
		}
	</script>
</head>
<body>
<center>
<h2>Guest Book Administrator</h2>
<form name="form" onSubmit="return validateMessage();" action="/gbadmin.php" method="get">
	<table border="0" cellpadding="4" cellspacing="0" width="685" style="border:1px solid black;">
		<tr>
			<td width="100" height="23px">ID:</td>
			<td width="585" id="messageID">&nbsp;</td>
		</tr>
		<tr>
			<td>Name:</td>
			<td><input type="text" name="name" size="40" /></td>
		</tr>
		<tr>
			<td>Email:</td>
			<td><input type="text" name="email" size="40" /></td>
		</tr>
		<tr>
			<td>Date:</td>
			<td><input type="text" name="date" size="40" /></td>
		</tr>
		<tr>
			<td valign="top">Comment:</td>
			<td><textarea name="comment" rows="5" cols="70"></textarea></td>
		</tr>
		<tr>
			<td colspan="2" height="45px" style="text-align:center;">
				<input type="hidden" name="id" value="" />
				<input type="hidden" name="update" value="yes" />
				<input type="submit" name="submit" onClick="updateMessage();" value="       Save       " />
			</td>
		</tr>
	</table>
</form>
<p />
<?php
if ($_SERVER['HTTP_HOST'] == "localhost")
{
	$db_hostname = 'localhost'; 
	$db_database = 'guestbook';
	$db_username = 'Tony'; 
	$db_password = 'j@mesab1';
}
else
{
	// Online Server
	$db_hostname = 'h50mysql27.secureserver.net'; 
	$db_database = 'tonyseeley';
	$db_username = 'tonyseeley'; 
	$db_password = 'J@mesAb1';
}

// Connect to the database
$db_server = mysql_connect($db_hostname, $db_username, $db_password);
if (!$db_server) die("Unable to connect to MySQL: " . mysql_error());

// Select the guestbook database
mysql_select_db($db_database, $db_server) or die("Unable to select database: " . mysql_error());

// If the user clicked on delete
if (isset($_GET['delete']))
{
	// Get the id field
	$id = $_GET['id'];
	
	// Create a query to delete the record
	$query = "DELETE FROM visitors WHERE id='$id'";

	// Execute the query
	if (!mysql_query($query, $db_server)) 
		echo "DELETE failed: $query<br />" . mysql_error();
}

// If the user clicked on update
if (isset($_GET['update']))
{
	// Get the field details
	$id = mysql_real_escape_string($_GET['id']);
	$name = mysql_real_escape_string($_GET['name']);
	$date = mysql_real_escape_string($_GET['date']);
	$email = mysql_real_escape_string($_GET['email']);
	$comment = mysql_real_escape_string($_GET['comment']);
	
	// Create a query to update the record
	$query = "UPDATE visitors SET name='$name', visit='$date', email='$email', comment='$comment' WHERE id='$id'";

	// Update the record
	if (!mysql_query($query, $db_server)) 
		echo "UPDATE failed: $query<br />" . mysql_error();
}

// Select the data
$query = "SELECT * FROM visitors ORDER BY id DESC";
$result = mysql_query($query);
if (!$result) die ("Database access failed: " . mysql_error());

// Get the number of messages in the results, we use this to determine how many pages we need
$messageCount = mysql_num_rows($result);

// We only want to seek for a record if we have any messages
if ($messageCount > 0)
{
	// Repeat for each message on the page
	for ($rowCount = 0 ; $rowCount < $messageCount ; ++$rowCount)
	{
		$row = mysql_fetch_row($result);
		echo '<table border="1" cellpadding="4" cellspacing="0" width="685" style="border:1px solid black;">' . "\n";
		echo '	<tr>' . "\n";
		echo '		<td width="80">ID:</td>' . "\n";
		echo '		<td width="250" id="ID_' . $rowCount . '">' . $row[0] . '</td>' . "\n";
		echo '		<td width="80">Date:</td>' . "\n";
		echo '		<td width="250" id="DATE_' . $rowCount . '">' . $row[3] . '</td>' . "\n";
		echo '		<td width="25" rowspan="3">' . "\n";
		echo '			<a href="javascript:editMessage(' . $rowCount . ');">edit</a><br />' . "\n";
		echo '			<a href="javascript:confirmDelete(' . $row[0] . ');">delete</a>' . "\n";
		echo '		</td>' . "\n";
		echo '	</tr>' . "\n";
		echo '	<tr>' . "\n";
		echo '		<td width="80">Name:</td>' . "\n";
		echo '		<td width="250" id="NAME_' . $rowCount . '">' . $row[1] . '</td>' . "\n";
		echo '		<td width="80">Email:</td>' . "\n";
		echo '		<td width="250" id="EMAIL_' . $rowCount . '">' . $row[2] . '</td>' . "\n";
		echo '	</tr>' . "\n";
		echo '	<tr>' . "\n";
		echo '		<td width="80" valign="top">Comment:</td>' . "\n";
		echo '		<td width="580" colspan="3" id="COMMENT_' . $rowCount . '">' . $row[4] . '</td>' . "\n";
		echo '	</tr>' . "\n";
		echo '</table>' . "\n";
		echo '&nbsp;<br/>' . "\n";
	}
}
mysql_close($db_server);				
?>
</center>
</body>
</html>
