photo-gallery
=============
Swap the photos of your gallery,
follow the simple procedures
1)give a common class name to all ur pics..(in this case it is 'image')...
Html for above js is shown below

<!DOCTYPE html>
<html>
<head><title>Search Gallery</title>
<link rel="stylesheet" type="text/css" href="gallery.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="gallery.js"></script>
</head>
<body>

<div id="center">
		<img id="cen" src="image1.jpg" >
	</div>
	
<img class="arrow" src="leftarrow.jpg"  id="Larrow" >  //click left arrow

<div id="main">
	
		<img class="image" id="1" src="image1.jpg" >
	 
		<img class="image" id="2" src="image2.jpg" >
		 
		<img class="image" id="3" src="image3.jpg" >
	 
		<img class="image" id="4" src="image4.jpg" >
	
		<img class="image" id="5" src="image5.jpg" >

</div>

<img class="arrow" src="rightarrow.jpg"  id="Rarrow" > //click right arrow

</body>

Add css to make it lustrous..
njoyy
