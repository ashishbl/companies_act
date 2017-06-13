// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

//navigation code
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    //use url slash(/) to make homepage
        .state('home', {
            url: '/home',
            templateUrl: 'views/home/home.html'

        })
        .state('verification', {
            url: '/verification',
            templateUrl: 'views/verification/verification.html'

        })


    //circulars route
    .state('circulars', {
            url: '/circulars',
            templateUrl: 'views/circulars/circulars.html'

        })
        .state('circulars1', {
            url: '/circulars1',
            templateUrl: 'views/files/circulars/File No. 10 of 36 of 2001-CLB dated 25th September 2013.html'

        })
        .state('circulars2', {
            url: '/circulars2',
            templateUrl: 'views/files/circulars/File No. 70 of 43 of 2005-CLB dated 25th September 2013.html'

        })
        .state('circulars3', {
            url: '/circulars3',
            templateUrl: 'views/files/circulars/152013 dated 13th September 2013.html'

        })
        .state('circulars4', {
            url: '/circulars4',
            templateUrl: 'views/files/circulars/162013 dated 18th September 2013.html'

        })
        .state('circulars5', {
            url: '/circulars5',
            templateUrl: 'views/files/circulars/192013 dated 10th December 2013.html'

        })
        .state('circulars6', {
            url: '/circulars6',
            templateUrl: 'views/files/circulars/182013 dated 19th December 2013.html'

        })
        .state('circulars7', {
            url: '/circulars7',
            templateUrl: 'views/files/circulars/202013 dated 27th December 2013.html'

        })
        .state('circulars8', {
            url: '/circulars8',
            templateUrl: 'views/files/circulars/032014 dated 14th February 2014.html'

        })
        .state('circulars9', {
            url: '/circulars9',
            templateUrl: 'views/files/circulars/042014 dated 25th March 2014.html'

        })
        .state('circulars10', {
            url: '/circulars10',
            templateUrl: 'views/files/circulars/052014 dated 28th March 2014.html'

        })
        .state('circulars11', {
            url: '/circulars11',
            templateUrl: 'views/files/circulars/062014 dated 28th March 2014.html'

        })
        .state('circulars12', {
            url: '/circulars12',
            templateUrl: 'views/files/circulars/Table of Fees dated 1st April 2014.html'

        })
        .state('circulars13', {
            url: '/circulars13',
            templateUrl: 'views/files/circulars/082014 dated 4th April 2014.html'

        })
        .state('circulars14', {
            url: '/circulars14',
            templateUrl: 'views/files/circulars/092014 dated 25th April 2014.html'

        })
        .state('circulars15', {
            url: '/circulars15',
            templateUrl: 'views/files/circulars/102014 dated 7th May 2014.html'

        })
        .state('circulars16', {
            url: '/circulars16',
            templateUrl: 'views/files/circulars/112014 dated 7th May 2014.html'

        })
        .state('circulars17', {
            url: '/circulars17',
            templateUrl: 'views/files/circulars/122014 dated 22nd May 2014.html'

        })
        .state('circulars18', {
            url: '/circulars18',
            templateUrl: 'views/files/circulars/132014 dated 23rd May 2014.html'

        })
        .state('circulars19', {
            url: '/circulars19',
            templateUrl: 'views/files/circulars/142014 dated 9th June 2014.html'

        })
        .state('circulars20', {
            url: '/circulars20',
            templateUrl: 'views/files/circulars/152014 dated 9th June 2014.html'

        })
        .state('circulars21', {
            url: '/circulars21',
            templateUrl: 'views/files/circulars/162014 dated 10th June 2014.html'

        })
        .state('circulars22', {
            url: '/circulars22',
            templateUrl: 'views/files/circulars/172014 dated 11th June 2014.html'

        })
        .state('circulars23', {
            url: '/circulars23',
            templateUrl: 'views/files/circulars/182014 dated 11th June 2014.html'

        })
        .state('circulars24', {
            url: '/circulars24',
            templateUrl: 'views/files/circulars/192014 dated 12th June 2014.html'

        })
        .state('circulars25', {
            url: '/circulars25',
            templateUrl: 'views/files/circulars/202014 dated 17th June 2014.html'

        })
        .state('circulars26', {
            url: '/circulars26',
            templateUrl: 'views/files/circulars/212014 dated 18th June 2014.html'

        })
        .state('circulars27', {
            url: '/circulars27',
            templateUrl: 'views/files/circulars/222014 dated 25th June 2014.html'

        })
        .state('circulars28', {
            url: '/circulars28',
            templateUrl: 'views/files/circulars/232014 dated 25th June 2014.html'

        })
        .state('circulars29', {
            url: '/242014 dated 25th June 2014.html',
            templateUrl: 'views/files/circulars/242014 dated 25th June 2014.html'

        })
        .state('circulars30', {
            url: '/circulars30',
            templateUrl: 'views/files/circulars/252014 dated 26th June 2014.html'

        })
        .state('circulars31', {
            url: '/circulars31',
            templateUrl: 'views/files/circulars/262014 dated 27th June 2014.html'

        })
        .state('circulars32', {
            url: '/circulars32',
            templateUrl: 'views/files/circulars/272014 dated 30th June 2014.html'

        })
        .state('circulars33', {
            url: '/circulars33',
            templateUrl: 'views/files/circulars/282014 dated 9th July 2014.html'

        })
        .state('circulars34', {
            url: '/circulars34',
            templateUrl: 'views/files/circulars/292014 dated 11th July 2014.html'

        })
        .state('circulars35', {
            url: '/circulars35',
            templateUrl: 'views/files/circulars/302014 dated 17th July 2014.html'

        })
        .state('circulars36', {
            url: '/circulars36',
            templateUrl: 'views/files/circulars/312014 dated 19th July 2014.html'

        })
        .state('circulars37', {
            url: '/circulars37',
            templateUrl: 'views/files/circulars/322014 dated 23rd July 2014.html'

        })
        .state('circulars38', {
            url: '/circulars38',
            templateUrl: 'views/files/circulars/332014 dated 31st July 2014.html'

        })
        .state('circulars39', {
            url: '/circulars39',
            templateUrl: 'views/files/circulars/342014 dated 12th August 2014.html'

        })
        .state('circulars40', {
            url: '/circulars40',
            templateUrl: 'views/files/circulars/352014 dated 27th August 2014.html'

        })
        .state('circulars41', {
            url: '/circulars41',
            templateUrl: 'views/files/circulars/362014 dated 17th September 2014.html'

        })
        .state('circulars42', {
            url: '/circulars42',
            templateUrl: 'views/files/circulars/382014 dated 14th October 2014.html'

        })
        .state('circulars43', {
            url: '/circulars43',
            templateUrl: 'views/files/circulars/392014 dated 14th October 2014.html'

        })
        .state('circulars44', {
            url: '/circulars44',
            templateUrl: 'views/files/circulars/402014 dated 15th October 2014.html'

        })
        .state('circulars45', {
            url: '/circulars45',
            templateUrl: 'views/files/circulars/412014 dated 15th October 2014.html'

        })
        .state('circulars46', {
            url: '/circulars46',
            templateUrl: 'views/files/circulars/422014 dated 12th November 2014.html'

        })
        .state('circulars47', {
            url: '/circulars47',
            templateUrl: 'views/files/circulars/432014 dated 13th November 2014.html'

        })
        .state('circulars48', {
            url: '/circulars48',
            templateUrl: 'views/files/circulars/442014 dated 14th November 2014.html'

        })
        .state('circulars49', {
            url: '/circulars49',
            templateUrl: 'views/files/circulars/452014 dated 18th November 2014.html'

        })
        .state('circulars50', {
            url: '/circulars50',
            templateUrl: 'views/files/circulars/012015 dated 3rd February 2015.html'

        })
        .state('circulars51', {
            url: '/circulars51',
            templateUrl: 'views/files/circulars/022015 dated 11th February 2015.html'

        })
        .state('circulars52', {
            url: '/circulars52',
            templateUrl: 'views/files/circulars/032015 dated 3rd March 2015.html'

        })
        .state('circulars53', {
            url: '/circulars53',
            templateUrl: 'views/files/circulars/042015 dated 10th March 2015.html'

        })
        .state('circulars54', {
            url: '/circulars54',
            templateUrl: 'views/files/circulars/052015 dated 30th March 2015.html'

        })
        .state('circulars55', {
            url: '/circulars55',
            templateUrl: 'views/files/circulars/062015 dated 9th April 2015.html'

        })
        .state('circulars56', {
            url: '/circulars56',
            templateUrl: 'views/files/circulars/072015 dated 10th April 2015.html'

        })
        .state('circulars57', {
            url: '/circulars57',
            templateUrl: 'views/files/circulars/082015 dated 12th June 2015.html'

        })
        .state('circulars58', {
            url: '/circulars58',
            templateUrl: 'views/files/circulars/092015 dated 18th June 2015.html'

        })
        .state('circulars59', {
            url: '/circulars59',
            templateUrl: 'views/files/circulars/102015 dated 13th July 2015.html'

        })
        .state('circulars60', {
            url: '/circulars60',
            templateUrl: 'views/files/circulars/112015 dated 21st July 2015.html'

        })
        .state('circulars61', {
            url: '/circulars61',
            templateUrl: 'views/files/circulars/122015 dated 1st September 2015.html'

        })
        .state('circulars62', {
            url: '/circulars62',
            templateUrl: 'views/files/circulars/012016 dated 12th January 2016.html'

        })
        .state('circulars63', {
            url: '/circulars63',
            templateUrl: 'views/files/circulars/042016 dated 27th April 2016.html'

        })
        .state('circulars64', {
            url: '/circulars64',
            templateUrl: 'views/files/circulars/052016 dated 16th May 2016.html'

        })
        .state('circulars65', {
            url: '/circulars65',
            templateUrl: 'views/files/circulars/2016 dated 7th June 2016.html'

        })
        .state('circulars66', {
            url: '/circulars66',
            templateUrl: 'views/files/circulars/2016 dated 7th June 2016.html'

        })
        .state('circulars67', {
            url: '/circulars67',
            templateUrl: 'views/files/circulars/092016 dated 3rd  August 2016.html'

        })
        .state('circulars68', {
            url: '/circulars68',
            templateUrl: 'views/files/circulars/132016 dated 5th December 2016.html'

        })
        .state('circulars69', {
            url: '/circulars69',
            templateUrl: 'views/files/circulars/152016 dated 7th December 2016.html'

        })
        .state('circulars70', {
            url: '/circulars70',
            templateUrl: 'views/files/circulars/162016 dated 26th December 2016.html'

        })
        .state('circulars71', {
            url: '/circulars71',
            templateUrl: 'views/files/circulars/012017 dated 22nd February 2017.html'

        })
        .state('circulars72', {
            url: '/042016 dated 27th April 2016.html',
            templateUrl: 'views/files/circulars/042016 dated 27th April 2016.html'

        })




    .state('main', {
            url: '/',
            templateUrl: 'views/main/main.html'

        })
        .state('chapters', {
            url: '/chapters',
            templateUrl: 'views/chapters/chapters.html'

        })
        .state('Sections', {
            url: '/Sections',
            templateUrl: 'views/Sections/Sections.html'

        })
        .state('SubSections', {
            url: '/SubSections',
            templateUrl: 'views/SubSections/SubSections.html'

        })
        .state('Definition', {
            url: '/Definition',
            templateUrl: 'views/Definition/Definition.html'

        })
        .state('sectionLink', {
            url: '/sectionLink',
            templateUrl: 'views/sectionLink/sectionLink.html'

        })
        .state('ruleLink', {
            url: '/ruleLink',
            templateUrl: 'views/ruleLink/ruleLink.html'

        })
        .state('ruleSectionLink', {
            url: '/ruleSectionLink',
            templateUrl: 'views/ruleSectionLink/ruleSectionLink.html'

        })
        .state('notifications', {
            url: '/notifications',
            templateUrl: 'views/notifications/notifications.html'

        })
        .state('schedules', {
            url: '/schedules',
            templateUrl: 'views/schedules/schedules.html'

        })
        .state('rules', {
            url: '/rules',
            templateUrl: 'views/rules/rules.html'

        })
        .state('rulesData', {
            url: '/rulesData',
            templateUrl: 'views/rulesData/rulesData.html'

        })


    //orders routes
    .state('orders', {
            url: '/orders',
            templateUrl: 'views/orders/orders.html'

        })
        .state('orders1', {
            url: '/S.O. 1177 (E) dated 28th March 2014.html',
            templateUrl: 'views/files/orders/S.O. 1177 (E) dated 28th March 2014.html'

        })
        .state('orders2', {
            url: '/S.O. 1428(E) dated 2nd June 2014.html',
            templateUrl: 'views/files/orders/S.O. 1428(E) dated 2nd June 2014.html'

        })
        .state('orders3', {
            url: '/S.O. 1429 (E) dated 2nd June 2014.html',
            templateUrl: 'views/files/orders/S.O. 1429 (E) dated 2nd June 2014.html'

        })
        .state('orders4', {
            url: '/S.O. 1460 (E) dated 6th June 2014.html',
            templateUrl: 'views/files/orders/S.O. 1460 (E) dated 6th June 2014.html'

        })
        .state('orders5', {
            url: '/S.O. 1820 (E) dated 9th July 2014.html',
            templateUrl: 'views/files/orders/S.O. 1820 (E) dated 9th July 2014.html'

        })
        .state('orders6', {
            url: '/S.O. 1894 (E) dated 24th July 2014.html',
            templateUrl: 'views/files/orders/S.O. 1894 (E) dated 24th July 2014.html'

        })
        .state('orders7', {
            url: '/S.O. 2226 (E) dated 4th September 2014.html',
            templateUrl: 'views/files/orders/S.O. 2226 (E) dated 4th September 2014.html'

        })
        .state('orders8', {
            url: '/S.O. 2821(E) dated 20th September 2014.html',
            templateUrl: 'views/files/orders/S.O. 2821(E) dated 20th September 2014.html'

        })
        .state('orders9', {
            url: '/CLB order dated 28th January 2015.html',
            templateUrl: 'views/files/orders/CLB order dated 28th January 2015.html'

        })
        .state('orders10', {
            url: '/S.O. 504 (E) dated 13th February 2015.html',
            templateUrl: 'views/files/orders/S.O. 504 (E) dated 13th February 2015.html'

        })
        .state('orders11', {
            url: '/S.O.(E) dated 10th April 2015.html',
            templateUrl: 'views/files/orders/S.O.(E) dated 10th April 2015.html'

        })
        .state('orders12', {
            url: '/S. O. 702(E) dated 10th March, 2016.html',
            templateUrl: 'views/files/orders/S. O. 702(E) dated 10th March, 2016.html'

        })
        .state('orders13', {
            url: '/S.O.1226(E) dated 29th March 2016.html',
            templateUrl: 'views/files/orders/S.O.1226(E) dated 29th March 2016.html'

        })
        .state('orders14', {
            url: '/S.O.1227(E) dated 29th March 2016.html',
            templateUrl: 'views/files/orders/S.O.1227(E) dated 29th March 2016.html'

        })
        .state('orders15', {
            url: '/S.O.1228(E) dated 29th March 2016.html',
            templateUrl: 'views/files/orders/S.O.1228(E) dated 29th March 2016.html'

        })
        .state('orders16', {
            url: '/S.O. 2264(E) dated 30th June, 2016.html',
            templateUrl: 'views/files/orders/S.O. 2264(E) dated 30th June, 2016.html'

        })
        .state('orders17', {
            url: '/S.O. 3676(E) dated 7th December, 2016.html',
            templateUrl: 'views/files/orders/S.O. 3676(E) dated 7th December, 2016.html'

        })


    .state('oldvsnew', {
            url: '/oldvsnew',
            templateUrl: 'views/oldvsnew/oldvsnew.html'

        })
        .state('registration', {
            url: '/registration',
            templateUrl: 'views/registration/registration.html'

        })
        //Secretarial Standards
        .state('ss', {
            url: '/ss',
            templateUrl: 'views/ss/ss.html'

        })
        .state('ss1', {
            url: '/ss1',
            templateUrl: 'views/files/ss/SS-1.html'

        })
        .state('ss2', {
            url: '/ss2',
            templateUrl: 'views/files/ss/SS-2.html'

        })
        //whatsnew routes
        .state('whatsnew', {
            url: '/whatsnew',
            templateUrl: 'views/whatsnew/whatsnew.html'

        })
        .state('whatsnew1', {
            url: '/whatsnew1',
            templateUrl: 'views/files/whatsnew/G.S.R. 339(E) dated 7th April, 2017.html'

        })
        .state('whatsnew2', {
            url: '/whatsnew2',
            templateUrl: 'views/files/whatsnew/G.S.R. 355(E) dated 12th April, 2017.html'

        })
        .state('whatsnew3', {
            url: '/whatsnew3',
            templateUrl: 'views/files/whatsnew/S.O. 1182(E) dated 13th April, 2017.html'

        })
        .state('whatsnew4', {
            url: '/whatsnew4',
            templateUrl: 'views/files/whatsnew/G.S.R ____ (E) dated 13th April, 2017.html'
        })
        .state('whatsnew5', {
            url: '/whatsnew5',
            templateUrl: 'views/files/whatsnew/022017 dated 20th April, 2017.html'

        })
        .state('whatsnew6', {
            url: '/whatsnew6',
            templateUrl: 'views/files/whatsnew/032017 dated 27th April, 2017.html'

        })
        .state('whatsnew7', {
            url: '/whatsnew7',
            templateUrl: 'views/files/whatsnew/S. O. 702(E) dated 10th March, 2016.html'

        })
        .state('whatsnew8', {
            url: '/whatsnew8',
            templateUrl: 'views/files/whatsnew/Companies Amendment Bill, 2016.html'

        });

    $urlRouterProvider.otherwise('/');
})




.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})