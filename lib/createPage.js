const fs = require('fs');
const Employee = require('./Employee');

module.export = {
    collectCards: collectCards = (employeeArray) => {
        let cards = "";
        employeeArray.forEach(teamMember => cards += createCard(teamMember));
        return cards;
},
    createCard: createCard = (teamMember) => {
        // <div class="card bg-light" style="width: 18rem;">
        //     <div class="card-body text-white bg-primary">
        //       <h5 class="card-title ">Name</h5>
        //       </i><p class="card-text"><i class="fas fa-mug-hot"></i> Role</p>
        //     </div>
        //     <ul class="list-group p-2 pb-4">
        //       <li class="list-group-item">ID:</li>
        //       <li class="list-group-item">Email:<a href="#" class="card-link">email</a></li>
        //       <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
        //     </ul>
        //     </div>
        //   </div>
        // return card;
},
    createPage: createPage = (employeeArray) => {
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/d18a986a26.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>
    <main>



    </main>
</body>
</html>
`
    }
}