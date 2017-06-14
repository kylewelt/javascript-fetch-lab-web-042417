function getIssues() {
  const repo = 'kylewelt/javascript-fetch-lab'

  // use fetch to create it!
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const src = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(src)
  const issuesList = template(json)
  document.getElementById("issues").innerHTML = issuesList
  console.log(json)
}

function createIssue() {
  const repo = 'kylewelt/javascript-fetch-lab'
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  // use fetch to create it!
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: `${title}`,
      body: `${body}`
    })
  }).then(resp => getIssues())
}

function showResults(json) {
  const src = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(json)
  document.getElementById("results").innerHTML = repoList
  console.log(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  // use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  // change to your token to run in browser, but set
  // back to '' before committing so all tests pass
  return ''
}
