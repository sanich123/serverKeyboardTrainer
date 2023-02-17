# serverKeyboardTrainer
My experiments in server-developing for our group project KeyboardTrainer

You can
- clone project(git clone [reference to the project])
- install dependencies (npm i)
- send query requests and receive responses

 In your Postman you can try these routes: 
 
  1. Route: **/races/:name**, Method: **GET**
_  It'll return statistic data of user, whose user-data you sent earlier. If there are not data, it'll return error message._
  
  - On deployed version: https://server-keyboard-trainer.vercel.app/races/:name
  - On local version: http://localhost:3000/races/:name
  
  For example, it would be https://server-keyboard-trainer.vercel.app/races/aovoronin.piano@gmail.com. 
  This user sent some data earlier:)
  
  2. Route: **/race**, Method: **POST**, body: **{name: string, speed: number, mistakes: number, date: string}** in JSON. All the properties are required.
  
_  On that route you can post some user-data to the server, and it'll be written to the data-base._
  
  - On deployed version: https://server-keyboard-trainer.vercel.app/race
  - On local version: http://localhost:3000/race
    
  In this video you can see how I do those operations: [https://drive.google.com/file/d/1QqZF3CHxcCJSLlsVmEbJ98TYGdFX4VVH/view](https://drive.google.com/file/d/1QqZF3CHxcCJSLlsVmEbJ98TYGdFX4VVH/view)
  
  

