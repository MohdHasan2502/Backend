// const express=require('express')

import express from "express"; //this is module JS that why we 
// get error first whilcreating server
const app = express();

//For now we don't want to use slash

// app.get("/", (req, res) => {
//   res.send("Server is ready!");
//   console.log("Coonected to server");
// });
//get a list of 5 content

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          "id": "1",
          "title": "ashes",
          "content": "When the window fell into the incinerator, it was a pane in the ash to retrieve."
        },
        {
          "id": "2",
          "title": "pirate's favorite letter",
          "content": "What's a pirate's favorite letter? It be the Sea"
        },
        {
          "id": "3",
          "title": "counting cows",
          "content": "How do you count cows? A 'Cow'culator"
        },
        {
          "id": "4",
          "title": "He's Alright",
          "content": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
          "id": "5",
          "title": "Bakery Fire",
          "content": "My friend's bakery burned down last night. Now his business is toast."
        },
        {
          "id": "6",
          "title": "Nut Assault",
          "content": "Two peanuts were walking down the street. One was a salted."
        },
       
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost: ${port}`);
});
