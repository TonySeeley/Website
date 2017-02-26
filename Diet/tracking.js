var selectedWeek=1;
var selectedDay=1;
var data = new Array();

function startup()
{
	setupData(data);
	UpdateCalendar(selectedWeek, selectedDay);
}

function SelectDay(day)
{
	document.getElementById("Day"+selectedDay).bgColor="#80FFFF";
	document.getElementById("Day"+selectedDay).style.color="black";
	selectedDay = parseInt(day.substring(3),10);
	document.getElementById("Day"+selectedDay).bgColor="#000080";
	document.getElementById("Day"+selectedDay).style.color="white";
	UpdateCalendar(selectedWeek, selectedDay);
}

function SelectWeek(week)
{
	document.getElementById("Day"+selectedDay).bgColor="#80FFFF";
	document.getElementById("Day"+selectedDay).style.color="black";
	document.getElementById("Week"+selectedWeek).bgColor="#80FFFF";
	document.getElementById("Week"+selectedWeek).style.color="black";
	selectedWeek = parseInt(week.substring(4),10);
	selectedDay=1;
	document.getElementById("Day"+selectedDay).bgColor="#000080";
	document.getElementById("Day"+selectedDay).style.color="white";
	document.getElementById("Week"+selectedWeek).bgColor="#000080";
	document.getElementById("Week"+selectedWeek).style.color="white";
	UpdateCalendar(selectedWeek, selectedDay);
}

function hightLightCell(buttonID)
{
	if (buttonID.substr(0,3) == "Day" && buttonID == "Day"+selectedDay)
		return;
	if (buttonID.substr(0,4) == "Week" && buttonID == "Week"+selectedWeek)
		return;
	document.getElementById(buttonID).bgColor="#B8C6D8";
}

function lowLightCell(buttonID)
{
	if (buttonID.substr(0,3) == "Day" && buttonID == "Day"+selectedDay)
		return;
	if (buttonID.substr(0,4) == "Week" && buttonID == "Week"+selectedWeek)
		return;
	document.getElementById(buttonID).bgColor="#80FFFF";
}

function UpdateCalendar(week, day)
{
	week -= 1;
	day -= 1;

	ml1Time  = data[week][day][1];
	ml1Food  = data[week][day][2];
	ml1Cal   = data[week][day][3];
	ml1Fat   = data[week][day][4];
	ml2Time  = data[week][day][5];
	ml2Food  = data[week][day][6];
	ml2Cal   = data[week][day][7];
	ml2Fat   = data[week][day][8];
	ml3Time  = data[week][day][9];
	ml3Food  = data[week][day][10];
	ml3Cal   = data[week][day][11];
	ml3Fat   = data[week][day][12];
	ml4Time  = data[week][day][13];
	ml4Food  = data[week][day][14];
	ml4Cal   = data[week][day][15];
	ml4Fat   = data[week][day][16];
	ml5Time  = data[week][day][17];
	ml5Food  = data[week][day][18];
	ml5Cal   = data[week][day][19];
	ml5Fat   = data[week][day][20];
	totCal   = data[week][day][21];
	totFat   = data[week][day][22];
	exercise = data[week][day][23];

	html = '<table border="1" cellspacing="0"><tr><td>'
	html += '<table>'
	html += '	<tr bgcolor="#FFFFC0">'
	html += '		<td colspan="5" align="center"><b>Meal Tracking</b>'
	html += '	<tr bgcolor="#FFFFC0">'
	html += '		<td width="100"><b>Meal</b>'
	html += '		<td width="50"><b>Time</b>'
	html += '		<td width="200"><b>Food</b>'
	html += '		<td width="80"><b>Calories</b>'
	html += '		<td width="80"><b>Fat (g)</b>'
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td valign="top" bgcolor="#FFFFC0"><b>Breakfast</b>'
	html += '		<td valign="top">'+ml1Time
	html += '		<td valign="top">'+ml1Food
	html += '		<td valign="top">'+ml1Cal
	html += '		<td valign="top">'+ml1Fat
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td valign="top" bgcolor="#FFFFC0"><b>Snack</b>'
	html += '		<td valign="top">'+ml2Time
	html += '		<td valign="top">'+ml2Food
	html += '		<td valign="top">'+ml2Cal
	html += '		<td valign="top">'+ml2Fat
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td valign="top" bgcolor="#FFFFC0"><b>Lunch</b>'
	html += '		<td valign="top">'+ml3Time
	html += '		<td valign="top">'+ml3Food
	html += '		<td valign="top">'+ml3Cal
	html += '		<td valign="top">'+ml3Fat
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td valign="top" bgcolor="#FFFFC0"><b>Snack</b>'
	html += '		<td valign="top">'+ml4Time
	html += '		<td valign="top">'+ml4Food
	html += '		<td valign="top">'+ml4Cal
	html += '		<td valign="top">'+ml4Fat
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td valign="top" bgcolor="#FFFFC0"><b>Dinner</b>'
	html += '		<td valign="top">'+ml5Time
	html += '		<td valign="top">'+ml5Food
	html += '		<td valign="top">'+ml5Cal
	html += '		<td valign="top">'+ml5Fat
	html += '	<tr bgcolor="#FFFFC0">'
	html += '		<td valign="top"><b>Total</b>'
	html += '		<td valign="top">&nbsp;'
	html += '		<td valign="top">&nbsp;'
	html += '		<td valign="top"><b>'+totCal+'</b>'
	html += '		<td valign="top"><b>'+totFat+'</b>'
	html += '</table>'
	html += '</table><br>'
	html += '<table border="1" cellspacing="0"><tr><td>'
	html += '<table>'
	html += '	<tr bgcolor="#C0FFC0">'
	html += '		<td width="100" valign="top" bgcolor="#FFFFC0"><b>Exercise<br><br></b>'
	html += '		<td width="423" valign="top">'+exercise
	html += '</table>'
	html += '</table>'

	document.getElementById("Date").innerHTML = data[week][day][0];
	document.getElementById("Calendar").innerHTML = html;
}

function setupData()
{
	data[0] = new Array();
	data[0][0] = new Array("Tuesday 29 July 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Strawberry Shake","190","1","14:00","Chicken (6oz)<br>Marinade<br>Strawberry Shake","210<br>45<br>190","6<br>4.5<br>1","16:00","Strawberry Shake","190","1","18:30","Chicken (6oz)<br>Marinade<br>Strawberry Shake","210<br>45<br>190","6<br>4.5<br>1","1560","34","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmill")
	data[0][1] = new Array("Wednesday 30 July 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Strawberry Shake","190","1","14:00","Isernio Chicken Sausage (6oz)<br>Strawberry Shake","210<br>190","6<br>1","16:00","Strawberry Shake","190","1","19:00","Chicken (6oz)<br>Marinade<br>Strawberry Shake","210<br>45<br>190","6<br>4.5<br>1","1515","29.5","Pro Club : 1.5 Hours with trainer")
	data[0][2] = new Array("Thursday 31 July 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","-----","---------------------------","---","---","12:30","Processed Turkey (6oz)<br>Strawberry Shake","210<br>190","6<br>1","15:00","Strawberry Shake","190","1","19:30","Salmon (6oz)<br>Mustard Sauce<br>Strawberry Shake","330<br>0<br>190","18.5<br>0<br>1","1400","36.5","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[0][3] = new Array("Friday 1 August 2003","07:20","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Strawberry Shake","190","1","14:00","Chicken (6oz)<br>Marinade<br>Strawberry Shake","210<br>45<br>190","6<br>4.5<br>1","16:00","Strawberry Shake","190","1","20:00","Chicken (6oz)<br>Marinade<br>Mustard<br>Strawberry Shake","210<br>45<br>5<br>190","6<br>4.5<br>0<br>1","1565","34","Pro Club : 1.5 Hours with trainer")
	data[0][4] = new Array("Saturday 2 August 2003","11:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","13:30","Strawberry Shake","190","1","17:00","Chicken (6oz)<br>Strawberry Shake","210<br>190","6<br>1","18:00","Strawberry Shake","190","1","22:00","Chicken (6oz)<br>Marinade<br>Mustard<br>Strawberry Shake","210<br>45<br>5<br>190","6<br>4.5<br>0<br>1","1520","29.5","Day Off - (My birthday :-)")
	data[0][5] = new Array("Sunday 3 August 2003","09:10","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","13:00","Strawberry Shake","190","1","12:00","Processed Turkey (6oz)<br>Cashew Nuts (6)","210<br>45","6<br>5","17:30","Strawberry Shake","190","1","21:00","Salmon (6oz)<br>Asian Marinade<br>Strawberry Shake<br>Egg Beaters (1/2 cup)","330<br>40<br>190<br>60","18<br>4.5<br>1<br>2","1545","47.5","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[0][6] = new Array("Monday 4 August 2003","07:30","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:30","Strawberry Shake","190","1","14:00","Chicken (6oz)<br>Olive Oil (1 tsp)<br>Strawberry Shake","210<br>45<br>190","6<br>5<br>1","16:45","Strawberry Shake","190","1","20:30","Chicken (6oz)<br>Vegetables (4 cups)<br>Fat Free Dressing<br>Strawberry Shake","210<br>100<br>20<br>190","6<br>0<br>0<br>1","1635","30","Pro Club : 1.5 Hours with trainer")

	data[1] = new Array();
	data[1][0] = new Array("Tuesday 5 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6 oz)<br>Strawberry Shake","210<br>190","6<br>1","16:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","21:00","Salmon (6oz)<br>Marinade<br>Vegetables (4 cups)<br>Strawberry Shake","330<br>70<br>100<br>190","18<br>5<br>0<br>1","1760","44","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[1][1] = new Array("Wednesday 6 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Olive Oil (1 tsp)<br>Strawberry Shake","210<br>45<br>190","6<br>5<br>1","16:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Isernio Chicken Sausage (6oz)<br>Vegetables (4 cups)<br>Oil Dressing<br>Strawberry Shake","210<br>100<br>15<br>190","6<br>0<br>0<br>1","1630","32","Pro Club : 1.5 Hours with trainer")
	data[1][2] = new Array("Thursday 7 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Olive Oil (1 tsp)<br>Strawberry Shake","210<br>45<br>190","6<br>5<br>1","17:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","21:00","Chicken (6oz)<br>Vegetables (4 cups)<br>Olive Oil (1 tsp)<br>Strawberry Shake","210<br>100<br>45<br>190","6<br>0<br>5<br>1","1660","37","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[1][3] = new Array("Friday 8 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Isernio Chicken Sausage (6oz)<br>Strawberry Shake","210<br>190","6<br>1","18:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Chicken (6oz)<br>Marinade<br>Vegetables (4 cups)<br>Strawberry Shake","210<br>70<br>100<br>190","6<br>5<br>0<br>1","1640","32","Pro Club : 1.5 Hours with trainer")
	data[1][4] = new Array("Saturday 9 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Tuna (6oz)<br>Vegetables (3 cups)<br>Strawberry Shake","210<br>75<br>190","6<br>0<br>1","17:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:00","Chicken (6oz)<br>Fat Free Dressing<br>Vegetables (4 cups)<br>Strawberry Shake","210<br>20<br>100<br>190","6<br>0<br>0<br>1","1665","27","Day Off")
	data[1][5] = new Array("Sunday 10 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Cashew Nuts (6)<br>Strawberry Shake","210<br>55<br>190","6<br>5<br>1","16:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Chicken (6oz)<br>Fat Free Dressing<br>Vegetables (4 cups)<br>Strawberry Shake","210<br>20<br>100<br>190","6<br>0<br>0<br>1","1645","32","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[1][6] = new Array("Monday 11 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Olive Oil (1 tsp)<br>Strawberry Shake","210<br>45<br>190","6<br>5<br>1","16:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","19:00","Salmon (6oz)<br>Vegetables (4 cups)<br>Soy Nuts (1/2 bag)<br>Fat Free Dressing<br>Yoghurt","330<br>100<br>90<br>50<br>110","18<br>0<br>3<br>0<br>0","1795","46","Pro Club : 1.5 Hours with trainer")

	data[2] = new Array();
	data[2][0] = new Array("Tuesday 12 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Oil (tsp)<br>Yogurt<br>Soy Nuts (1/2 Bag)","210<br>45<br>110<br>90","6<br>5<br>0<br>3","17:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Isernio Chicken Sausage (6oz)<br>Vegetables (4 cups)<br>Strawberry Shake<br>Oil Dressing","210<br>100<br>190<br>20","6<br>0<br>1<br>0","1645","34","Home : 20 Minutes Exercise Bike<br>20 Minutes Treadmilll")
	data[2][1] = new Array("Wednesday 13 August 2003","08:30","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (4oz)<br>Yogurt<br>Soy Nuts (1/2 Bag)","140<br>110<br>90","4<br>0<br>3","17:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Chicken (6oz)<br>Vegetables (4 cups)<br>Strawberry Shake<br>Oil Dressing","210<br>100<br>190<br>60","6<br>0<br>1<br>0","1570","27","Pro Club : 1.5 Hours with trainer")
	data[2][2] = new Array("Thursday 14 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Strawberry Shake<br>Cashew Nuts (6)","210<br>190<br>50","6<br>1<br>5","17:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","21:00","Chicken (6oz)<br>Vegetables (2 cups)<br>Yoghurt","210<br>50<br>110","6<br>0<br>0","1490","31","Day Off")
	data[2][3] = new Array("Friday 15 August 2003","-----","---------------------------","---","---","15:00","Berries (1 cup)","120","0","16:00","Strawberry Shake","190","1","-----","---------------------------","---","---","21:00","Chicken (6oz)<br>Vegetables (8 cups)<br>Oil Dressing<br>Yoghurt<br>Soy Nuts (1/2 Bag)","210<br>200<br>45<br>110<br>90","6<br>0<br>5<br>0<br>3","965","15","Day Off - Flight US to UK")
	data[2][4] = new Array("Saturday 16 August 2003","09:00","Salmon (2oz)<br>Ham (1oz)<br>Eggs (3)<br>Vegetables (2 cups)","110<br>35<br>105<br>50","6<br>1<br>3<br>0","12:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","-----","---------------------------","---","---","17:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:40","Chicken (6oz)<br>Vegetables (4 cups)<br>Fat Free Dressing<br>Yoghurt<br>Soy Nuts (1/2 Bag)","210<br>100<br>20<br>110<br>90","6<br>0<br>0<br>0<br>3","1210","23","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")
	data[2][5] = new Array("Sunday 17 August 2003","08:30","Egg Whites (3)<br>Ham (2oz)<br>Vegetables (2 cups)","105<br>70<br>50","3<br>2<br>0","11:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","13:00","Chicken (6oz)<br>Vegetables (2 cups)<br>Olive Oil (1 tsp)","210<br>50<br>45","6<br>0<br>5","17:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","20:30","Chicken (6oz)<br>Vegetables (4 cups)<br>Oil Dressing","210<br>100<br>45","6<br>0<br>5","1265","31","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")
	data[2][6] = new Array("Monday 18 August 2003","10:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","13:00","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Salad (2 Cups)<br>Olive Oil (1 tsp)","210<br>50<br>50","1<br>0<br>5","-----","---------------------------","---","---","19:00","Chicken (6oz)<br>Vegetables (4 cups)<br>Yoghurt<br>Soy Nuts (1/2 bag)","210<br>100<br>110<br>50","1<br>0<br>0<br>5","1260","23","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")

	data[3] = new Array();
	data[3][0] = new Array("Tuesday 19 August 2003","09:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","13:30","Chicken (6oz)<br>Oil<br>Vegetables","210<br>100<br>50","6<br>5<br>0","-----","---------------------------","---","---","21:00","Chicken (6oz)<br>Vegetables<br>Oil<br>Nuts<br>Yoghurt","210<br>100<br>50<br>90<br>110","6<br>0<br>5<br>3<br>0","1400","36","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")
	data[3][1] = new Array("Wednesday 20 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Oil<br>Vegetables","210<br>100<br>50","6<br>5<br>0","-----","---------------------------","---","---","21:00","Chicken (6oz)<br>Vegetables<br>Oil<br>Nuts<br>Yoghurt","210<br>100<br>50<br>90<br>110","6<br>0<br>5<br>3<br>0","1450","38","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")
	data[3][2] = new Array("Thursday 21 August 2003","09:30","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Berries (1 cup)","120","0","13:30","Chicken (6oz)<br>Dressing<br>Vegetables","210<br>50<br>100","6<br>0<br>5","16:00","Berries (1 cup)<br>Yoghurt","120<br>110","0<br>0","21:00","Chicken (6oz)<br>Oil<br>Yoghurt","210<br>50<br>110","6<br>5<br>0","1370","31","Hotel: 25 Minutes Exercise Bike<br>25 Minutes Treadmilll")
	data[3][3] = new Array("Friday 22 August 2003","08:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","-----","---------------------------","---","---","14:00","Chicken (6oz)<br>Oil<br>Salad","210<br>45<br>50","6<br>5<br>0","17:30","Chicken (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","22:00","Chicken (6oz)<br>Vegetables<br>Yoghurt<br>Nuts","210<br>100<br>110<br>50","6<br>0<br>0<br>5","1255","33","Day Off")
	data[3][4] = new Array("Saturday 23 August 2003","09:00","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","-----","---------------------------","---","---","13:00","Chicken (6oz)<br>Oil<br>Vegetables","210<br>100<br>50","6<br>5<br>0","15:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","22:00","Chicken (6oz)<br>Salad<br>Oil<br>Dressing<br>Yoghurt<br>Nuts<br>Berries (1 cup)","210<br>100<br>50<br>40<br>110<br>120","6<br>0<br>5<br>0<br>0<br>0","1400","32","Warwick: 30 Minutes Walked Dog")
	data[3][5] = new Array("Sunday 24 August 2003","08:00","Peanut Butter (tbsp)","100","8","-----","---------------------------","---","---","12:30","Tuna (3oz)<br>Salad<br>Oil","105<br>50<br>45","3<br>0<br>5","16:00","Braised Steak (4oz)<br>Vegetables","220<br>50","12<br>0","21:00","Chicken (6oz)<br>Salad<br>Dressing","210<br>150<br>100","6<br>0<br>0","1040","34","Day Off - Flight UK to US")
	data[3][6] = new Array("Monday 25 August 2003","07:30","Strawberry Shake<br>Peanut Butter (tbsp)","190<br>100","1<br>8","11:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","14:00","Chicken (6oz)<br>Oil<br>Salad<br>Yoghurt<br>Nuts","210<br>45<br>50<br>110<br>50","6<br>5<br>0<br>0<br>5","17:00","Ham (2oz)<br>Berries (1 cup)","70<br>120","2<br>0","21:00","Chicken Sausages (6oz)<br>Vegetables<br>Dressing<br>Yoghurt","210<br>100<br>40<br>110","6<br>0<br>0<br>0","1595","35","Pro Club : 1.5 Hours with trainer")

	data[4] = new Array();
	data[4][0] = new Array("Tuesday 26 August 2003",	"08:00","Berries (1 cup)<br>Chicken (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","14:00","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts<br>Yogurt","210<br>50<br>40<br>50<br>110","6<br>0<br>0<br>5<br>0","17:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","20:00","Chicken (6oz)<br>Salad<br>Oil<br>Dressing<br>Yogurt","210<br>100<br>45<br>40<br>110","6<br>0<br>5<br>0<br>0","1635","36","Home : 40 Minutes Treadmilll")
	data[4][1] = new Array("Wednesday 27 August 2003",	"08:00","Berries (1 cup)<br>Chicken (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","17:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","20:00","Salmon (5oz)<br>Dressing<br>Vegetables<br>Yogurt","275<br>32<br>100<br>110","15<br>3<br>0<br>0","1657","42","Pro Club : 1.5 Hours with trainer")
	data[4][2] = new Array("Thursday 28 August 2003",	"08:00","Berries (1 cup)<br>Chicken (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:30","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:00","Chicken (6oz)<br>Salad<br>Yogurt","210<br>100<br>110","6<br>0<br>0","17:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","20:30","Chicken (6oz)<br>Dressing<br>Vegetables<br>Nuts<br>Yogurt","210<br>40<br>100<br>45<br>110","6<br>0<br>0<br>5<br>0","1595","29","Home : 40 Minutes Treadmilll")
	data[4][3] = new Array("Friday 29 August 2003",		"08:00","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","17:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","21:30","Isernio Chicken Sausage (6oz)<br>Dressing<br>Vegetables<br>Nuts<br>Yogurt","210<br>40<br>100<br>45<br>110","6<br>0<br>0<br>5<br>0","1755","35","Pro Club : 1.5 Hours with trainer")
	data[4][4] = new Array("Saturday 30 August 2003",	"10:00","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","13:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","16:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","18:30","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","21:30","Egg Beaters (1 cup)<br>Ham (2oz)<br>Cheese Stick<br>Salad<br>Dressing<br>Nuts","140<br>70<br>80<br>100<br>40<br>45","4<br>2<br>5<br>0<br>0<br>5","1625","40","Day Off")
	data[4][5] = new Array("Sunday 31 August 2003",		"08:00","Berries (1 cup)<br>Chicken (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:30","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:30","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts<br>Yogurt","210<br>100<br>50<br>45<br>110","6<br>0<br>0<br>5<br>0","17:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","20:30","Halibut (6oz)<br>Dressing<br>Vegetables<br>Nuts<br>Yogurt","210<br>40<br>100<br>45<br>110","6<br>0<br>0<br>5<br>0","1695","39","Home : 40 Minutes Treadmilll")
	data[4][6] = new Array("Monday 1 September 2003",	"10:00","Berries (1 cup)<br>Chicken (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","12:00","Berries (1 cup)<br>Yogurt","120<br>110","0<br>0","14:30","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts","210<br>100<br>50<br>45","6<br>0<br>0<br>5","17:00","Berries (1 cup)<br>Chicken (2oz)","120<br>70","0<br>2","20:30","Egg Beaters (1 cup)<br>Ham (2oz)<br>Cheese Stick<br>Salad<br>Dressing<br>Nuts","140<br>70<br>80<br>100<br>40<br>45","4<br>2<br>5<br>0<br>0<br>5","1590","39","Pro Club : 1.5 Hours with trainer")

	data[5] = new Array();
	data[5][0] = new Array("Tuesday 2 September 2003",	"08:00","Berries (1 cup)<br>Turkey (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","14:00","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts<br>Cheese","210<br>50<br>50<br>50<br>80","6<br>0<br>0<br>5<br>5","17:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","20:00","Egg Beaters (1 cup)<br>Turkey (2oz)<br>Salad<br>Oil<br>Dressing<br>Nuts<br>Cheese","140<br>70<br>100<br>23<br>50<br>50<br>80","4<br>2<br>0<br>5<br>2<br>5<br>0","1623","48","Home : 40 Minutes Treadmilll")
	data[5][1] = new Array("Wednesday 3 September 2003","08:00","Berries (1 cup)<br>Turkey (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","14:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","17:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","20:00","Halibut (6oz)<br>Dressing<br>Oil<br>Vegetables<br>Nuts<br>Yogurt","210<br>50<br>11<br>100<br>45<br>110","6<br>0<br>0<br>100<br>5<br>0","1666","36","Pro Club : 1.5 Hours with trainer")
	data[5][2] = new Array("Thursday 4 September 2003",	"08:00","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:00","Chicken (6oz)<br>Salad<br>Dressing","210<br>100<br>50","6<br>0<br>0","17:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","20:30","Chicken (8 oz)<br>Vegetables<br>Dressing<br>Nuts<br>Yogurt","280<br>100<br>50<br>50<br>110","8<br>0<br>0<br>5<br>0","1610","32","Pro Club : 60 Minutes Racquetball")
	data[5][3] = new Array("Friday 5 September 2003",	"08:00","Berries (1 cup)<br>Turkey (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","14:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","17:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","21:00","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts<br>Yogurt","210<br>100<br>50<br>50<br>110","6<br>0<br>5<br>0<br>0","1660","35","Pro Club : 1.5 Hours with trainer")
	data[5][4] = new Array("Saturday 6 September 2003",	"10:00","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","12:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","15:00","Chicken (6oz)<br>Vegetables<br>Dressing","210<br>50<br>50","6<br>0<br>0","17:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","21:00","Ham (6 oz)<br>Vegetables<br>Dressing<br>Salad<br>Nuts<br>Yogurt","210<br>100<br>50<br>50<br>50<br>110","6<br>0<br>0<br>5<br>3<br>0","1560","36","Day Off")
	data[5][5] = new Array("Sunday 7 September 2003",	"09:00","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","12:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","15:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","18:00","Berries (1 cup)<br>Turkey (2oz)","120<br>70","0<br>2","21:00","Egg Beaters (1 cup)<br>Ham (2oz)<br>Salad<br>Dressing<br>Nuts<br>Yogurt","140<br>70<br>100<br>50<br>50<br>110","4<br>2<br>0<br>0<br>5<br>0","1630","35","Home : 40 Minutes Treadmilll")
	data[5][6] = new Array("Monday 8 September 2003",	"07:30","Berries (1 cup)<br>Ham (2oz)<br>Peanut Butter (tbsp)","120<br>70<br>100","0<br>2<br>8","11:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","14:00","Asian Chicken Salad<br>Yogurt","360<br>110","10<br>0","17:00","Berries (1 cup)<br>Ham (2oz)","120<br>70","0<br>2","22:00","Chicken (6oz)<br>Salad<br>Dressing<br>Nuts<br>Cheese<br>Apple","210<br>100<br>40<br>50<br>60<br>60","6<br>0<br>0<br>5<br>5<br>0","1590","38","Pro Club : 1.5 Hours with trainer")

	data[6] = new Array();
	data[6][0] = new Array("Tuesday 9 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][1] = new Array("Wednesday 10 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][2] = new Array("Thursday 11 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][3] = new Array("Friday 12 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][4] = new Array("Saturday 13 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][5] = new Array("Sunday 14 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[6][6] = new Array("Monday 15 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[7] = new Array();
	data[7][0] = new Array("Tuesday 16 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][1] = new Array("Wednesday 17 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][2] = new Array("Thursday 18 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][3] = new Array("Friday 19 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][4] = new Array("Saturday 20 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][5] = new Array("Sunday 21 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[7][6] = new Array("Monday 22 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[8] = new Array();
	data[8][0] = new Array("Tuesday 23 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][1] = new Array("Wednesday 24 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][2] = new Array("Thursday 25 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][3] = new Array("Friday 26 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][4] = new Array("Saturday 27 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][5] = new Array("Sunday 28 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[8][6] = new Array("Monday 29 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[9] = new Array();
	data[9][0] = new Array("Tuesday 30 September 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][1] = new Array("Wednesday 1 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][2] = new Array("Thursday 2 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][3] = new Array("Friday 3 October 2003",		"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][4] = new Array("Saturday 4 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][5] = new Array("Sunday 5 October 2003",		"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[9][6] = new Array("Monday 6 October 2003",		"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[10] = new Array();
	data[10][0] = new Array("Tuesday 7 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][1] = new Array("Wednesday 8 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][2] = new Array("Thursday 9 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][3] = new Array("Friday 10 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][4] = new Array("Saturday 11 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][5] = new Array("Sunday 12 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[10][6] = new Array("Monday 13 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[11] = new Array();
	data[11][0] = new Array("Tuesday 14 September 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][1] = new Array("Wednesday 15 October 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][2] = new Array("Thursday 16 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][3] = new Array("Friday 17 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][4] = new Array("Saturday 18 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][5] = new Array("Sunday 19 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[11][6] = new Array("Monday 20 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[12] = new Array();
	data[12][0] = new Array("Tuesday 21 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][1] = new Array("Wednesday 22 October 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][2] = new Array("Thursday 23 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][3] = new Array("Friday 24 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][4] = new Array("Saturday 25 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][5] = new Array("Sunday 26 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[12][6] = new Array("Monday 27 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[13] = new Array();
	data[13][0] = new Array("Tuesday 28 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][1] = new Array("Wednesday 29 October 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][2] = new Array("Thursday 30 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][3] = new Array("Friday 31 October 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][4] = new Array("Saturday 1 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][5] = new Array("Sunday 2 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[13][6] = new Array("Monday 3 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[14] = new Array();
	data[14][0] = new Array("Tuesday 4 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][1] = new Array("Wednesday 5 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][2] = new Array("Thursday 6 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][3] = new Array("Friday 7 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][4] = new Array("Saturday 8 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][5] = new Array("Sunday 9 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[14][6] = new Array("Monday 10 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[15] = new Array();
	data[15][0] = new Array("Tuesday 11 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][1] = new Array("Wednesday 12 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][2] = new Array("Thursday 13 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][3] = new Array("Friday 14 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][4] = new Array("Saturday 15 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][5] = new Array("Sunday 16 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[15][6] = new Array("Monday 17 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[16] = new Array();
	data[16][0] = new Array("Tuesday 18 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][1] = new Array("Wednesday 19 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][2] = new Array("Thursday 20 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][3] = new Array("Friday 21 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][4] = new Array("Saturday 22 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][5] = new Array("Sunday 23 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[16][6] = new Array("Monday 24 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[17] = new Array();
	data[17][0] = new Array("Tuesday 25 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][1] = new Array("Wednesday 26 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][2] = new Array("Thursday 27 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][3] = new Array("Friday 28 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][4] = new Array("Saturday 29 November 2003","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][5] = new Array("Sunday 30 November 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")
	data[17][6] = new Array("Monday 1 December 2003",	"-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","-----","---------------------------","---","---","----","--","---------------------------")

	data[18] = new Array();
	data[18][0] = new Array("Tuesday 2 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","13:00","Chicken<br>Salad<br>Dressing","210<br>100<br>50","6<br>0<br>0","17:00","Balance Bar","200","6","19:30","Chicken<br>Salad<br>Nuts<br>Dressing<br>Cheese<br>Yoghurt","210<br>100<br>50<br>50<br>85<br>110","6<br>0<br>5<br>0<br>5<br>0","1650","44.5","Day Off")
	data[18][1] = new Array("Wednesday 3 December 2003","08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yoghurt","280","8","17:00","Balance Bar","200","6","20:00","Wendy's Chilli<br>Wendy's Chicken Salad<br>Nuts<br>Yoghurt","300<br>150<br>100<br>110","8<br>1.5<br>10<br>0","1735","50","Pro Club : 1.5 Hours with trainer")
	data[18][2] = new Array("Thursday 4 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","12:30","Salmon<br>Vegetables<br>Fruit","330<br>100<br>60","18<br>0<br>0","17:00","Balance Bar","200","6","20:30","Chicken<br>Salad<br>Nuts<br>Dressing<br>Cheese<br>Yoghurt","210<br>100<br>50<br>50<br>85<br>110","6<br>0<br>5<br>0<br>5<br>0","1780","56.5","Day Off")
	data[18][3] = new Array("Friday 5 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yoghurt","280","8","17:00","Balance Bar","200","6","19:30","Brown Rice<br>Chicken<br>Black Bean Source<br>Vegetables<br>Yoghurt","190<br>210<br>100<br>100<br>110","2<br>6<br>5<br>0<br>0","1785","43.5","Pro Club : 1.5 Hours with trainer")
	data[18][4] = new Array("Saturday 6 December 2003",	"10:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:30","Ham<br>Salad<br>Nuts<br>Dressing<br>Yoghurt","210<br>100<br>50<br>60<br>110","6<br>0<br>5<br>0<br>0","17:00","Balance Bar","200","6","21:00","Spinach Tortillas<br>Chicken<br>Salad<br>Cheese<br>Sour Cream<br>Guacamole","200<br>210<br>100<br>100<br>100<br>50","8<br>6<br>0<br>10<br>5<br>5","1975","67.5","Day Off")
	data[18][5] = new Array("Sunday 7 December 2003",	"09:30","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:30","Ham<br>Salad<br>Dressing<br>Egg<br>Chili","140<br>100<br>50<br>75<br>300","4<br>0<br>5<br>4.5<br>10","12:00","Balance Bar","200","6","21:00","Hot Dogs<br>Bread<br>Yoghurt","90<br>160<br>110","0<br>4<br>0","1710","50","West Summit Snoqualmie : 4 Hours Skiing")
	data[18][6] = new Array("Monday 8 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yogurt","280<br>110","8<br>0","17:00","Balance Bar","200","6","20:00","Chicken<br>Salad<br>Nuts<br>Dressing<br>Cheese<br>Yoghurt","210<br>100<br>50<br>50<br>85<br>110","6<br>0<br>5<br>0<br>5<br>0","1680","46.5","Pro Club : 1.5 Hours with trainer")

	data[19] = new Array();
	data[19][0] = new Array("Tuesday 9 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","12:30","Chicken<br>Salad<br>Dressing","175<br>100<br>50","5<br>0<br>0","17:00","Balance Bar","200","6","19:30","Egg Beaters (1.5 Cups)<br>Hot Dogs<br>Cheese Stick<br>Salad<br>Nuts<br>Dressing<br>Yoghurt<br>Fruit","210<br>90<br>85<br>100<br>50<br>60<br>110<br>60","6<br>0<br>5<br>0<br>5<br>0<br>0<br>0","1775","43.5","Day Off")
	data[19][1] = new Array("Wednesday 10 December 2003","08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yoghurt","280<br>110","8<br>0","17:00","Balance Bar","200","6","20:30","Chicken<br>Dressing<br>Vegetables<br>Yoghurt<br>Fruit","210<br>50<br>100<br>110<br>60","6<br>5<br>0<br>0<br>0","1605","41.5","Pro Club : 1.5 Hours with trainer")
	data[19][2] = new Array("Thursday 11 December 2003","08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","13:00","Chicken<br>Salad<br>Dressing","175<br>100<br>50","5<br>0<br>0","17:00","Balance Bar","200","6","21:00","Ham<br>Tuna<br>Salad<br>Tortilla<br>Nuts<br>Dressing<br>Yoghurt","170<br>170<br>100<br>80<br>50<br>60<br>110","4<br>4<br>0<br>4<br>5<br>0<br>0","1750","44.5","Day Off")
	data[19][3] = new Array("Friday 12 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yoghurt","280<br>110","8<br>0","17:00","Balance Bar","200","6","20:00","Chicken<br>Vegetables<br>Dressing<br>Tortilla<br>Yoghurt","210<br>100<br>50<br>100<br>110","6<br>0<br>5<br>4<br>0","1645","45.5","Pro Club : 1.5 Hours with trainer")
	data[19][4] = new Array("Saturday 13 December 2003","10:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad<br>Yoghurt","280<br>110","8<br>0","17:00","Balance Bar","200","6","23:50","Wendy's Chilli<br>Wendy's Chicken Salad<br>Nuts<br>Yoghurt","300<br>150<br>100<br>110","8<br>1.5<br>10<br>0","1735","19.5","Day Off")
	data[19][5] = new Array("Sunday 14 December 2003",	"07:30","Balance Bar","200","6","-----","---------------------------","---","---","11:00","Chili<br>Chicken Salad<br>Cheese<br>Dressing","300<br>150<br>100<br>50","8<br>5<br>10<br>5","23:00","Shredded Wheat<br>Milk<br>Cheese<br>Yoghurt","140<br>100<br>85<br>110","1<br>2.5<br>5<br>0","20:00","Chicken<br>Vegetables<br>Fruit<br>Bread","170<br>75<br>60<br>100","4<br>0<br>0<br>4","1640","50.5","Seattle : 5K Jingle Bell Run")
	data[19][6] = new Array("Monday 15 December 2003",	"08:00","Shredded Wheat<br>Milk<br>P/Butter<br>Cheese<br>Fruit","140<br>100<br>100<br>85<br>60","1<br>2.5<br>8<br>5<br>0","-----","---------------------------","---","---","14:00","Asian Chicken Salad","280","8","17:00","Balance Bar","200","6","19:00","Steak<br>Vegetables<br>Dressing<br>Egg / Bacon (On Salad)<br>Yoghurt","440<br>200<br>100<br>100<br>110","24<br>0<br>5<br>4<br>0","1915","63.5","Day Off")
}
