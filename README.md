# AngularJS template project


The frontend can be served by a local webserver that supports livereload. This also includes a fake backend server. There also is a unit test and e2e test config set up so you can run tests from the beginning.

### Server with livereload and faked backend

```$ grunt serve``` starts a ```connect``` server at ```localhost:8088``` that serves the frontend with livereload capability. 

```$ grunt build``` builds the project. Take a look at ```Gruntfile.js``` to see what is included in the build.

The built frontend will be written to ```dist/``` and this folder will be zipped to ```dist.zip```.

```$ grunt serve:dist``` builds the project and then serves the built frontend at ```localhost:8088``` (without the fake backend).

## Best practices


A modular file structure:

    app
    |--scripts
    |  |--homepage
    |  |  |--homepage.config.js
    |  |  |--homepage.ctrl.js
    |  |  |--homepage.directive.js
    |  |  |--homepage.module.js
    |  |  |--...
    |  |--common
    |  |  |--directives
    |  |  |--services
    |  |  |--filters
    |  |  |--...
    |  |--myapp.module.js
    |  |--myapp.config.js
    |--index.html


