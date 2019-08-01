const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(`
    <html style="background-color:#00C176">
      <head>
        <title>v3.0.0</title>
      </head>
      <body style="display:flex;
                   align-items:center;
                   justify-content:center;
                   color:#FFFFFF;
                   font-family:sans-serif;
                   font-size:6rem;
                   margin:0;
                   letter-spacing:-0.1em">
        <h1>v3.0.0</h1>
      </body>
    </html>
`))

app.listen(3000, () => {
  console.log(`App listening on port 3000!`)
})
