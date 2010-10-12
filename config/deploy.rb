load 'deploy' if respond_to?(:namespace) # cap2 differentiator

default_run_options[:pty] = true

# be sure to change these
set :user, 'sakkaoui'
set :domain, 'imeuble.info'
set :application, 'raphael'

# the rest should be good
set :repository,  "git://github.com/meuble/Raphael-Keynote.git" 
set :deploy_to, "/home/#{user}/#{application}.#{domain}"
set :deploy_via, :remote_cache
set :scm, 'git'
set :branch, 'master'
set :git_shallow_clone, 1
set :scm_verbose, true
set :use_sudo, false

server domain, :app, :web

namespace :deploy do
  task :restart do
     # Do nothing
  end
end