const express = require("express");
const app = express();

app.get('/Home', (req, res) => {
   
    var time = new Date()
    res.send(`
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <style>
    * {
      box-sizing: border-box;
    }
    .menu {
      float:left;
      width:20%;
    }
    .menuitem {
      padding:8px;
      margin-top:7px; 
      border-bottom:1px solid;   
    }
    .main {
      float:left;
      width:60%;
      padding:0 20px;
    }
    .right {
        float:left;
        width:20%;
        padding:10px 15px;
        margin-top:7px;
        background-color: LightGray;
    }   

        
    @media only screen and (max-width:800px) {
      /* For tablets: */
      .main {
        width:80%;
      }
      .right {
        width:100%;
      }
    }
    @media only screen and (max-width:500px) {
      /* For mobile phones: */
      .menu, .main, .right {
        width:100%;
      }
    }
    </style>
    
    <body style = "font-family:Calibri;">        
    <div style="background-color:#FFD700;padding:15px;">
        <h1 style="text-align:center;">
            Matus Kamenicky 
        </h1>
    </div>
        
    <div style="overflow:auto">
        <div class="menu">
            <div class="menuitem">
                <a href="http://localhost:3000/Home">
                    Home
                </a>
            </div>

            <div class="menuitem">
                <a href="http://localhost:3000/Education">
                    Education
                 </a>
            </div>

            <div class="menuitem">
                <a href="http://localhost:3000/Work_expirience_and_Trainings">
                    Work experiences and Trainings
                </a>
            </div>

            <div class="menuitem">
                <a href="http://localhost:3000/Interests">
                    Interests
                </a>
            </div>
        </div>

        <div class="main">
            <h2 style="text-align:center;">
                Welcome
            </h2>
            <p style="text-align:left;">
                My name is Matus Kamenicky and on these pages you can find information about me, my education and trainings, my work expiriences, and hobbies. 
            </p>
            <p style="text-align:center;">
                <img src="https://raw.githubusercontent.com/MatusKamenicky/MyWebsite/master/foto.jpg" style="width:30%">
            </p>
        </div>
        
        <div class="right">
            <p style="text-align:center" id='date'></p>
            <script>
            var date = new Date()
            document.getElementById("date").innerHTML = date;
            </script>            
         </div>
    </div>
    
    <br>
    <br><p style="text-align:center">© Matus Kamenicky 2018</p>
           
    </body>
    
    </html>
    `)}
);


app.get('/Education', (req, res) => {
    
     var time = new Date()
     res.send(`
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
     </head>
 
     <style>
     * {
       box-sizing: border-box;
     }
     .menu {
       float:left;
       width:20%;
     }
     .menuitem {
       padding:8px;
       margin-top:7px; 
       border-bottom:1px solid;   
     }
     .main {
       float:left;
       width:60%;
       padding: 20px;     
     }
     .right {
        float:left;
        width:20%;
        padding:10px 15px;
        margin-top:7px;
        background-color: LightGray;
     }

         
     @media only screen and (max-width:800px) {
       /* For tablets: */
       .main {
         width:80%;
       }
       .right {
         width:100%;
       }
     }
     @media only screen and (max-width:500px) {
       /* For mobile phones: */
       .menu, .main, .right {
         width:100%;
       }
     }
     </style>
     
     <body style = "font-family:Calibri;">        
     <div style="background-color:#d0e1e1;padding:15px;">
         <h1 style="text-align:center;">
             Matus Kamenicky 
         </h1>
     </div>
         
     <div style="overflow:auto">
         <div class="menu">
             <div class="menuitem">
                 <a href="http://localhost:3000/Home">
                     Home
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Education">
                     Education
                  </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Work_expirience_and_Trainings">
                     Work experiences and Trainings
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Interests">
                     Interests
                 </a>
             </div>
         </div>
 
        <div class="main">
            <h2 style="text-align:left;">
                 Education
            </h2>
            <p style="text-align:left;">
                <b>High School</b> (2005 - 2013):
            </p>
            <p style="text-align:left;">            
                St. Francis of Assisi Grammar School
                <br> Levoca, Slovakia                                
            </p>
            <p style="text-align:left;">
                <b>College</b> (2014 - present):
            </p>
            <p style="text-align:left;">            
                Biomedical Physics
                <br>Faculty of Mathematics, Physics and Informatics
                <br>Comenius University in Bratislava
                <br>Slovakia                                               
            </p>
         </div>
         
         <div class="right">
            <p style="text-align:center" id='date'></p>
            <script>
            var date = new Date()
            document.getElementById("date").innerHTML = date;
            </script>            
         </div>
     </div> 
     
     <br>
     <br><p style="text-align:center">© Matus Kamenicky 2018</p>
          
     </body>
     
     </html>
     `)}
 );

 app.get('/Work_expirience_and_Trainings', (req, res) => {
    
     var time = new Date()
     res.send(`
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
     </head>
 
     <style>
     * {
       box-sizing: border-box;
     }
     .menu {
       float:left;
       width:20%;
     }
     .menuitem {
       padding:8px;
       margin-top:7px; 
       border-bottom:1px solid;   
     }
     .main {
       float:left;
       width:60%;
       padding:0 20px;
     }
     .right {
        float:left;
        width:20%;
        padding:10px 15px;
        margin-top:7px;
        background-color: LightGray;
     }
         
     @media only screen and (max-width:800px) {
       /* For tablets: */
       .main {
         width:80%;
       }
       .right {
         width:100%;
       }
     }
     @media only screen and (max-width:500px) {
       /* For mobile phones: */
       .menu, .main, .right {
         width:100%;
       }
     }
     </style>
     
     <body style = "font-family:Calibri;">        
     <div style="background-color:#32CD32;padding:15px;">
         <h1 style="text-align:center;">
             Matus Kamenicky 
         </h1>
     </div>
         
     <div style="overflow:auto">
         <div class="menu">
             <div class="menuitem">
                 <a href="http://localhost:3000/Home">
                     Home
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Education">
                     Education
                  </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Work_expirience_and_Trainings">
                     Work experiences and Trainings
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Interests">
                     Interests
                 </a>
             </div>
         </div>
 
         <div class="main">
            <h2 style="text-align:left;">
                Work expiriences and Trainings
            </h2>
            <p style="text-align:left;">
                <b>Scientific Trainings</b> 
            </p>             
            <p style="text-align:left;">
                Absorption and Fluorescence Spectrosopy, Fluorescence Anisotropy
                <br>(Bachelor thesis: <i>Influence of gene deletion on membrane fluidity of yeasts</i>)
            </p>
            <p style="text-align:left;">
                <b>IT Trainings</b> 
            </p>
            <p style="text-align:left;">
                Beginners coding skills in Python, HTML
                <Br>Basic Source Code Management (Git) 
                <Br>Data analysis in Origin
                <br>Basic statistics in R
            </p>
            <p style="text-align:left;">
                <b>Work expiriences</b> 
            </p>
            <p style="text-align:left;">
                Tourist guide in St. James Basilica in Levoca
                <br>(2016 - 2017) 
            </p>
         </div>
         
         <div class="right">
            <p style="text-align:center" id='date'></p>
            <script>
            var date = new Date()
            document.getElementById("date").innerHTML = date;
            </script>            
         </div>
     </div> 

     <br>
     <br><p style="text-align:center">© Matus Kamenicky 2018</p>
          
     </body>
     
     </html>
     `)}
 );

 app.get('/Interests', (req, res) => {
    
     var time = new Date()
     res.send(`
     <!DOCTYPE html>
     <html>
     
     <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
     </head>
 
     <style>
     * {
       box-sizing: border-box;
     }
     .menu {
       float:left;
       width:20%;
     }
     .menuitem {
       padding:8px;
       margin-top:7px; 
       border-bottom:1px solid;   
     }
     .main {
       float:left;
       width:60%;
       padding:0 20px;
     }
     .right {
        float:left;
        width:20%;
        padding:10px 15px;
        margin-top:7px;
        background-color: LightGray;
     } 
         
     @media only screen and (max-width:800px) {
       /* For tablets: */
       .main {
         width:80%;
       }
       .right {
         width:100%;
       }
     }
     @media only screen and (max-width:500px) {
       /* For mobile phones: */
       .menu, .main, .right {
         width:100%;
       }
     }
     </style>
     
     <body style = "font-family:Calibri;">        
     <div style="background-color:#FF6347;padding:15px;">
         <h1 style="text-align:center;">
             Matus Kamenicky 
         </h1>
     </div>
         
     <div style="overflow:auto">
         <div class="menu">
             <div class="menuitem">
                 <a href="http://localhost:3000/Home">
                     Home
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Education">
                     Education
                  </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Work_expirience_and_Trainings">
                     Work experiences and Trainings
                 </a>
             </div>
 
             <div class="menuitem">
                 <a href="http://localhost:3000/Interests">
                     Interests
                 </a>
             </div>
         </div>
 
         <div class="main">
            <h2 style="text-align:center;">
                Interests
            </h2>
            <p style="text-align:center;">
                One of my most passionate hobby is the world o J.R.R. Tolkien. I'm currently reading a 12 volume
                series of The History of Middle-Earth compiled and edited by his son Christopher Tolkien. More 
                about this fascinating topic can be found at 
                <a href="http://tolkiengateway.net/wiki/Main_Page">Tolkien Gateway</a>.   
            </p>
            <p style="text-align:center;">
                Other of my interest include amateur astronomy (I own a 20 mm Newtonian refractor telescope), history
                (working as a tourist guide during summers) and painting of pictures (my last creation is show in the
                picture below).
            </P>    
            <p style="text-align:center;">
                 <img src="https://raw.githubusercontent.com/MatusKamenicky/MyWebsite/master/Cassandra.JPG" style="width:45%">
             </p>
         </div>
         
         <div class="right">
            <p style="text-align:center" id='date'></p>
            <script>
            var date = new Date()
            document.getElementById("date").innerHTML = date;
            </script>            
         </div>
     </div>
     
     <br>
     <br><p style="text-align:center">
        © Matus Kamenicky 2018
     </p>
     
     
     </body>
     
     </html>
     `)}
 );
    
app.listen(3000, () => console.log('Example app listening on port 3000!'));
app.use(express.static('public'))