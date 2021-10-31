const fs = require('fs');
const Employee = require('../lib/Employee');

module.export = {
  collectCards: collectCards = (employeeArray) => {
    let cards = "";
    console.log(employeeArray);
    employeeArray.forEach(teamMember => cards += createCard(teamMember));
    return cards;
  },
  createCard: createCard = (teamMember) => {
    switch (teamMember.role) {
      case 'Manager':
        return `
                <div class="card bg-light" style="width: 18rem;">
                    <div class="card-body text-white bg-primary">
                      <h5 class="card-title ">${teamMember.getName()}</h5>
                      </i><p class="card-text"><i class="fas fa-mug-hot"></i> ${teamMember.getRole()}</p>
                    </div>
                    <ul class="list-group p-2 pb-4">
                      <li class="list-group-item">ID: ${teamMember.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}" class="card-link">${teamMember.getEmail()}</a></li>
                      <li class="list-group-item">Office number: ${teamMember.getPhone()}</li>
                    </ul>
                    </div>
                  </div>
                `;
      case 'Engineer':
        return `
                <div class="card bg-light" style="width: 18rem;">
                    <div class="card-body text-white bg-primary">
                      <h5 class="card-title ">${teamMember.getName()}</h5>
                      </i><p class="card-text"><i class="fas fa-glasses"></i> ${teamMember.getRole()}</p>
                    </div>
                    <ul class="list-group p-2 pb-4">
                      <li class="list-group-item">ID: ${teamMember.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}" class="card-link">${teamMember.getEmail()}</a></li>
                      <li class="list-group-item">Github: <a href="https://github.com/${teamMember.getGithub()}" class="card-link">${teamMember.getGithub()}</a></li>
                    </ul>
                    </div>
                  </div>
                `;
      case 'Intern':
        return `
                <div class="card bg-light" style="width: 18rem;">
                    <div class="card-body text-white bg-primary">
                      <h5 class="card-title ">${teamMember.getName()}</h5>
                      <p class="card-text"><i class="fas fa-user-graduate"></i> ${teamMember.getRole()}</p>
                    </div>
                    <ul class="list-group p-2 pb-4">
                      <li class="list-group-item">ID: ${teamMember.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}" class="card-link">${teamMember.getEmail()}</a></li>
                      <li class="list-group-item">School: ${teamMember.getSchool()}</li>
                    </ul>
                    </div>
                  </div>
                `;
      default:
        break;
    }
  },
  createPage: createPage = (employeeArray) => {
    let page =
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
        ${collectCards(employeeArray)}
    </main>
</body>
</html>
`;
    fs.writeFile('./dist/index.html', page, (err) =>
      err ? console.log(err) : console.log('Success!'));
  }
}