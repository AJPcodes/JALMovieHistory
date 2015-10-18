requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap-star-rating': '../lib/bower_components/bootstrap-star-rating/js/star-rating.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'bootstrap-star-rating': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "q", "firebase", "bootstrap-star-rating", "library", "register", "search", "user", "ratings"],
  function($, Handlebars, bootstrap, q, firebase, bootstrap_star, library, register, search, user, ratings) {


    //Populate  splashNav
    require(['hbs!../templates/splashNav'], function(Temp) {
      $("#splashNav").html(Temp());

      //Event Handlers for Navigation Links
      //LogIn Form
      $(document).on('click', '#logInLink', function(){

        require(['hbs!../templates/logIn'], function(Temp) {
          $("#centerDiv").html(Temp());

         $(document).on('click', '#submitLogIn', function(e){

          e.preventDefault();
          user.logIn();

        });

        });


      }); //end logIn Handler

      //Register Form
      $(document).on('click', '#registerLink', function(){

        require(['hbs!../templates/register'], function(Temp) {
          $("#centerDiv").html(Temp());
        });

        //event handler for log in form
        $(document).on('click', '#submitRegister', function(e){

          e.preventDefault();
          register.newUser();

        });

      }); //end logIn Handler

    }); //end populate splashNav

    //populate Splash
    require(['hbs!../templates/splash'], function(Temp) {
      $("#centerDiv").html(Temp());

    }); //end populate splash


    //event handler for ratings
    $(document).on('click', '.userRating', function(){
      thisMovieID = $(this).attr('imdbID');
      thisCurrentRating = $(this).attr('rating');

      $("#ratingSelector"+thisMovieID).toggle('display');
      $("#ratingButton"+thisMovieID).toggle('display');

    });

        //event handler for ratings
    $(document).on('click', '.userRatingButton', function(){
      ratings.editRating($(this).attr('imdbID'));
    });






}); //end require
