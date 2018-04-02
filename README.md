# Movies
Movies for angularjs 1.x, jasmine and karma.

# Development Pre-requisites

Install *node* and the installer *npm*

(https://nodejs.org/en/download/)


Install the following using *npm*

*npm install -g http-server*

*npm install -g grunt-cli*

For grunt startup guides see here https://gruntjs.com/getting-started

*npm install -g karma*

*npm install -g jasmine*

*npm install -g karma-jasmine*

*npm install -g jasmine-core*

DO NOT do *karma init* , the config is already setup.


# Getting the App started

Navigate to the root directory (above the app folder), then get npm to install all the components for the test runner etc. by running the following command line.

*npm install*

Use *karma start* in a command window at the root of the project to kick off the karma test session

Use *grunt* in a command window at the root of the project to rebuild minified javascript

To run the front end you can use *http-server* simply open a command window at the root of the project and run *http-server*

Run up your browser.

The URL *localhost:8080/app/movies-list.html* will run the release version (minified).

The URL *localhost:8080/src/movies-list.html* will run the debug version(unminified version).

This project can also be linked to a back end service (see configuration\config.js for the configuration line).

# Install the UI on a Windows Server

First, ensure *node* has been installed on the server.

(https://nodejs.org/en/download/)

To release the UI app, create an empty folder (the root folder) on the server, then copy the following folders and files to the folder (or get you CI/CD process to copy them over).

*app*

*deploy*

*package-lock.json*

*packages.json*

Use the command line *npm install --only=production*  at the root folder level to install the node modules for the release.

To get the UI running on a Windows Server, navigate to the *deploy* folder using *File Explorer*.

Right-click on the *Install.bat* file and select *Run as administrator*

This will begin serving the UI on port 86 and install the UI as a Windows service (which will run itself back up if the server is re-booted).

Use *localhost:86/app/movies-list.html* in a browser to test it.

To uninstall the UI, navigate to the *deploy* folder.

Right-click on the *Uninstall.bat* file and select *Run as administrator*  

The port is defined in the *install.bat* file. Change this by hand or using CI scripting to use your preferred port before installing the UI as a Windows Service.

