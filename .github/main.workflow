workflow "Release to npm" {
  resolves = ["GitHub Action for npm"]
  on = "release"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]  
  args = "publish"
}