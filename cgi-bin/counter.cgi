#!/usr/bin/perl

$dataFile="hits.txt";
$imageDir="/Website/Images/Digits/";
$currentVisitor=$ENV{"REMOTE_ADDR"};

print "Content-type: text/html";

open FILE, "<$dataFile" or die "Could not open file: $!";
$lastVisitor=readline(FILE);
$count=readline(FILE);
close(FILE);

chomp($lastVisitor);
if ($currentVisitor ne $lastVisitor)
{
	$count++;
}

print "\n\n<center>You are visitor no:<br />";
for ($i=0; $i<length($count); $i++)
{
	print "<img src='$imageDir";
    print substr($count,$i,1);
	print ".gif'>";
}
print "</center>";

open FILE, ">$dataFile" or die "Could not open file: $!";
print FILE $currentVisitor;
print FILE "\n";
print FILE $count;
close(FILE);
