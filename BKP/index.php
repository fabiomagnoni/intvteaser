<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>:::::::</title>
<!-- bjqs.css contains the *essential* css needed for the slider to work -->
    <link rel="stylesheet" href="css/bjqs.css">

    <!-- some pretty fonts for this demo page - not required for the slider -->
    <link href='http://fonts.googleapis.com/css?family=Source+Code+Pro|Open+Sans:300' rel='stylesheet' type='text/css'> 

    <!-- demo.css contains additional styles used to set up this demo page - not required for the slider --> 
    <link rel="stylesheet" href="css/demo.css">
    <link rel="stylesheet" href="thickbox.css">    
    <link rel="icon" type="image/gif" href="images/favicon.ico">
    <link href="fontes/stylesheet.css" rel="stylesheet" type="text/css" />

    <!-- load jQuery and the plugin -->
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="js/bjqs-1.3.min.js"></script>
	<script type="text/javascript" src="jquery/thickbox.js"></script>    
	<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-4803168-2']);
  _gaq.push(['_setDomainName', 'vislumbre.org']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<link href="css/estilo.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php include "include/analyticstracking.php"; ?>


<!--go container-->
<div id="container">


    <!--go topo-->
    <div id="topo">




        <!--go topo-slider-->
        <div id="topo-slider">
			<?php include "include/slider.php"; ?>
        </div>
        <!--end topo-slider-->


    </div>
    <!--end topo-->



    <!--go corpo-->
    <div id="corpo">
    

    <!--go rodape-->
	<?php include "include/rodape.php"; ?>
    <!--end rodape-->
    
    </div>
    <!--end corpo-->







</div>
<!--end container-->



</body>
</html>
