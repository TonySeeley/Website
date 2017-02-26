<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>The Seeley Family Web Site</title>
	<link rel="stylesheet" type="text/css" href="./styles.css" media="all" />
	<style type="text/css">
		.tl { border-bottom:1px solid #ffffff; color:#0033a1; background:#b9c9fe url(./Images/corner-tl.png) no-repeat; }
		.bl { background:#b9c9fe url(./Images/corner-bl.png) bottom left no-repeat; color:#0033a1; vertical-align:top; }
		.tr { border-bottom:1px solid #ffffff; color:#666699; background:#e8edff url(./Images/corner-tr.png) top right no-repeat; }
		.br { background:#e8edff url(./Images/corner-br.png) bottom right no-repeat; color:#666699; }
		.da { border-bottom: 1px solid #ffffff; background:#e8edff; color:#666699; }
		.hr { border-bottom: 1px solid #ffffff; color:#0033a1; background:#b9c9fe; }
	</style>
	<script type="text/javascript" src="./menu.js"></script>
	<script type="text/javascript">
		var today = new Date();
		var cMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		var cDay = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
		var formatDate = cDay[today.getDay()] + " " + cMonth[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
		var cancel = false;

		function validateForm()
		{
			if (cancel == true)
				return true;

			var error = "";
			if (document.form.name.value == "")
			{
				error = "You must enter a name value.";
			}

			if (document.form.comment.value == "")
			{
				if (error == "")
					error = "You must enter a comment value.";
				else
					error = error + "\nYou must enter a comment value.";
			}

			if (document.form.email.value != "")
			{
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if (reg.test(document.form.email.value) == false)
				{
					if (error == "")
						error = "The entered email is invalid.";
					else
						error = error + "\nThe entered email is invalid.";
				}
			}

			if (error != "")
			{
				alert(error);
				return false;
			}
			return true;
		}

		function setCancel()
		{
			cancel = true;
		}
	</script>
</head>
<body>
	<div class="container">
		<div class="pageHeader">
			<h1>The Seeley Family Web Site</h1>
			<h2>www.seeleyonline.com</h2>
		</div>
		<div class="subHeader">
			<table width="100%">
				<tr>
					<td class="subHeaderLeft" id="strapline">&nbsp;</td>
					<td class="subHeaderRight" id="updated">&nbsp;</td>
				</tr>
			</table>
		</div>
		<div class="navcontainer">
			<?php include("./menu.html"); ?>
		</div>
		<div class="contentContainerFull">
			<h2>Guest Book</h2>
			<?php
				if (isset($_POST['sign']))
				{
					echo '<p />' . "\n\t\t\t";
					echo '&nbsp;' . "\n\t\t\t";
					echo '<center>' . "\n\t\t\t";
					echo '<form name="form" onSubmit="return validateForm();" action="/guestbook.php" method="post">' . "\n\t\t\t";
					echo '	<input type="hidden" name="visit" value="">' . "\n\t\t\t";
					echo '	<table border="0" bgcolor="#e8edff" cellspacing="0" cellpadding="5" style="border:1px solid #aeaeae;">' . "\n\t\t\t";
					echo '		<tr>' . "\n\t\t\t";
					echo '			<td width="130" align="left" style="color:#666699;">Name:</td>' . "\n\t\t\t";
					echo '			<td width="300" align="left"><input type="text" name="name" size="40" /></td>' . "\n\t\t\t";
					echo '			<td width="100" align="center" style="color:#666699;">Date:</td>' . "\n\t\t\t";
					echo '			<td width="150" align="left" style="color:#666699;"><script type="text/javascript">document.write(formatDate);</script></td>' . "\n\t\t\t";
					echo '		</tr>' . "\n\t\t\t";
					echo '		<tr>' . "\n\t\t\t";
					echo '			<td align="left" style="color:#666699;">Email (optional):</td>' . "\n\t\t\t";
					echo '			<td  width="580" align="left" colspan="3"><input type="text" name="email" size="40" /></td>' . "\n\t\t\t";
					echo '		</tr>' . "\n\t\t\t";
					echo '		<tr>' . "\n\t\t\t";
					echo '			<td align="left" valign="top" style="color:#666699;">Comment:</td>' . "\n\t\t\t";
					echo '			<td  width="180" align="left" colspan="3"><textarea name="comment" rows="5" cols="80"></textarea></td>' . "\n\t\t\t";
					echo '		</tr>' . "\n\t\t\t";
					echo '		<tr>' . "\n\t\t\t";
					echo '			<td colspan="4" align="center">' . "\n\t\t\t";
					echo '				<input type="submit" name="add" value="Sign Guest Book" />' . "\n\t\t\t";
					echo '				<input type="submit" name="cancel" value="Cancel" onClick="setCancel();" />' . "\n\t\t\t";
					echo '			</td>' . "\n\t\t\t";
					echo '		</tr>' . "\n\t\t\t";
					echo '	</table>' . "\n\t\t\t";
					echo '</form>' . "\n\t\t\t";
					echo '<p />' . "\n\t\t\t";
					echo '&nbsp;' . "\n\t\t\t";
					echo '<script type="text/javascript">' . "\n\t\t\t";
					echo '	document.form.visit.value = formatDate;' . "\n\t\t\t";
					echo '</script>' . "\n";
				}
				else
				{
					// Set some variables we will need for the database
					// We have different settings depending upon if this is being run locally or on the internet
					if ($_SERVER['HTTP_HOST'] == "seeleyonline")
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

					// If the use clicked on submit for a new message
					if (isset($_POST['add']))
					{
						// Get the names of the input fields
						$name = get_post('name');
						$email  = get_post('email');
						$visit = get_post('visit');
						$comment = get_post('comment');

						// Create a query to insert the records
						$query = "INSERT INTO visitors VALUES (NULL, '$name', '$email', '$visit', '$comment')";

						// Finally add the new record
						if (!mysql_query($query, $db_server))
							echo "INSERT failed: $query<br />" . mysql_error();

						// Send me an email to tell me what was added
						$body = "Name: " . $name . "\n\n Email: " . $email . "\n\n Date: " . $visit . "\n\n Comment: " . $comment;
						mail("tony@seeleyonline.com", "New message on web site", $body);
					}

					// Select the data
					$query = "SELECT * FROM visitors ORDER BY id DESC";
					$result = mysql_query($query);
					if (!$result) die ("Database access failed: " . mysql_error());

					// Get the number of messages in the results, we use this to determine how many pages we need
					$messageCount = mysql_num_rows($result);

					// Calculate the total number of pages we need
					$messagePerPage = 5;
					$pages = ((int)($messageCount / $messagePerPage)) + ($messageCount % $messagePerPage > 0 ? 1 : 0);

					// Determine what page we are on, if this has been passed we can get that, otherwise set it to 1
					if (isset($_GET['page']))
					{
						$page = $_GET['page'];

						// if an invalid page number was passed tell the user and reset to page 1
						if ($page > $pages || $page < 1)
						{
							echo "An invalid page number was passed.";
							$page = 1;
						}
					}
					else
						$page = 1;

					// Calculate the start row we need to display and the number of rows on the page
					$startMessage = (($page - 1) * $messagePerPage);
					$messageOnPage = min($messagePerPage, $messageCount - $startMessage);

					echo '<form action="/guestbook.php" method="post">' . "\n\t\t\t";
					echo '	<input type="hidden" name="sign" value="yes" />' . "\n\t\t\t";
					echo '	<center><input type="submit" value="Sign the Guest Book"></center>' . "\n\t\t\t";
					echo '</form>' . "\n\t\t\t";
					echo "<p />" . "\n";

					// We only want to seek for a record if we have any messages
					if ($messageCount > 0)
					{
						// Move to the start record
						mysql_data_seek($result, $startMessage) or die("Unable to seek row: " . mysql_error());

						// Repeat for each message on the page
						for ($rowCount = 0 ; $rowCount < $messageOnPage ; ++$rowCount)
						{
							$row = mysql_fetch_row($result);
							echo "\t\t\t" . '<table width="970" cellpadding="4" cellspacing="0">' . "\n\t\t\t";
							echo '	<tr>' . "\n\t\t\t";
							echo '		<td class="tl" width="100">Name</td>' . "\n\t\t\t";
							echo '		<td class="da" width="385">' . $row[1] . '</td>' . "\n\t\t\t";
							echo '		<td class="hr" width="100">Date</td>' . "\n\t\t\t";
							echo '		<td class="tr" width="385">' . $row[3] . '</td>' . "\n\t\t\t";
							echo '	</tr>' . "\n\t\t\t";
							echo '	<tr>' . "\n\t\t\t";
							echo '		<td class="bl" width="100">Comment</td> ' . "\n\t\t\t";
							echo '		<td class="br" width="870" colspan="3">' . $row[4] . '</td>' . "\n\t\t\t";
							echo '	</tr>' . "\n\t\t\t";
							echo '</table>' . "\n\t\t\t";
							echo '<br />&nbsp;' . "\n";
						}
					}

					mysql_close($db_server);

					if ($pages > 1)
					{
						echo "\t\t\t<center>";
						for ($i = 1 ; $i <= $pages ; $i++)
							if ($i == $page)
								echo "[" . $i . "]&nbsp;";
							else
								echo "[" . "<a href='./guestbook.php?page=" . $i . "'>" . $i . "</a>" . "]&nbsp;";
						echo "</center>";
					}
				}

				function get_post($var)
				{
					return mysql_real_escape_string($_POST[$var]);
				}
			?>
		</div>
	</div>
	<div class="footer">
		<p id="footer">&nbsp;</p>
		<script type="text/javascript">
			document.getElementById("m_home").style.color = "#0b67d4";
			document.getElementById("m_guestbook").style.background = "#e37e00";
			updatePage("m_home");
		</script>
	</div>
</body>
</html>
