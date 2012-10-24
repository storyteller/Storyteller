ANALYTICS_ID=ENV['ANALYTICS_ID']

pwd = File.dirname(__FILE__)
$: << pwd
$: << File.join(pwd, "activesupport/lib")
$: << File.join(pwd, "actionpack/lib")

require "action_controller"
require "action_view"

# Require rubygems after loading Action View
require 'rubygems'
begin
  gem 'RedCloth', '>= 4.1.1'# Need exactly 4.1.1  
  #gem ''
rescue Gem::LoadError
  $stderr.puts %(Missing the RedCloth 4.1.1 gem.\nPlease `gem install -v=4.1.1 RedCloth` to generate the guides.)
  exit 1
end
                 
require 'action_controller'
require 'action_view'
require 'redcloth'

module StoryTeller
  autoload :Generator, "storyteller/generator"
  autoload :Indexer, "storyteller/indexer"
  autoload :Helpers, "storyteller/helpers"
  autoload :TextileExtensions, "storyteller/textile_extensions"
end

RedCloth.send(:include, StoryTeller::TextileExtensions)

if $0 == __FILE__
  StoryTeller::Generator.new.generate
end
