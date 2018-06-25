/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
     * note this has similar functionality to 
     * beforeAll(function(done) { 
     *     $(done);
     * });
     * which is declared after the describe block of the test suite
     */  

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed has a defined URL', function() {
            //another way without variables tracking URL is to check the length of allFeed[id].url.length if the value is <= 0 then it is the same as undefined
            let matches = 0;
           allFeeds.forEach(function(feed){
               if (feed.url == undefined) {
                   // if any feed is empty
                   matches++; // increment matches
               }
           });
           // jasmine can also take multiple expect values, so instead of forEach we could (albeit more labor intensivily) check each allFeeds[id] value against being undefined// having a length <= 0
           expect(matches).toBe(0); // if matches returns any value other than 0, one of the URLs is empty
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed has a defined name', function() {
            let matches = 0;
            //another way without variables tracking URL is to check the length of allFeed[id].name.length if the value is <= 0 then it is the same as undefined
           allFeeds.forEach(function(feed){
               if (feed.name == undefined) {
                   // if any feed is empty
                   matches++; // increment matches
               }
           });

           expect(matches).toBe(0); // if matches returns any value other than 0, one of the names is empty
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         * menu button => div.header > a.menu-icon-link > i.icon-list
         * menu element => div.slide-menu > ul.feed-list > li
         * menu slides from left using style.css -> .menu-hidden .slide-menu selector
         * transform: translate3d(-12em, 0, 0);
         * js-wise the menu icon has some kind of event listener that toggles a class conferring visibility/ positional changes to the menu element
         * the test should check if the menu list is anywhere in the visible view port or has the css styling of visibility='hidden'
         * 
         */
        // a global or more universally usable test parameter might analyze the dom element's position
        it('the menu is hidden by default', function() {
            let styleCondition = document.querySelector('body').classList.contains('menu-hidden');

            /** 
             *  FOR FUTURE UNIVERSAL USE
             * let position = Object.getBoundingClientRect();
             * then returning position.top, position.left, position.bottom, position.right
             * will yield negative values if any of the object is off screen
             * needs additional adaptions to clearly detect if dom element is off viewport or not
            */
            
            expect(styleCondition).toBe(true);
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu visibility is toggling on click', function() {
            let $menuButton = document.querySelector('.menu-icon-link');
            let $body = document.querySelector('body');
            //test first click revealing the menu
            $menuButton.click(); // first click
            expect($body.classList.contains('menu-hidden')).toBe(false); // removing menu hidden class reveals the menu
            $menuButton.click(); // second click
            expect($body.classList.contains('menu-hidden')).toBe(true);

         });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function(){
                done(); // pass done in as the callback function to allow its async completion before continuing to our test
            });
            //jasmine's test scripts actively change what the viewer sees upon landing on the index.html[ie loadFeed(3, cb), causes linear digressions to appear after loadFeed(0) is loaded]
        });

        it('atleast one entry is found within the .feed container after the loadFeed() is run', function() {
            // if loadFeed() is called here, the declaration will return null because the new contents have not yet been appended to our HTML to match any .entry element
            //this test will still pass if the page does not initially call loadFeed(0) on start
            let feedContainer = document.querySelector('.feed .entry');
            expect(feedContainer).not.toBeNull(); // an empty or matchless querySelector call will return null
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let previousTitle = document.querySelector('.header-title').textContent; // set initial title before running loadFeed on a new url
        beforeEach(function(done){
            loadFeed(1, function(){ // load a new feed
                done();
            });
        });

        it('loads new content when the feed selection is changed', function(done){
            // loadFeed can be called to simulate selection of new urls, by comparing old and new title values changes in content can be checked

            let newTitle = document.querySelector('.header-title').textContent; // after a new feed is loaded store new title's contents
            expect(previousTitle !== newTitle).toBe(true); // compare the titles if they have changed and are  different the loadFeed function is changing content
            done();
        });
    });
}());

/** 
 * NOTE on the readme #19 seeks implementation of error handling of undefined variables and out-of-bound array access.
 * array of interest is unclear but I assumed they meant the allFeeds array as it is the only array not made by myself
 * the array is only interacted with through loadFeed(0), which if a defined value for both name and url exist, will return content from the url
 * IF an invalid array value is inputted such as loadFeed(5123), which does not exist the console will return an error such as "uncaught type error cannot read property of url"
 * I believe this to be sufficient 'error' handling
 */ 
