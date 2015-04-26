Storyteller is a tool for crafting [executable specifications](http://www.agilemodeling.com/essays/executableSpecifications.htm). 

Quickstart
==========

[![Join the chat at https://gitter.im/DarthFubuMVC/StoryTeller2](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/DarthFubuMVC/StoryTeller2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

After doing a new git clone of the code, run `npm run build` at the command line from the root directory.

Getting started with the code
=============================

The Storyteller code consists of two parts, a web based client written in Javascript and the actual specification engine and a self-contained web host written in C#. In order to work with the Storyteller code, you'll need to have both an installation of [Node.js v12](https://nodejs.org) with [npm](https://www.npmjs.com) and .Net 4.5 on your box. To start working with the code, first run the build with the command `npm run build` or if you're on Windows, use the `build.cmd` script. Running this command will:

1. Install all the necessary npm packages for the client side
2. Build the bundled javascript products that need to be embedded into the .Net code
3. Runs all the Javascript tests
4. Installs the necessary Nuget dependencies for the .Net code
5. Builds and tests the .Net code


Working on the Javascript Code
==========================

The client code is built with [React.js](http://facebook.github.io/react/) as the view technology and [Webpack](http://webpack.github.io) as the client build tool. The client side automation is done through npm at the command line:

* `npm run build-client` - precompile the JSX files, do ES6 to ES5 transformations, and bundle the files
* `npm run watch` - same as above, but watches for changes and builds automatically
* `npm run test` - runs all the Javascript tests
* `npm run harness` - hosts the client code with a stubbed in backend at `http://localhost:3000` using the [React hot loader](http://gaearon.github.io/react-hot-loader/) for rapid UI work
* `npm run test-mocha` - run the unit tests against the /lib folder
* `npm run tdd-mocha` - run the unit tests against the /lib folder in watched mode
* `npm run test-karma` - run the karma tests against the JSX components
* `npm run tdd-karma` - run the karma tests against the JSX components in watched mode
* `npm run smoke-test` - runs a series of karma tests against all the sample specifications

and as stated earlier, `npm run build` builds and tests both the client side Javascript and server side .Net at one time. 


The client side code is in the /client folder. The javascript code is organized as follows:

* /components - All the React.js components as JSX files
* /component-tests - Karma tests against the React.js components
* /lib - All the other Javascript code. Data stores, controllers, presenters, domain model objects. Storyteller is roughly using a Flux style architecture using [Postal.js](https://github.com/postaljs) as an event aggregator
* /lib-tests - Mocha tests against the lib code


Working on the .Net Code
===============================
The source code is in the /src folder. For the moment, we're using Visual Studio.Net and the solution file is at src/Storyteller.sln. As DNX matures we will probably move to eliminate the .sln and .csproj files in the code repository. You will need to run the command line build at least once before opening the C# code in Visual Studio.

From the command line, we're just using an npm script `npm run build-server` to build and test the .Net code. The relevant commands are:

* `npm run build-server`- restore nuget packages, build, and test
* `paket install` - restores nuget packages
* `node build/buildServer` - compiles and runs the .Net tests if you want to bypass the paket install


The .Net code uses [Paket](http://fsprojects.github.io/Paket/) for Nuget dependency management and [Fixie](http://fixie.github.io) for unit testing. At this time we're emulating NUnit behavior, but this is expected to change to Fixie idioms at a later time. 

