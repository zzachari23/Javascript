<html>
<head> 
    <!-- Tab Title of Page -->
   <title>INST377 - Doggos Page</title>
   <style>
   /*Sets background color to body*/
   body{
    background-color: lightblue;
   }
    /* Header 
       -Gave padding & top margin 
    */
    header{padding: 20px;
           margin-top: 2%;
    }
    
    /*Changes color for main nav bar*/
    #main-nav {
        background-color:burlywood
    }

    /*Centers the main nav bar ul text*/
    #main-nav ul{
        text-align: center;
    }

     /*Styles the nav bar options*/
    #main-nav ul li {
        list-style-type: none;
        display: inline-block;
        text-align: center;
        width: 8%;
        padding: 12px;
    }

    /*Removes hyperlink style*/
    #main-nav li a{
        text-decoration: none;
        color: black;
    }
    
    /*Color change for the nav options box on hover*/
    #main-nav li:hover  {
        background-color:darkorange;
    }
    /*Color change for the nav options text on hover*/
    #main-nav li:hover a  {
        color: aliceblue;
    }

    /*Button hover element*/
    #contactButton:hover{
        background-color: blue;
        color: red;
    }
    
    button{
        margin-left: 10px;
        margin-top: 15px;
      }
      .cBox{
        margin-top: 10px;
      }
  
      .dogImageBox {
        text-align: center;
        display: flex;
        justify-content: center;    
      }
  
      .dogButtons{
        text-align: center;
      }

      .audioDiv{
        background-color: green;
        color: white;
        border: solid;
        border-color: aqua;
        width: 57.5%;
        height: 37.5%;
        margin: auto;
        padding-left: 1px;
        margin-top: 10px;
    }

    
    .ListenerButtons{
        text-align: center;
    }

    .LButtons{
        font-size: large;
        margin-left: 5px;
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
    }
     
    </style>

    <script src="dogsFunctions.js" defer></script> 
    <link rel="stylesheet" type="text/css" href="dogButtons.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/simple-slider/1.0.0/simpleslider.min.js"></script>
    <script src="audioListener.js" defer></script>
</head>
<body id="mainBody">

    <!--Header with H1 tag  -->
    <header>
        <h1>INST377 - Doggos</h1>
    </header>

    <!--Navgiation Bar with ID-->
    <nav id="main-nav">
        <ul>
            <!--Adding links to each option -->
            <li><a href="A2_Home.html">Home</a></li>
            <li><a href="A2_Stocks.html">Stocks</a></li>
            <li><a href="A2_Dogs.html">Dogs</a></li>
        </ul>
    </nav>

    <!--h1 header title for home page with dog emoji -->
    <h1>Doggos! &#x1F436 </h1>

    <div class="main">

        <div class="dogImageBox">
          <div id="myslider" style="width:612px; height:612px" data-simple-slider></div>
        </div>
     
        <div class="dogButtons" id="dogButtons"> </div>
    
          <div class="cBox" id="contentBox">
             <h1 id="dogName" style="padding-left: 5px;"></h1>
             <h2 id="dogDescription" style="padding-left: 5px;"></h2>
             <h2 id="dogMinLife" style="padding-left: 5px;"></h2>
             <h2 id="dogMaxLife" style="padding-left: 5px;"></h2>
          </div>


        <div class="audioDiv">
    
            <h1 style="padding-left: 5px;">In this web page there are options to Navigate using Audio!</h1>
            <p style="padding-left: 5px;">Ensure your Mic is enabled to be able to use this feature</p>
    
            <ul>
                <li>Navigate to a Different Page</li>
                 <ul>
                    <li style="padding: 0;">Say: <strong>Navigate to &ltpage&gt</strong></li>
                 </ul>
                <li>Change the Page Color</li>
                <ul>
                    <li style="padding: 0;">Say: <strong>Change the color to &ltcolor&gt</strong></li>
                 </ul>
                <li>Say Hello Back to you!</li>
                <ul>
                    <li>Say: <strong>Hello</strong></li>
                 </ul>
            </ul>
                <div class="ListenerButtons" >
                    <button class="LButtons" id="listeningOn"><strong>Turn On Listening</strong></button>
                    <button class="LButtons" id="listeningOff"><strong>Turn Off Listening</strong></button>
                </div>
        </div>


      
      </div>






</body>
</html>