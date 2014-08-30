/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';

var Thing = require('../api/thing/thing.model');


Thing.find({}).remove(function() {
    Thing.create({
        name : 'Development Tools',
        info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name : 'Server and Client integration',
        info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
        name : 'Smart Build System',
        info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
        name : 'Modular Structure',
        info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
        name : 'Optimized Build',
        info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
        name : 'Deployment Ready',
        info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});




var User = require('../api/user/user.model');


User.find({}).remove(function() {
    User.create({
        name : {
            first: 'Alexander',
            last: 'Moyse'
        },
        email : 'alexander@frankdigital.com.au'
    },{
        name : {
            first: 'Annabelle',
            last: 'Smith'
        },
        email : 'annabelle@socialplayground.com.au'
    },{
        name : {
            first: 'Ben',
            last: 'Fowler'
        },
        email : 'ben@frankdigital.com.au'
    },{
        name : {
            first: 'Hannah',
            last: 'Burgess'
        },
        email : 'hannah@frankdigital.com.au'
    },{
        name : {
            first: 'Jingjin',
            last: 'Han'
        },
        email : 'jj@frankdigital.com.au'
    },{
        name : {
            first: 'Matt',
            last: 'Barbelli'
        },
        email : 'matt@frankdigital.com.au'
    },{
        name : {
            first: 'Matt',
            last: 'Smartt'
        },
        email : 'matt.smartt@frankdigital.com.au'
    },{
        name : {
            first: 'Yoann',
            last: 'Gobert'
        },
        email : 'yoann@frankdigital.com.au'
    });
});
