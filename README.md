# README

This is a demonstration project of a todo list manager.  I'm trying to
learn ways to attach Angular to a Ruby on Rails application in the
least intrusive way.  That way seems, so far, to create a Ruby on
Rails API applicatino and have a separate Angular app that consumes the API.

For newer versions of Ruby on Rails, this will require CORS because
cross-site JS is considered to be a security risk.

I'm using Rails 5.1, Ruby 2.5.0 (preview), Postgres.  This app should
be deployable on Heroku, although I haven't tried this yet.

To run locally, clone the source and create the database with `rails
db:create`, `rails db:migrate`, `rails db:seed`. Serve the local API
with `rails server`.  This will run on port 3000, which is right now
hard-coded into the Angular app.

To run the angular app, in a separate terminal, go into the `frontend`
directory of the cloned source and run `npm install` to install NPM
and its dependencies.  Then, run the Angular server with `ng serve`.
This should make a server on port 4200.
