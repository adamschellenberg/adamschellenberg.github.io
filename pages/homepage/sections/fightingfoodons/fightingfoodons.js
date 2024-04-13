fetch('https://github.com/adamschellenberg/FightingFoodonsSite/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
  })