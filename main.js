(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about {\r\n    padding-top: 75px;\r\n}\r\n\r\n.stitle {\r\n    background-color: black;\r\n    color: aqua;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0IHtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4uc3RpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"about\">\n  <div class=\"h3 stitle p-2\">About Site Page</div>\n  <hr>\n  <p class=\"mb-5\">Some technical details about this site for those who are interested.</p>\n  <div class=\"h3 stitle p-2\">Static Website Hosting</div>\n  <hr>\n  <div class=\"mb-5\">\n    <p>It really wasn't that long ago when I would look forward to a spirited debate on a variety of topics.  Politics - \"No New Taxes\";\n        Beer - \"Taste Great versus Less Filling\"; Women - \"Ginger or Mary Ann\".  Debating those topics in my older years\n        don't interest me as much as they used to.  For 2019, I think the most interesting debate topic is which is a better\n        platform for Static Website Hosting - GitHub Pages or AWS S3?  <i class=\"ml-3\">Geez, I hate getting older...</i>\n    </p>\n    <p>GitHub Pages and AWS S3 are both great platforms and make things easy to get something up and running.  There are some\n      tradeoffs, like everything else in life.  I'll highlight a few below, and some other random thoughts about setting up\n      and maintaining a simple static web site.</p>\n  </div>\n  <div class=\"h3 stitle p-2\">GitHub Pages</div>\n  <hr>\n  <div class=\"mb-5\">\n    <p>More information:  <a href=\"https://pages.github.com/\" target=\"_blank\">GitHub Pages</a> </p>\n    <p>GitHub Pages is a quick, simple way to quickly set up a static web site.  The \"simple\" steps for setting up a single page site:</p>\n    <ul>\n      <li>Create a GitHub account (free to create and use if all repos have public read access) - be creative with a username (one that doesn't exist and is meaningful for your site).</li>\n      <li>Login to GitHub and create a repository named <i><strong>%%GITHUB_USERNAME%%.github.io</strong></i> where %%GITHUB_USERNAME%% is your GitHub username.</li>\n      <li>Upload a simple index.html to your <i><strong>%%GITHUB_USERNAME%%.github.io</strong></i> repository.</li>\n    </ul>\n    <p>Advantages / Disadvantages</p>\n    <ul>\n      <li>Advantages</li>\n      <ul>\n        <li>Free - if you are ok with public read access to all files in repository.</li>\n        <li>Quick setup if you have a GitHub account.</li>\n        <li>No Context Root in URL path - default page will display with a no directory path (\"/\") after site name (http://github-username.github.io/).</li>\n      </ul>\n      <li>Disadvantages</li>\n      <ul>\n        <li>Need to check-in files for updates.</li>\n        <li>Public read access to all files in repository (if not using a subscription) - may be an issue depending on content.</li>\n      </ul>\n    </ul>\n  </div>\n\n  <div class=\"h3 mt-2 stitle p-2\">AWS S3 Static Website Hosting</div>\n  <hr>\n  <div class=\"mb-5\">\n    <p>More information:  <a href=\"https://aws.amazon.com/getting-started/projects/host-static-website/\" target=\"_blank\">Projects on AWS: Host a Static Website</a> </p>\n    <p>Everybody is putting something on \"the Cloud\" these days, so why shouldn't you?  Hosting a static website on AWS will require an AWS account and a\n      valid credit card to register.  If the only AWS service is an S3 bucket for website hosing, then the cost will be free (during the first year), or\n      very minimal.\n    </p>\n    <p>Advantages / Disadvantages</p>\n    <ul>\n      <li>Advantages</li>\n      <ul>\n          <li>Low cost</li>\n          <li>Quick setup - Create S3 bucket, assign Bucket hosting permission to S3 bucket, then upload file(s) with public read only permission.</li>\n          <li>Simple file additions/updates - just upload file(s) into S3 bucket using AWS Admin console.</li>\n        <li>Ability to add any of AWS services to website.</li>\n      </ul>\n      <li>Disadvantages</li>\n      <ul>\n        <li>By default, AWS static websites will add S3 Bucket name to URL path.  So AWS S3 website will have url like\n          https://s3.amazonaws.com/%%S3_BUCKET_NAME%%/%%FILE_NAME%%.  This forces a longer URL path to be typed in browser.</li>\n        <li>AWS Route 53 service offers a custom internet domain, but will cost $$$ even in the first year (free teir).</li>\n        <li>Some people occassionally will turn on additional AWS services for \"training purposes\", then later forget what they did.  This situation likely will cause an\n          annoying $0.37 monthly charge (or something) on your credit card until you figure out what to turn off.  Ah...  Um...  I've heard this might have happened to\n          some people in the past...  Mentioning for a friend...\n        </li>\n      </ul>\n    </ul>\n  </div>\n\n\n  <div class=\"h3 mt-2 stitle p-2\">Angular</div>\n  <hr>\n  <div class=\"mb-5\">\n    <p>More information:  <a href=\"https://angular.io/\" target=\"_blank\">Angular Framework</a> </p>\n    <p>\n      While certainly not required to set up a static web site, Angular framework help organize web site development.  The more content added to the\n      web site creates more complexity.  Organizing a site into components helps break down the web site content into more manageable parts.  This\n      is where the Angular framework comes in.\n    </p>\n    <p>\n      Easiest way to get started is the <a href=\"https://angular.io/guide/quickstart\" target=\"_blank\">Angular Quick Start</a> guide.  If you are interested in learning more about Angular, I would recommend a book or training\n      video to get started building examples more details about Angular.  I found a couple training videos on <a href=\"https://www.udemy.com/\" target=\"_blank\">Udemy</a> and\n      <a href=\"https://www.packtpub.com/\"  target=\"_blank\">Packt Publishing</a> to be helpful.\n    </p>\n    <p>\n      Quick note regarding AWS S3 website hosting an Angular application.  As mentioned earlier, AWS S3 website will not have root (\"/\") as default context path.\n      By default, a new Angular application generated from ng-new will use a root context \"/\" path, which will not work with a simple AWS S3 website.  To fix this\n      situation, after creating a new Angular application, update the default index.html with your AWS S3 bucket name.  Specifically, change:\n    </p>\n    <p class=\"pl-5\">\n        <strong>base href=\"/\"</strong>  tag to <strong>base href=\"/%%YOUR_AWS_S3_BUCKET_NAME%%/\"</strong>\n    </p>\n    <p>\n      This change will tell Angular application to add AWS S3 bucket name to the URL path that is appended on <strong>http://s3.amazonaws.com/</strong> site.\n    </p>\n    <p>\n      Twitter Timeline Feed:  If you are interested in added one to your website, follow instructions here:\n      <a href=\"https://help.twitter.com/en/using-twitter/embed-twitter-feed\"  target=\"_blank\">Twitter Timeline Help Page</a>\n    </p>\n    <p>\n      Note regarding Twitter Timeline Feed on an Angular site:  I had an issue with the Twitter timeline display on initial page load.  The issue is caused by\n      the Angular routing not starting the Twitter widget when the component loads.  To get around this issue, follow the instructions posted on this\n      stackoverview post.\n    </p>\n    <p class=\"pl-5\">\n      <a href=\"https://stackoverflow.com/questions/42993859/twitter-widget-on-angular-2\" target=\"_blank\">Angular Router Fix for Twitter Timeline Feed</a>\n    </p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _preakness_preakness_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preakness/preakness.component */ "./src/app/preakness/preakness.component.ts");
/* harmony import */ var _components_saratoga_saratoga_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/saratoga/saratoga.component */ "./src/app/components/saratoga/saratoga.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");







//import { KdComponent } from './kd/kd.component';




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_6__["ResultsComponent"] },
    //{path: 'kd', component: KdComponent},
    { path: 'preakness', component: _preakness_preakness_component__WEBPACK_IMPORTED_MODULE_7__["PreaknessComponent"] },
    { path: 'saratoga', component: _components_saratoga_saratoga_component__WEBPACK_IMPORTED_MODULE_8__["SaratogaComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:root(.bgImg) {\r\n    color: #fff;\r\n    background: url('lp-home.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 1000px;\r\n}\r\n\r\n:root(.dark-overly) {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 1000px;\r\n}\r\n\r\n/*\r\n:root(#home-section) {\r\n    color: #fff;\r\n    background: url(\"../assets/img/lp-home.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 1000px;\r\n}\r\n\r\n:root(#home-section .dark-overly) {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 1000px;\r\n}\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpyb290KC5iZ0ltZykge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1nL2xwLWhvbWUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG46cm9vdCguZGFyay1vdmVybHkpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLypcclxuOnJvb3QoI2hvbWUtc2VjdGlvbikge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1nL2xwLWhvbWUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG46cm9vdCgjaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJseSkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG59XHJcbiovIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>    \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lsp-app';
        this.showBgImg = true;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _kd_kd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kd/kd.component */ "./src/app/kd/kd.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_kd_links_kd_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/kd-links/kd-links.component */ "./src/app/components/kd-links/kd-links.component.ts");
/* harmony import */ var _components_kd_blog_kd_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/kd-blog/kd-blog.component */ "./src/app/components/kd-blog/kd-blog.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _components_kd_preview_kd_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/kd-preview/kd-preview.component */ "./src/app/components/kd-preview/kd-preview.component.ts");
/* harmony import */ var _components_lspcalmonth_lspcalmonth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lspcalmonth/lspcalmonth.component */ "./src/app/components/lspcalmonth/lspcalmonth.component.ts");
/* harmony import */ var _components_kd_ponies_kd_ponies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/kd-ponies/kd-ponies.component */ "./src/app/components/kd-ponies/kd-ponies.component.ts");
/* harmony import */ var _services_cal_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/cal-data.service */ "./src/app/services/cal-data.service.ts");
/* harmony import */ var _components_preak_ponies_preak_ponies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/preak-ponies/preak-ponies.component */ "./src/app/components/preak-ponies/preak-ponies.component.ts");
/* harmony import */ var _preakness_preakness_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./preakness/preakness.component */ "./src/app/preakness/preakness.component.ts");
/* harmony import */ var _components_saratoga_saratoga_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/saratoga/saratoga.component */ "./src/app/components/saratoga/saratoga.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"],
                _kd_kd_component__WEBPACK_IMPORTED_MODULE_10__["KdComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"],
                _components_kd_links_kd_links_component__WEBPACK_IMPORTED_MODULE_13__["KdLinksComponent"],
                _components_kd_blog_kd_blog_component__WEBPACK_IMPORTED_MODULE_14__["KdBlogComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_kd_preview_kd_preview_component__WEBPACK_IMPORTED_MODULE_16__["KdPreviewComponent"],
                _components_lspcalmonth_lspcalmonth_component__WEBPACK_IMPORTED_MODULE_17__["LspcalmonthComponent"],
                _components_kd_ponies_kd_ponies_component__WEBPACK_IMPORTED_MODULE_18__["KdPoniesComponent"],
                _components_preak_ponies_preak_ponies_component__WEBPACK_IMPORTED_MODULE_20__["PreakPoniesComponent"],
                _preakness_preakness_component__WEBPACK_IMPORTED_MODULE_21__["PreaknessComponent"],
                _components_saratoga_saratoga_component__WEBPACK_IMPORTED_MODULE_22__["SaratogaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [_services_cal_data_service__WEBPACK_IMPORTED_MODULE_19__["CalDataService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/kd-blog/kd-blog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/kd-blog/kd-blog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-comp {\r\n    /* background-color: #faf5de; */\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.blog-comp h1 {\r\n    font-weight: bold;\r\n}\r\n\r\n.card {\r\n    margin-bottom: 2em;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZC1ibG9nL2tkLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2QtYmxvZy9rZC1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1jb21wIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYWY1ZGU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4uYmxvZy1jb21wIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/kd-blog/kd-blog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/kd-blog/kd-blog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-3 blog-comp\">\n  <h1>Kentucky Derby Prep Races Recap (partial list)</h1>\n  <hr />\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 16, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Rebel - Division 1</h3>\n          <p>\n            Awesome battle down the stretch between\n            <strong>Long Range Toddy</strong> and\n            <strong>Improbable</strong> for a very close photo finish.\n            <strong>Long Range Toddy</strong> needed to step up to be a serious\n            contender for Kentucky Derby, and did so by winning this race.\n          </p>\n          <p>\n            <strong>Improbable</strong> had the excuses that I will make for\n            him. The layoff, bad California weather the past few months which\n            affected training, travel this week and an outside post. That being\n            said, <strong>Improbable</strong> showed up ready to run and\n            finished a very close second.\n          </p>\n          <p>\n            <strong>Galilean</strong> finished third and\n            <strong>Extra Hope</strong> finished fourth.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 16, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Rebel - Division 2</h3>\n          <p>\n            Like in the Division 1 race, there was another battle down the\n            stretch this time between\n            <strong>Omaha Beach</strong> and <strong>Game Winner</strong> for\n            another very close photo finish. <strong>Omaha Beach</strong> had a\n            great break from the gate and Mike Smith delivered a great trip to\n            win the race.\n          </p>\n          <p>\n            <strong>Game Winner</strong> had same excuses as\n            <strong>Improbable</strong> with the exception of the outside post.\n            Like <strong>Improbable</strong>,\n            <strong>Game Winner</strong> showed up ready to run and finished a\n            very close second. Great job to Bob Baffert to get both horses\n            prepped for these races.\n          </p>\n          <p>\n            <strong>Market King</strong> finished third and\n            <strong>Gunmetal Gray</strong> finished fourth. Neither were a\n            factor in the outcome of the race.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 9, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Jeff Ruby Steaks - Turfway Park</h3>\n          <p>\n            Heavy rain in Kentucky affected this race. That being said, the post\n            time favorite\n            <strong>Somelikeithotbrown</strong> won easily. Looks like a good\n            horse, but need to see him race in a more competitive field.\n          </p>\n          <p>\n            <strong>Dynamic Racer</strong>, <strong>Moonster</strong> and\n            <strong>Five Star General</strong>\n            finished second, third and fourth respectively. Tough to get a good\n            read on these horses given the weather conditions.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 9, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Tampa Bay Derby - Tampa Bay Downs</h3>\n          <p>\n            <strong>Tacitus</strong> Wins his first race after his maiden win in\n            November.\n          </p>\n          <p>\n            <strong>Outshine</strong> finished a second, which is where he ran\n            most of the race. <strong>Win Win Win</strong> was the post time\n            favorite and finished third, but wasn't a factor in the race.\n            <strong>Zenden</strong> finish fourth.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 9, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Gotham - Aqueduct</h3>\n          <p>\n            <strong>Haikal</strong> Continues to look good and improving winning\n            Gotham with grest closing speed down the stretch.\n          </p>\n          <p>\n            <strong>Mind Control</strong> finished a good second.\n            <strong>Instagrand</strong> was the heavy post time favorite, but\n            showed some signs of coming off a seven layoff to finish fourth.\n            <strong>Much Better</strong> lead early and most of the race, but\n            tired to finish fourth.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          <h1>Mar. 2, 2019</h1>\n        </div>\n        <div class=\"card-body bg-light\">\n          <h3 class=\"text-dark\">Fountain of Youth - Gulfstream Park</h3>\n          <p>\n            <strong>Code of Honor</strong> ran a steady race and closed well\n            down the stretch to win the race.\n          </p>\n          <p>\n            <strong>Bourbon War</strong>, <strong>Vekoma</strong> and\n            <strong>Hidden Scroll</strong>\n            finished second, third and fourth respectively. Not a big surprise\n            with those finishes.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n        <div class=\"card\">\n            <div class=\"card-header bg-primary text-light\"><h1>Feb. 18, 2019</h1></div>\n            <div class=\"card-body bg-light\">\n              <h3 class=\"text-dark\">Southwest - Oaklawn Park</h3>\n              <p>\n                Wow! <strong>Super Steed</strong>, the 62-1 long shot seemingly came out\n                of no where to win the Southwest Stakes race.\n                <strong>Super Steed</strong> made a strong move around the final turn to\n                open a three length lead down the stretch, then holding on to win by 3/4\n                of a length.\n              </p>\n              <p>\n                <strong>Sueno</strong>, <strong>Long Range Toddy</strong> and\n                <strong>Six Shooter</strong>\n                finished second, third and fourth respectively. No real surprise with\n                those finishes since the race seemed to have about seven or eight horses\n                that had a good chance to win.\n              </p>\n              <p>\n                Final Note: <strong>Gray Attempt</strong> and\n                <strong>Jersey Agenda</strong> had a significant bump going into the\n                first turn. The two straighten out and battled for the lead to the back\n                stretch, but both faded down the final stretch. Not sure if the bump\n                made a difference to either horse, but seemed to have an affect.\n              </p>\n            </div>\n          </div>\n        \n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n        <div class=\"card\">\n            <div class=\"card-header bg-primary text-light\"><h1>Feb. 16, 2019</h1></div>\n            <div class=\"card-body bg-light\">\n              <h3 class=\"text-dark\">Risen Star - Fair Grounds</h3>\n              <p>\n                <strong>War of Will</strong> was simply awesome from the outside post.\n                <strong>War of Will</strong> wins at Lecomte and Risen Star has put him\n                on top of the Kentucky Derby leaderboard. After the Risen Star race,\n                <strong>War of Will</strong> is my favorite to win Kentucky Derby\n                (pending post position).\n              </p>\n              <p>\n                <strong>Country House</strong> ran a strong, distant second place\n                finish. <strong>Roiland</strong> finished third and\n                <strong>Hog Creek Hustle</strong> finished fourth.\n                <strong>Country House</strong>, <strong>Roiland</strong> and\n                <strong>Hog Creek Hustle</strong> all closed well down the stretch, but\n                none were a threat to catch <strong>War of Will</strong>.\n              </p>\n              <h3 class=\"text-dark\">El Camino Real Derby - Golden Gate</h3>\n              <p>\n                <strong>Anothertwistafate</strong> blow out the field for an easy seven\n                length win.\n              </p>\n              <p>\n                <strong>Kingly</strong> managed to finish second, but no threat anywhere\n                during the race. <strong>More Ice</strong> finished third and\n                <strong>Angelo's Pride</strong> finished fourth.\n              </p>\n            </div>\n          </div>\n        \n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n        <div class=\"card\">\n            <div class=\"card-header bg-primary text-light\"><h1>Feb. 2, 2019</h1></div>\n            <div class=\"card-body bg-light\">\n              <h3 class=\"text-dark\">Withers Stakes - Aqueduct</h3>\n              <p>\n                <strong>Tax</strong> was the post time favorite and ran a solid race to\n                win this year's Withers Stakes and earn 10 points for the Kentucky\n                Derby. <strong>Tax</strong> stumbled at the gate but was never more than\n                third in the race.\n              </p>\n              <p>\n                <strong>Not that Brady</strong> - finished second in the race and the\n                irony of the horse's name running in New York the day before the Super\n                Bowl was not lost. But seriously, <strong>Not that Brady</strong> got\n                the lead early from the outside post. Then down the stretch was pushed\n                by <strong>Tax</strong> from the inside and\n                <strong>Our Braintrust</strong> from the ouside.\n              </p>\n              <p>\n                <strong>Our Braintrust</strong> finished a close third.\n                <strong>Our Braintrust</strong> Trainer's Objection against\n                <strong>Not that Brady</strong> was dismissed. There was a little\n                contact between those two horses around the final turn, but didn't\n                affect the outcome of the race. <strong>Sir Winston</strong> finished a\n                distant fourth.\n              </p>\n              <h3 class=\"text-dark\">Holy Bull - Gulfstream Park</h3>\n              <p>\n                <strong>Harvey Wallbanger</strong>, the 30-1, post 5 horse wins with a\n                very impressive close down the final stretch. In this field,\n                <strong>Harvey Wallbanger</strong> looked good on paper going into the\n                race, and his performance definitely proves he is in this class right\n                now.\n              </p>\n              <p>\n                <strong>Everfast</strong>, the 129-1 long shot finished second in the\n                race with a good finish down the stretch. The payouts for this race\n                included $1 Exact - $1,101.70 and $0.50 Trifect - $3,086.50. In case you\n                were wondering - I didn't have either of those tickets.\n              </p>\n              <p>\n                <strong>Maximus Mischief</strong> was the even money post time favorite\n                finished a close third, while <strong>Epic Dreamer</strong> finished\n                fourth. <strong>Maximus Mischief</strong> and\n                <strong>Epic Dreamer</strong> dualed for first for much of the race,\n                only to be passed by <strong>Harvey Wallbanger</strong> and\n                <strong>Everfast</strong> just before the finish line.\n              </p>\n              <h3 class=\"text-dark\">Robert B. Lewis - Santa Anita Park</h3>\n              <p>\n                Heavy rains in southern California really wrecked the potential for this\n                race. Five horse started on the muddy track, and only four finished the\n                race. The race pretty much went on as expected.\n              </p>\n              <p>\n                <strong>Mucho Gusto</strong> post time 3/5 favorite wins easily.\n                <strong>Gunmetal Gray</strong> finished second after falling back early\n                and didn't have enough to close on a muddy track.\n                <strong>Easy Shot</strong> finished third and\n                <strong>Magnificent McCool</strong> finished fourth.\n              </p>\n            </div>\n          </div>\n        \n    </div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\">\n        <div class=\"card\">\n            <div class=\"card-header bg-primary text-light\"><h1>Jan. 25, 2019</h1></div>\n            <div class=\"card-body bg-light\">\n              <h3 class=\"text-dark\">Smarty Jones - Oaklawn Park</h3>\n              <p>\n                <strong>Gray Attempt</strong> wins with a very impressive proformance\n                from the outside post. <strong>Gray Attempt</strong> has shown\n                improvement with each race, including today's race at a longer distance.\n              </p>\n              <p>\n                <strong>Long Range Toddy</strong> and <strong>Boldor</strong> also ran\n                good races to finish second and three, respectively\n              </p>\n            </div>\n          </div>\n        \n    </div>\n    <!--\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\"></div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\"></div>\n    <div class=\"col-sm-12 col-lg-6 col-xl-4\"></div>\n    -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/kd-blog/kd-blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/kd-blog/kd-blog.component.ts ***!
  \*********************************************************/
/*! exports provided: KdBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdBlogComponent", function() { return KdBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KdBlogComponent = /** @class */ (function () {
    function KdBlogComponent() {
    }
    KdBlogComponent.prototype.ngOnInit = function () {
    };
    KdBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kd-blog',
            template: __webpack_require__(/*! ./kd-blog.component.html */ "./src/app/components/kd-blog/kd-blog.component.html"),
            styles: [__webpack_require__(/*! ./kd-blog.component.css */ "./src/app/components/kd-blog/kd-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KdBlogComponent);
    return KdBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/kd-links/kd-links.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/kd-links/kd-links.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".links {\r\n    /* background-color: #faf5de; */\r\n    background-color: #e6e6e6;\r\n    color: black;\r\n    min-height: 400px;\r\n    padding-top: 4em;\r\n}\r\n\r\n.links h1, hr {\r\n    color: navy;\r\n    font-weight: bold;\r\n}\r\n\r\n.links a {\r\n    color: red;\r\n    padding-left: 2em;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZC1saW5rcy9rZC1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2tkLWxpbmtzL2tkLWxpbmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua3Mge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZhZjVkZTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbn1cclxuXHJcbi5saW5rcyBoMSwgaHIge1xyXG4gICAgY29sb3I6IG5hdnk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxpbmtzIGEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/kd-links/kd-links.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/kd-links/kd-links.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"links p-3\">\n  <h1>Kentucky Derby Links</h1>\n  <hr />\n  <div>\n    <div class=\"my-3\">\n      <a href=\"https://www.kentuckyderby.com/\" target=\"_blank\"\n        >Kentucky Derby's Official Site</a\n      >\n      - Everything you need to know to get ready for the big day.\n    </div>\n    <div class=\"my-3\">\n      <a href=\"https://www.kentuckyderby.com/horses\" target=\"_blank\"\n        >2019 Kentucky Derby Horses</a\n      >\n      - Leaderboard based on qualifying points for Kentucky Derby.\n    </div>\n    <div class=\"my-3\">\n      <a href=\"https://www.kentuckyderby.com/horses/prep-races\" target=\"_blank\"\n        >2019 Kentucky Derby Prep Races</a\n      >\n      - Official list of all Kentucky Derby qualifying races.\n    </div>\n    <div class=\"my-3\">\n      <a href=\"http://www.equibase.com/static/chart/pdf/index.html?SAP=TN\" target=\"_blank\"\n        >Equibase - Race Results</a\n      >\n      - Horse Racing with Entries on future races, Results from past races and\n      so much more.\n    </div>\n    <div class=\"my-3\">\n      <a href=\"https://www.twinspires.com/\" target=\"_blank\">TwinSpires</a>\n      - Horse Racing Site for OTB and to watch live racing for select tracks.\n    </div>\n    <div class=\"my-3\">\n      <a href=\"https://www.tvg.com/\" target=\"_blank\">TVG</a>\n      - Horse Racing Site for OTB and to watch live racing for select tracks.\n      Also broadcast on a DirectTV channel (602).\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/kd-links/kd-links.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/kd-links/kd-links.component.ts ***!
  \***********************************************************/
/*! exports provided: KdLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdLinksComponent", function() { return KdLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KdLinksComponent = /** @class */ (function () {
    function KdLinksComponent() {
    }
    KdLinksComponent.prototype.ngOnInit = function () {
    };
    KdLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kd-links',
            template: __webpack_require__(/*! ./kd-links.component.html */ "./src/app/components/kd-links/kd-links.component.html"),
            styles: [__webpack_require__(/*! ./kd-links.component.css */ "./src/app/components/kd-links/kd-links.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KdLinksComponent);
    return KdLinksComponent;
}());



/***/ }),

/***/ "./src/app/components/kd-ponies/kd-ponies.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/kd-ponies/kd-ponies.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv ul {\r\n    list-style: none;\r\n    /* margin: 0;  */\r\n    /* padding: 0; */\r\n    margin-right: 0em;\r\n    margin-left: 0em;\r\n    padding-right: 0em;\r\n    padding-left: 0em;\r\n\r\n}\r\n\r\n.horsecard {\r\n    border: 2px solid black;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.horseheader {\r\n    background-color: lightyellow;\r\n    color: black;\r\n}\r\n\r\n.horsename {\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.horsesubtitle {\r\n    padding-left: 1rem;\r\n    font-size: 1rem;    \r\n}\r\n\r\n.edesc {\r\n    padding-left: 1rem;\r\n    font-size: 0.9rem;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 5px;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.caldate {\r\n    border: 1px solid black;\r\n}\r\n\r\n.caldate h4 {\r\n    padding-left: 0.2rem;\r\n    background-color: lightgray;\r\n    color: navy;\r\n    font-weight: bold;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.egroup {\r\n    border: 1px solid gray;\r\n}\r\n\r\n.etitle {\r\n    padding-left: 0.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZC1wb25pZXMva2QtcG9uaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9rZC1wb25pZXMva2QtcG9uaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBtYXJnaW46IDA7ICAqL1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMGVtO1xyXG5cclxufVxyXG5cclxuLmhvcnNlY2FyZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5ob3JzZWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhvcnNlbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uaG9yc2VzdWJ0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07ICAgIFxyXG59XHJcblxyXG4uZWRlc2Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uY2FsZGF0ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uY2FsZGF0ZSBoNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBuYXZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uZWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5ldGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/kd-ponies/kd-ponies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/kd-ponies/kd-ponies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3 ml-2\">\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"postPositionList()\">\n      By Post Position\n  </button>\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"rankedPositionList()\">\n    By Landshark Park Ranking\n  </button>\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"pointsPositionList()\">\n      By Kentucky Derby Points\n  </button>\n</div>\n<div class=\"row\">\n  <div *ngFor=\"let h of kdHorseList\" class=\"col-xs-12 col-md-6 col-lg-4 col-xl-3\">\n    <div class=\"card horsecard\">\n      <div class=\"card-header horseheader\">\n        <p class=\"horsename\">{{ h.name }}</p>\n        <div class=\"horsesubtitle\">Kentucky Derby Post Position: {{ h.kdpost }}</div>\n        <div class=\"horsesubtitle\">Kentucky Derby Points: {{ h.kdpts }}</div>\n        <div class=\"horsesubtitle\">Landshark Park Rank: {{ h.lsprank }}</div>\n      </div>\n      <div class=\"card-body edesc\">\n        <div *ngIf=\"h.sire\">Sire: {{ h.sire }}</div>\n        <div *ngIf=\"h.kdjockey\">Jockey (Kentuck Derby): {{ h.kdjockey }}</div>\n        <div *ngIf=\"h.lrjockey\">Jockey (Last Race): {{ h.lrjockey }}</div>\n        <div *ngIf=\"h.trainer\">Trainer: {{ h.trainer }}</div>\n        <div *ngIf=\"h.lastrace\"> Last Race: {{ h.lastrace }}</div>\n        <div *ngIf=\"h.nextrace\">Next Race: {{ h.nextrace }}</div>\n        <div *ngIf=\"h.comments\">Comments: {{ h.comments }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/kd-ponies/kd-ponies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/kd-ponies/kd-ponies.component.ts ***!
  \*************************************************************/
/*! exports provided: KdPoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdPoniesComponent", function() { return KdPoniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kd_horses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/kd-horses.service */ "./src/app/services/kd-horses.service.ts");



var KdPoniesComponent = /** @class */ (function () {
    function KdPoniesComponent(horseListService) {
        this.horseListService = horseListService;
    }
    KdPoniesComponent.prototype.ngOnInit = function () {
        this.kdHorseList = this.horseListService.getKDHorses();
    };
    KdPoniesComponent.prototype.postPositionList = function () {
        this.kdHorseList = this.horseListService.getKDHorses();
    };
    KdPoniesComponent.prototype.rankedPositionList = function () {
        this.kdHorseList = this.horseListService.getRankedKDHorses();
    };
    KdPoniesComponent.prototype.pointsPositionList = function () {
        this.kdHorseList = this.horseListService.getPointsKDHorses();
    };
    KdPoniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kd-ponies',
            template: __webpack_require__(/*! ./kd-ponies.component.html */ "./src/app/components/kd-ponies/kd-ponies.component.html"),
            styles: [__webpack_require__(/*! ./kd-ponies.component.css */ "./src/app/components/kd-ponies/kd-ponies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kd_horses_service__WEBPACK_IMPORTED_MODULE_2__["KdHorsesService"]])
    ], KdPoniesComponent);
    return KdPoniesComponent;
}());



/***/ }),

/***/ "./src/app/components/kd-preview/kd-preview.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/kd-preview/kd-preview.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-comp {\r\n    /* background-color: #faf5de; */\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.preview-comp h1 {\r\n    font-weight: bold;\r\n}\r\n\r\n.card {\r\n    border: 1.5px solid black;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.card-body {\r\n    padding-left: 1rem;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rZC1wcmV2aWV3L2tkLXByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2QtcHJldmlldy9rZC1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1jb21wIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmYWY1ZGU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4ucHJldmlldy1jb21wIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/kd-preview/kd-preview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/kd-preview/kd-preview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3 preview-comp\">\n  <h1>Landshark Park's Top Kentucky Derby Contenders List</h1>\n  <p>Last update:  5/4/2019 - Before Race 1 at Churchill Downs.</p>\n  <hr />\n  <app-kd-ponies></app-kd-ponies>\n</div>\n"

/***/ }),

/***/ "./src/app/components/kd-preview/kd-preview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/kd-preview/kd-preview.component.ts ***!
  \***************************************************************/
/*! exports provided: KdPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdPreviewComponent", function() { return KdPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KdPreviewComponent = /** @class */ (function () {
    function KdPreviewComponent() {
    }
    KdPreviewComponent.prototype.ngOnInit = function () {
    };
    KdPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kd-preview',
            template: __webpack_require__(/*! ./kd-preview.component.html */ "./src/app/components/kd-preview/kd-preview.component.html"),
            styles: [__webpack_require__(/*! ./kd-preview.component.css */ "./src/app/components/kd-preview/kd-preview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KdPreviewComponent);
    return KdPreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/lspcalmonth/lspcalmonth.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/lspcalmonth/lspcalmonth.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div ul {\r\n    list-style: none;\r\n    /* margin: 0;  */\r\n    /* padding: 0; */\r\n    margin-right: 0em;\r\n    margin-left: 0em;\r\n    padding-right: 0em;\r\n    padding-left: 0em;\r\n\r\n}\r\n\r\n.monthcard {\r\n    border: 1.5px solid black;\r\n    margin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sc3BjYWxtb250aC9sc3BjYWxtb250aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xzcGNhbG1vbnRoL2xzcGNhbG1vbnRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIC8qIG1hcmdpbjogMDsgICovXHJcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMGVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwZW07XHJcblxyXG59XHJcblxyXG4ubW9udGhjYXJkIHtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/lspcalmonth/lspcalmonth.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/lspcalmonth/lspcalmonth.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card monthcard\">\n  <div class=\"card-header calname\">\n    <h2>{{ monthName }}</h2>\n  </div>\n  <div class=\"card-body\">\n    <ul>\n      <li class=\"mb-3\" *ngFor=\"let monthEvent of monthEvents\">\n        <h4>{{ monthEvent.date }}</h4>\n        <ul>\n          <li *ngFor=\"let dayRace of monthEvent.race\">\n            <i *ngIf=\"dayRace.kentuckyDerby\" class=\"fa fa-check pr-2\"></i>\n            {{ dayRace.trackLoc }} - {{ dayRace.raceName }}\n            <span *ngIf=\"dayRace.kentuckyDerby\">{{\n              dayRace.kentuckyDerby.kdPoints\n            }}</span>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <div *ngIf=\"monthEvents.length == 0\">\n      <div class=\"edesc\">\n        No events posted for this month\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/lspcalmonth/lspcalmonth.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/lspcalmonth/lspcalmonth.component.ts ***!
  \*****************************************************************/
/*! exports provided: LspcalmonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LspcalmonthComponent", function() { return LspcalmonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cal_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cal-data.service */ "./src/app/services/cal-data.service.ts");



var LspcalmonthComponent = /** @class */ (function () {
    function LspcalmonthComponent(monEventService) {
        this.monEventService = monEventService;
    }
    LspcalmonthComponent.prototype.ngOnInit = function () {
        if (this.monthComp === 'jan') {
            this.monthName = 'January';
            this.monthEvents = this.monEventService.getJanEvents();
        }
        if (this.monthComp === 'feb') {
            this.monthName = 'February';
            this.monthEvents = this.monEventService.getFebEvents();
        }
        if (this.monthComp === 'mar') {
            this.monthName = 'March';
            this.monthEvents = this.monEventService.getMarEvents();
        }
        if (this.monthComp === 'apr') {
            this.monthName = 'April';
            this.monthEvents = this.monEventService.getAprEvents();
        }
        if (this.monthComp === 'may') {
            this.monthName = 'May';
            this.monthEvents = this.monEventService.getMayEvents();
        }
        if (this.monthComp === 'jun') {
            this.monthName = 'June';
            this.monthEvents = this.monEventService.getJunEvents();
        }
        if (this.monthComp === 'jul') {
            this.monthName = 'July';
            this.monthEvents = this.monEventService.getJulEvents();
        }
        if (this.monthComp === 'aug') {
            this.monthName = 'August';
            this.monthEvents = this.monEventService.getAugEvents();
        }
        if (this.monthComp === 'sep') {
            this.monthName = 'September';
            this.monthEvents = this.monEventService.getSepEvents();
        }
        if (this.monthComp === 'oct') {
            this.monthName = 'October';
            this.monthEvents = this.monEventService.getOctEvents();
        }
        if (this.monthComp === 'nov') {
            this.monthName = 'November';
            this.monthEvents = this.monEventService.getNovEvents();
        }
        if (this.monthComp === 'dec') {
            this.monthName = 'December';
            this.monthEvents = this.monEventService.getDecEvents();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('monthComp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LspcalmonthComponent.prototype, "monthComp", void 0);
    LspcalmonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lspcalmonth',
            template: __webpack_require__(/*! ./lspcalmonth.component.html */ "./src/app/components/lspcalmonth/lspcalmonth.component.html"),
            styles: [__webpack_require__(/*! ./lspcalmonth.component.css */ "./src/app/components/lspcalmonth/lspcalmonth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cal_data_service__WEBPACK_IMPORTED_MODULE_2__["CalDataService"]])
    ], LspcalmonthComponent);
    return LspcalmonthComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    border-bottom: #008ed6 3px solid;\r\n    opacity: 0.8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjMDA4ZWQ2IDNweCBzb2xpZDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark sticky-top\">  -->\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\n  <!-- <div class=\"container\">  -->\n  <a routerLink=\"home\" class=\"navbar-brand\">Landshark Park</a>\n  <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a routerLink=\"news\" class=\"nav-link px-4\">News</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"schedule\" class=\"nav-link px-4\">Schedule</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"results\" class=\"nav-link px-4\">Results</a>\n      </li>\n      <!-- \n        <li class=\"nav-item\">\n          <a routerLink=\"kd\" class=\"nav-link px-4\">Kentucky Derby</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"preakness\" class=\"nav-link px-4\">Preakness Stakes</a>\n        </li>\n      -->\n      <li class=\"nav-item\">\n        <a routerLink=\"saratoga\" class=\"nav-link px-4\">Saratoga 2019</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"about\" class=\"nav-link px-4\">About Site</a>\n      </li>\n    </ul>\n  </div>\n  <!-- </div>  -->\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\r\n    padding-top: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGZvdW5kIHtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\" class=\"container\">\n  <h1>404: Not Found</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/preak-ponies/preak-ponies.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/preak-ponies/preak-ponies.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv ul {\r\n    list-style: none;\r\n    /* margin: 0;  */\r\n    /* padding: 0; */\r\n    margin-right: 0em;\r\n    margin-left: 0em;\r\n    padding-right: 0em;\r\n    padding-left: 0em;\r\n\r\n}\r\n\r\n.horsecard {\r\n    border: 2px solid black;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.horseheader {\r\n    background-color: lightyellow;\r\n    color: black;\r\n}\r\n\r\n.horsename {\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.horsesubtitle {\r\n    padding-left: 1rem;\r\n    font-size: 1rem;    \r\n}\r\n\r\n.edesc {\r\n    padding-left: 1rem;\r\n    font-size: 0.9rem;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 5px;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.caldate {\r\n    border: 1px solid black;\r\n}\r\n\r\n.caldate h4 {\r\n    padding-left: 0.2rem;\r\n    background-color: lightgray;\r\n    color: navy;\r\n    font-weight: bold;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.egroup {\r\n    border: 1px solid gray;\r\n}\r\n\r\n.etitle {\r\n    padding-left: 0.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVhay1wb25pZXMvcHJlYWstcG9uaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVhay1wb25pZXMvcHJlYWstcG9uaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBtYXJnaW46IDA7ICAqL1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMGVtO1xyXG5cclxufVxyXG5cclxuLmhvcnNlY2FyZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5ob3JzZWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhvcnNlbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uaG9yc2VzdWJ0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07ICAgIFxyXG59XHJcblxyXG4uZWRlc2Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uY2FsZGF0ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uY2FsZGF0ZSBoNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbG9yOiBuYXZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uZWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5ldGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/preak-ponies/preak-ponies.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/preak-ponies/preak-ponies.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3 ml-2\">\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"postPositionList()\">\n    By Post Position\n  </button>\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"rankedPositionList()\">\n    By Landshark Park Ranking\n  </button>\n  <button class=\"btn btn-pill btn-info d-inline mr-3\" (click)=\"pointsPositionList()\">\n    By Kentucky Derby Points\n  </button>\n</div>\n<div class=\"row\">\n  <div *ngFor=\"let h of preakHorseList\" class=\"col-xs-12 col-md-6 col-lg-4 col-xl-3\">\n    <div class=\"card horsecard\">\n      <div class=\"card-header horseheader\">\n        <p class=\"horsename\">{{ h.name }}</p>\n        <div class=\"horsesubtitle\">\n          Preakness Stakes Post Position: {{ h.post }}\n        </div>\n        <div class=\"horsesubtitle\">Kentucky Derby Points: {{ h.kdpts }}</div>\n        <div class=\"horsesubtitle\">Landshark Park Rank: {{ h.lsprank }}</div>\n      </div>\n      <div class=\"card-body edesc\">\n        <div *ngIf=\"h.sire\">Sire: {{ h.sire }}</div>\n        <div *ngIf=\"h.jockey\">Jockey (Preakness Stakes): {{ h.jockey }}</div>\n        <div *ngIf=\"h.lrjockey\">Jockey (Last Race): {{ h.lrjockey }}</div>\n        <div *ngIf=\"h.trainer\">Trainer: {{ h.trainer }}</div>\n        <div *ngIf=\"h.lastrace\">Last Race: {{ h.lastrace }}</div>\n        <div *ngIf=\"h.nextrace\">Next Race: {{ h.nextrace }}</div>\n        <div *ngIf=\"h.comments\">Comments: {{ h.comments }}</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/preak-ponies/preak-ponies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/preak-ponies/preak-ponies.component.ts ***!
  \*******************************************************************/
/*! exports provided: PreakPoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreakPoniesComponent", function() { return PreakPoniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_preak_horses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/preak-horses.service */ "./src/app/services/preak-horses.service.ts");



var PreakPoniesComponent = /** @class */ (function () {
    function PreakPoniesComponent(horseListService) {
        this.horseListService = horseListService;
    }
    PreakPoniesComponent.prototype.ngOnInit = function () {
        this.preakHorseList = this.horseListService.getPreaknessHorses();
    };
    PreakPoniesComponent.prototype.postPositionList = function () {
        this.preakHorseList = this.horseListService.getPreaknessHorses();
    };
    PreakPoniesComponent.prototype.rankedPositionList = function () {
        this.preakHorseList = this.horseListService.getRankedPreaknessHorses();
    };
    PreakPoniesComponent.prototype.pointsPositionList = function () {
        this.preakHorseList = this.horseListService.getPointsPreaknessHorses();
    };
    PreakPoniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preak-ponies',
            template: __webpack_require__(/*! ./preak-ponies.component.html */ "./src/app/components/preak-ponies/preak-ponies.component.html"),
            styles: [__webpack_require__(/*! ./preak-ponies.component.css */ "./src/app/components/preak-ponies/preak-ponies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_preak_horses_service__WEBPACK_IMPORTED_MODULE_2__["PreakHorsesService"]])
    ], PreakPoniesComponent);
    return PreakPoniesComponent;
}());



/***/ }),

/***/ "./src/app/components/saratoga/saratoga.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/saratoga/saratoga.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#saratoga {\r\n    padding-top: 75px;\r\n    background-color: lightgray;\r\n    padding-left: 3em;\r\n    padding-bottom: 5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYXJhdG9nYS9zYXJhdG9nYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYXJhdG9nYS9zYXJhdG9nYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NhcmF0b2dhIHtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/saratoga/saratoga.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/saratoga/saratoga.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"saratoga\">\n  <h1>Saratoga 2019</h1>\n  <h3>\n    Page Under Construction!\n  </h3>\n  <p>\n    Landshark Park's first event - July 13th!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/saratoga/saratoga.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/saratoga/saratoga.component.ts ***!
  \***********************************************************/
/*! exports provided: SaratogaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaratogaComponent", function() { return SaratogaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SaratogaComponent = /** @class */ (function () {
    function SaratogaComponent() {
    }
    SaratogaComponent.prototype.ngOnInit = function () {
    };
    SaratogaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saratoga',
            template: __webpack_require__(/*! ./saratoga.component.html */ "./src/app/components/saratoga/saratoga.component.html"),
            styles: [__webpack_require__(/*! ./saratoga.component.css */ "./src/app/components/saratoga/saratoga.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SaratogaComponent);
    return SaratogaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n#home {\r\n    background-color: #ebebe0;\r\n    max-height: 100%;\r\n}\r\n*/\r\nbody {\r\n    /* background: #333; */\r\n    color: #fff;\r\n}\r\n.bgImg {\r\n    color: #fff;\r\n    background: url('lp-home.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 1000px;\r\n    font-weight: bold;\r\n}\r\n.dark-overly {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 1000px;\r\n}\r\n#home-section .home-inner {\r\n    padding-top: 100px;\r\n    /* background-color: rgba(0,0,0,0.7); */\r\n    min-height: 1000px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiNob21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZTA7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiovXHJcbmJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZDogIzMzMzsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmdJbWcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2xwLWhvbWUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXJrLW92ZXJseSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24gLmhvbWUtaW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOyAqL1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   <header id=\"home-section\" class=\"dark-overlay home-inner\">   -->\n<header id=\"home-section\" class=\"bgImg dark-overly\">\n\t<!-- <div class=\"dark-overlay home-inner\"> -->\n\t\t<div class=\"home-inner\"> \n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- <h1 class=\"display-4 pt-3\">Welcome to <strong>Landshark Park</strong>!</h1>  -->\n\t\t\t\t<div class=\"display-4 pt-3 text-center\"><strong>Welcome to Landshark Park!!!</strong></div>\n\t\t\t\t<hr>\n\t\t\t\t<p><strong>Landshark Park - </strong>Establish 2016, the year after American Pharaoh's Grand Slam Championship run.\n\t\t\t\t\tHorse racing at home is great for introverts and those who don't get out much. </p>\n\t\t\t\t<h2>A few general disclaimers: </h2>\n\t\t\t\t<p class=\"pl-4\">1. I am not a professional handicapper. Views and/or predictions expressed on this site are my own\n\t\t\t\t\tand should not be copied.</p>\n\t\t\t\t<p class=\"pl-4\">2. I view horse racing as entertainment - any money wagered is the \"cost of admission\" which I do\n\t\t\t\t\tnot expect any return on.</p>\n\t\t\t\t<p class=\"pl-4\">3. Any \"results\" on this site are not independently verified so I can make it look like I know what I'm doing. \n\t\t\t\t\t(I have a reputation to uphold.)</p>\n\t\t\t\t<p class=\"pl-4\">4. This site is intended for professional training purposes in JavaScript frontend frameworks like\n\t\t\t\t\tAngular, React and Vue.js.</p>\n\t\t\t</div>\n\t\t</div> \n\t<!-- </div>  -->\n</header>\n\n<script>\n\n</script>\n<!-- \n<div class=\"container-fluid\" id=\"home\">\n\t<h1 class=\"mt-3\">Welcome to Landshark Park!</h1>\n\t<hr>\n\t<p><strong>Landshark Park - </strong>Establish 2015, the same year as American Pharaoh's Grand Slam Championship run.\n\t\tHorse racing at home is a great time saver. I don't lose precious time travelling to the local track to lose money in\n\t\twaging. My waging results are not any better at home, but it generally is more comfortable to enjoy a horse racing\n\t\tcard. </p>\n\t<h2>A few general announcements: </h2>\n\t<p class=\"pl-4\">1. I am not a professional handicapper. Views and/or predictions expressed on this site are my own and\n\t\tshould not be copied.</p>\n\t<p class=\"pl-4\">2. I view horse racing as entertainment - any money wager is the \"cost of adminission\" which I do not\n\t\texpect any return on.</p>\n\t<p class=\"pl-4\">3. Any \"results\" on this site are not independently verified so I can make it look like I know how to\n\t\tpredict winners in horse races. (I have a reputation to uphold.)</p>\n\t<p class=\"pl-4\">4. This site is intended for professional training purposes in JavaScript frontend frameworks like\n\t\tAngular, React and Vue.js.</p>\n</div>\n\n-->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kd/kd.component.css":
/*!*************************************!*\
  !*** ./src/app/kd/kd.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#kd {\r\n    padding-top: 6rem;\r\n}\r\n\r\n.pageheader {\r\n    font-weight: bold;\r\n}\r\n\r\n.kdPageToolbar {\r\n    background-color: black;\r\n    padding: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2Qva2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAva2Qva2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNrZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxufVxyXG5cclxuLnBhZ2VoZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5rZFBhZ2VUb29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/kd/kd.component.html":
/*!**************************************!*\
  !*** ./src/app/kd/kd.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"kd\">\n  <div class=\"display-5 pageheader\">Kentucky Derby Page</div>\n  <hr />\n  <div class=\"btn-group btn-group-lg kdPageToolbar w-100\" role=\"group\">\n    <button\n      class=\"btn btn-pill btn-info d-inline mr-3\"\n      (click)=\"showKdDiv('showLinks')\"\n    >\n      Kentucky Derby Links\n    </button>\n    <button\n      class=\"btn btn-pill btn-info d-inline mr-3\"\n      (click)=\"showKdDiv('showRecap')\"\n    >\n      Prep Races Recap\n    </button>\n    <button\n      class=\"btn btn-pill btn-info d-inline\"\n      (click)=\"showKdDiv('showPreview')\"\n    >\n      Landshark Park Power Rankings\n    </button>\n  </div>\n  <hr />\n\n  <div class=\"tab-content\">\n    <div id=\"links\" [hidden]=\"!showLinks\">\n      <app-kd-links></app-kd-links>\n    </div>\n    <div id=\"blogRecap\" [hidden]=\"!showRecap\">\n      <app-kd-blog></app-kd-blog>\n    </div>\n    <div id=\"blogPreview\" [hidden]=\"!showPreview\">\n      <app-kd-preview></app-kd-preview>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/kd/kd.component.ts":
/*!************************************!*\
  !*** ./src/app/kd/kd.component.ts ***!
  \************************************/
/*! exports provided: KdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdComponent", function() { return KdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KdComponent = /** @class */ (function () {
    function KdComponent() {
    }
    KdComponent.prototype.ngOnInit = function () {
        this.showLinks = true;
        this.showRecap = false;
        this.showPreview = false;
    };
    KdComponent.prototype.showKdDiv = function (showKdDiv) {
        this.showLinks = false;
        this.showRecap = false;
        this.showPreview = false;
        if (showKdDiv === 'showLinks') {
            this.showLinks = true;
        }
        if (showKdDiv === 'showRecap') {
            this.showRecap = true;
        }
        if (showKdDiv === 'showPreview') {
            this.showPreview = true;
        }
    };
    KdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kd',
            template: __webpack_require__(/*! ./kd.component.html */ "./src/app/kd/kd.component.html"),
            styles: [__webpack_require__(/*! ./kd.component.css */ "./src/app/kd/kd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KdComponent);
    return KdComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#news {\r\n    padding-top: 75px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.pageheader {\r\n    font-weight: bold;\r\n}\r\n\r\n.monthcard {\r\n    border: 1.5px solid black;\r\n    margin-bottom: 5px;\r\n}\r\n\r\ndiv ul {\r\n    /* list-style: none; */\r\n    /* margin: 0;  */\r\n    /* padding: 0; */\r\n    margin-right: 0em;\r\n    margin-left: 0em;\r\n    padding-right: 0em;\r\n    padding-left: 0em;\r\n\r\n}\r\n\r\nli {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.card {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.newsdesc {\r\n    padding-left: 1rem;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnBhZ2VoZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tb250aGNhcmQge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuZGl2IHVsIHtcclxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXHJcbiAgICAvKiBtYXJnaW46IDA7ICAqL1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMGVtO1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLm5ld3NkZXNjIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"news\">\n  <div class=\"display-5 pageheader\">Landshark Park News Page</div>\n  <hr />\n  <div class=\"row mb-5\">\n    <div class=\"container-fluid col-md-6 col-lg-4\">\n      <a class=\"twitter-timeline\" data-width=\"500\" data-height=\"1000\" data-theme=\"dark\"\n        href=\"https://twitter.com/landsharkpark\">\n        Tweets by landsharkpark</a>\n    </div>\n    <div class=\"col-xs-12 col-md-6 col-lg-8\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>July 5, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Belmont's Stars and Stripes Preview</h3>\n              <p>\n                Good day everyone - hope you had a wonderful Fourth of July holiday and are having a good summer.  Things have \n                been a little quiet around Landshark Park the past couple weeks.  A couple of the older computers had their \n                Operating Systems upgraded from Windows 7 to Windows 10.  This should make the handicapper's experience...  Ah, \n                who am I trying to kid?  I'm too cheap to buy new computers that I only use a few hours a week to place some \n                bets.  Windows 10 will provide security updates past January 2020, so that should extend the life of those machines.\n              </p>\n              <p>\n                This is the final weekend of the Spring 2019 Belmont season.  Saturday is the \"Stars and Stripes\" day, which features \n                a few graded stakes races including the $700K Suburban, $750K Belmont Oaks and the $1 million Belmont Derby. My early picks:\n              </p>\n              <ul>\n                <li>Suburban Stakes - Catholic Boy</li>\n                <li>Belmont Oaks - Concreate Rose</li>\n                <li>Belmont Derby - Digital Age</li>\n              </ul> \n              <p>\n                Iowa Oaks, Iowa Derby and Prairie Meadows Cornhusker H. Stakes races are tonight down in Altoona, Iowa.  I looked for these \n                races earlier, but didn't find out the date until this afternoon.  Too late to leave now with the holiday extra law enforcement \n                on the roads...  D@M%^$&T!!!  Oh well, I will \"remotely\" participate in tonight's Festivities.\n              </p>\n              <p>\n                <strong>Landshark Park's Saratoga 2019 Update</strong>\n                <br>\n                After Belmont's Sunday card, things move north where Saratoga's 2019 season will begin the following weekend.  Always great \n                cards at Saratoga - hopefully rain doesn't throw off so many turf races like last year.\n              </p>\n              <p>\n                I'm working on a way to collect some simple data for Saratoga's 2019 races.  I say simple, because I don't want to spend \n                all of my time gathering/entering data.  It won't be anything too extensive, but the challenge of generating reports and \n                getting those results out in some sounds fun.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>June 23, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Grandma Dee's 96th Birthday</h3>\n              <p>\n                Sunday was a nice family get together to celebrate Grandma Dee's upcoming 96th birthday. Brian and Molly\n                did a wonderful job hosting the star-studded event. Rain pretty much held off, kids were able to swin\n                the lake. Good time had by all.\n              </p>\n              <p>\n                Rumor is warmer, more \"summer like\" weather moving into Minnesota this week. Not sure how I feel about that.  \n                I like the idea of warmer weather, but the past couple months have been pretty good.\n              </p>\n              <p>\n                A very early \"Happy Fourth of July\" holiday greeting to everyone out there. <strong>U.S.A! U.S.A! U.S.A!</strong> \n                I was planning to go up to Quebec for the weekend, but received a better offer to go to Chippewa Falls instead. \n                Whatever you do - Stay safe, don't drink and drive.\n              </p>\n              <p>\n                <strong>Landshark Park Horse Racing Update</strong>\n              </p>\n              <p>\n                Attempted to play the Monmouth Park card yesterday. I had two good picks yesterday, but could not match\n                up with any other horses in the Pick 3 or Exacta bets. Excited for the upcoming Saratoga season starting\n                July 11th.\n              </p>\n              <p>\n                Facility note:  Two computers in Landshark Park will turn 10 years old later this year.  These computers are \n                running on Windows 7 operating system, which will lose Microsoft support on January 14, 2020.  Landshark Park's \n                board will meet next month to review FY 2020 capital budget for possible replacement of one or both computers.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>June 13, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Belmont Stakes and Stanley Cup Champions</h3>\n              <p>\n                2019 Belmont Stakes lacked the enthusiasm of past years. The DQ at Kentucky Derby, no names in\n                Preaakness Stakes and so on.\n                But the lack of excitement in the Belmont Stakes did not deminish Belmont Festivities over the weekend.\n                Great races during\n                Friday and Saturday. Favorite race - the Met Mile. The Met Mile lived up to its billing. Mitole proved\n                to be the best - what\n                a horse (at one turn and maximum distance of one mile).\n              </p>\n              <p>\n                The 2018-19 NHL hockey season finally ended last night. Awesome final series between Boston and St.\n                Louis.\n                I knew it since the playoffs started that || INSERT_WINNING_TEAM_HERE BEFORE PUBLISHIING!!! || would win\n                the cup.\n                However the || INSERT_LOSING_TEAM_HERE BEFORE PUBLISHING!!! || did surprise me with their playoff run.\n                But seriously - the Stanley Cup playoff games are always amazing. Fun to see Boston and St. Louis power\n                through\n                the playoffs all the way through game seven.\n              </p>\n              <p>\n                MLB - After last weekend's action, the Minnesota Twins, Milwaukee Brewers and Atlanta Braves were all in\n                first place. We all\n                know this league is fixed, so it is just a matter of time before the big market/big money teams over\n                power them. But for now it\n                is fun to see these teams play as well as they have been.\n              </p>\n              <p>\n                I'm taking a short horse racing break until the Saratoga Race Course opens (July 11th). Maybe a quick\n                half card here or there.\n                Probably will catch a couple live racing cards at Canterbury Park this summer. Got to be honest - CBY is\n                not my favorite venue,\n                but not the worst option. Live racing is the best - always great to be a part of the crowd.\n              </p>\n              <p>\n                Until Friday, get outside and play. Have fun!!!\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>May 12, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">On to the Preakness Stakes</h3>\n              <p>\n                A lot of controversy regarding the disqualification of Maximum Security in the Kentucky Derby. The\n                judges decision stands, so\n                we all have to live with it. There is some talk of a rematch among horse racing fans. But the real race\n                everyone is looking\n                forward to is a match up between Maximum Security versus Omaha Beach. Maybe the Travers Stakes at\n                Saratoga?\n              </p>\n              <p>\n                2019 Preakness Stakes race looks like a second class division compared to the enteries in the Kentucky\n                Derby and likely probables for\n                Belmont Stakes. But the undercard races are good. Hopefully the weather holds up in Baltimore - I thnk\n                the last three years there was\n                rain that affected races.\n              </p>\n              <p>\n                My early Preakness Stakes rankings are out there. I'm not sure of all the jockeys yet. Post position\n                draw will be this week. Those\n                are factors that may affect my final rankings before the race.\n              </p>\n              <p>\n                Until Friday, get outside and play. Have fun!!!\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Apr. 7, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Not Many Winners, But BIG Winners</h3>\n              <p>\n                Yesterday's Kentucky Derby Championship races separated some potential top contenders for the first\n                Saturday in May.\n                The other races on the racing cards still are throwing in long shot winners that are busting Pick 3, 4,\n                5 and well, doesn't\n                matter - Pick 1 and DONE, thanks for playing. Keeneland\n              </p>\n              <p>\n              </p>\n              <p>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Mar. 31, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Will a leader emerge?</h3>\n              <p>\n                Oh my, the Kentucky Derby appears to be wide open this year. Post\n                position draw is important every year, but seams likely to be\n                the biggest factor for this year's race.\n              </p>\n              <p>\n                Yesterday's Florida Derby is an example of 2019 prep races. I was focused on\n                three horses from the Fountain of Youth race, and the winner of the Holy Bull race\n                to see if one of those horses would emerge as a Kentucky Derby front runner. These four\n                horses finished third, fourth, sixth and eighth in an eleven horse field. The winner was\n                out of a madien race, and only third lifetime start. The second place horse was 72-1\n                odds.\n              </p>\n              <p>\n                Next weekend there are three prep races on the schedule. Game Winner, Improbable and Instaagrand\n                should all be racing on Saturday. Other horses will have their chance. Will be fun, but\n                likely painful if I spend too much time looking at losing tickets.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Mar. 16, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Oaklawn Rebel Stakes</h3>\n              <p>\n                With the cancellation of San Anita San Felipe race, some\n                California horses were sent out to Arkansas for the Rebel Stakes\n                race. This presented a field of 19 horses, so Oaklawn Park split\n                the race into two fields (Division 1 and Division 2).\n              </p>\n              <p>\n                Since the field was split into two divisions, Kentucky Derby\n                qualification points were adjusted to 75% of what was originally\n                agreed upon. Instead of one race with 50-20-10-5 points, both\n                Div 1 and Div 2 races would award 37.5-15-7.5-3.75 points for\n                first, second, third and fourth place finishers.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Mar. 8, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Saturday's Schedule (3/9)</h3>\n              <p>\n                Minnesota weather forecast is another bad weather weekend, so I\n                have to stay home and watch horse racing. Doesn't look like\n                there will be racing at Santa Anita, which I'm happy to see\n                until they get the safety problems worked out. Although\n                <strong>Game Winner</strong> and\n                <strong>Improbable</strong> were scheduled to run in the San\n                Felipe Stakes, which are two early contenders for this year's\n                Kentucky Derby. Fortunately there are good cards at Aqueduct\n                (Gotham) and Tampa Bay Downs (Tampa Bay Derby) so the day will\n                not be wasted.\n              </p>\n              <div>\n                Landshark Park Saturday Notes:\n                <ul>\n                  <li>\n                    Early Morning - 12 furlong work (weather permitting),\n                    followed by a morning nap.\n                  </li>\n                  <li>\n                    Lunch - Big burger at local restaurant, or something from\n                    fridge (weather permitting for my pre-race celebrity\n                    appearance at a local dining establishment).\n                  </li>\n                  <li>\n                    Primary TV - TVG\n                  </li>\n                  <li>\n                    Secondary TV - Aqueduct\n                  </li>\n                  <li>\n                    Overall Handicapping Predictions - Going to be tough...\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Feb. 22, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Happy Birthday Silver Charm!!!</h3>\n              <p>\n                <strong>Silver Charm</strong>, the 1997 winner of the Kentucky\n                Derby and Preakness Stakes turned 25 today.\n                <strong>Silver Charm</strong> kept racing after his three year\n                old campaign, which included winning the 1998 Dubai World Cup.\n                In 2007, <strong>Silver Charm</strong> was inducted into the\n                United States Racing Hall of Fame.\n              </p>\n              <p>\n                <strong>Silver Charm</strong> greatest honor was in the spring\n                of 2016. I had just bought a new Chevy Cruise. This fine, luxury\n                vehicle was named after this great horse, and has since been\n                referred to as <strong>Silver Charm</strong>.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Feb. 18, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Special Holiday Racing!!!</h3>\n              <p>\n                I will play the Oaklawn Park card today. This includes the\n                Southwest Stakes race, which is a Kentucky Derby prep race. I am\n                interested to see how <strong>Gray Attempt</strong> and\n                <strong>Long Range Toddy</strong> respond after their last race\n                (Smarty Jones - 1/25).\n              </p>\n              <p>\n                Update (after race): <strong>Gray Attempt</strong> didn't handle\n                the extra distance well - faded down the final stretch to finish\n                last. <strong>Long Range Toddy</strong> finished a solid third.\n                Good race, but hasn't shown enough to win the big races yet.\n                <strong>Super Steed</strong>, the second highest long shot at\n                62-1 ended up winning the race. I thought eight of horses had a\n                legitimate shot to win the race, but\n                <strong>Super Steed</strong> wasn't one of them.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Feb. 2, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">American Pharoah's Birthday!!!</h3>\n              <p>\n                American Pharoah, the 12th Triple Crown winner in history and\n                the only horse to win the Grand Slam turned seven years old\n                today.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Jan. 26, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">\n                Pegasus World Cup 2019 - Gulfstream Park\n              </h3>\n              <p>\n                Seven stake races including the $7 million Pegasus World Cup\n                Turf and the $9 million Pegasus World Cup.\n              </p>\n              <p>\n                Should be a good day to take in the races. NBC Sports coverage\n                begins at 3:30pm Central Standard Time.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-lg-6 col-xl-4\">\n          <div class=\"card monthcard\">\n            <div class=\"card-header bg-primary text-light\">\n              <h1>Jan. 24, 2019</h1>\n            </div>\n            <div class=\"card-body bg-light newsdesc\">\n              <h3 class=\"text-dark\">Justify wins 2018 Horse of the Year</h3>\n              <p>\n                Triple Crown winner <strong>Justify</strong> won the 2018 Horse\n                of the Year trophy at the Eclipse Awards.\n              </p>\n              <p>\n                I would have liked to seen <strong>Justify</strong> continue\n                racing through Breeders' Cup, but that wasn't meant to be.\n                <strong>Justify</strong> retired with an undefeated record,\n                including breaking the be 136-year-old Apollo Curse.\n              </p>\n              <p>\n                There really shouldn't have been any serious discussion about\n                other horses winning the 2018 Horse of the Year award. But I\n                will mention two other horses that did have great years.\n              </p>\n              <p>\n                <strong>Accelerate</strong> - Great year with winning six out of\n                seven Graded Stakes races. However\n                <strong>Accelerate</strong> did not compete in either Pegasus\n                World Cup 2018 or Dubai World Cup 2018.\n              </p>\n              <p>\n                <strong>Gun Runner</strong> - only ran once in 2018, winning the\n                Pegasus World Cup 2018 before retiring.\n                <strong>Gun Runner</strong> kept getting better throughout his\n                career, including winning his last five races (all G1 stakes\n                races). <strong>Gun Runner</strong> won seven of his last eight\n                races, with Only a second place finish to\n                <strong>Arrogate</strong> in the Dubai World Cup 2017 prevented\n                <strong>Gun Runner</strong> from winning his last eight races.\n                <strong>Gun Runner</strong> went out as champ - what a career,\n                what a horse. Best wishes to <strong>Gun Runner</strong> in a\n                happy retirement!!!\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(_router) {
        this._router = _router;
        this.initTwitterWidget();
    }
    NewsComponent.prototype.ngOnInit = function () {
        window.twttr.widgets.load();
    };
    NewsComponent.prototype.initTwitterWidget = function () {
        this.twitter = this._router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.twttr = (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                    if (d.getElementById(id))
                        return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };
                    return t;
                }(document, "script", "twitter-wjs"));
                if (window.twttr.ready())
                    window.twttr.widgets.load();
            }
        });
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.twitter.unsubscribe();
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/preakness/preakness.component.css":
/*!***************************************************!*\
  !*** ./src/app/preakness/preakness.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#preakness {\r\n    padding-top: 6rem;\r\n}\r\n\r\n.pageheader {\r\n    font-weight: bold;\r\n}\r\n\r\n.psPageToolbar {\r\n    background-color: black;\r\n    padding: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlYWtuZXNzL3ByZWFrbmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcmVha25lc3MvcHJlYWtuZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJlYWtuZXNzIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ucGFnZWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBzUGFnZVRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/preakness/preakness.component.html":
/*!****************************************************!*\
  !*** ./src/app/preakness/preakness.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"preakness\">\n  <div class=\"display-4 pageheader\">Preakness Stakes Page</div>\n  <hr />\n  <h1>Landshark Park's Top Preakness Stakes Contenders List</h1>\n  <p>Last update:  5/15/2019 - after Post Position draw.</p>\n  <app-preak-ponies></app-preak-ponies>\n</div>\n"

/***/ }),

/***/ "./src/app/preakness/preakness.component.ts":
/*!**************************************************!*\
  !*** ./src/app/preakness/preakness.component.ts ***!
  \**************************************************/
/*! exports provided: PreaknessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreaknessComponent", function() { return PreaknessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreaknessComponent = /** @class */ (function () {
    function PreaknessComponent() {
    }
    PreaknessComponent.prototype.ngOnInit = function () {
    };
    PreaknessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preakness',
            template: __webpack_require__(/*! ./preakness.component.html */ "./src/app/preakness/preakness.component.html"),
            styles: [__webpack_require__(/*! ./preakness.component.css */ "./src/app/preakness/preakness.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreaknessComponent);
    return PreaknessComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#results {\r\n    padding-top: 75px;\r\n}\r\n\r\n.pageheader {\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXN1bHRzIHtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4ucGFnZWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"results\">\n  <div class=\"display-5 pageheader\">Results Page</div>\n  <hr>\n  <p>All Winning Tickets!!!</p>\n</div>"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#schedule {\r\n    padding-top: 75px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.pageheader {\r\n  font-weight: bold;\r\n}\r\n\r\ndiv ul {\r\n    list-style: none;\r\n}\r\n\r\n.cal {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n  }\r\n\r\n/* Style the buttons inside the tab */\r\n\r\n.cal button {\r\n    /* background-color: inherit; */\r\n    background-color: navy;\r\n    color: silver;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    margin: 3px;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n  }\r\n\r\n/* Change background color of buttons on hover */\r\n\r\n.cal button:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n/* Create an active/current tablink class */\r\n\r\n.cal button.showQtr {\r\n    background-color: #ccc;\r\n    color: black;\r\n  }\r\n\r\n.cal button.hideQtr {\r\n    background-color:navy;\r\n    color: silver;\r\n  }\r\n\r\n.calcontent {\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n    -webkit-animation: fadeEffect 5s;\r\n            animation: fadeEffect 5s; \r\n  }\r\n\r\n/* Style the tab content */\r\n\r\n/* Fading effect takes 1 second */\r\n\r\n/*\r\n  .tabcontent {\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n  }\r\n  .tabcontent {\r\n    animation: fadeEffect 1s; \r\n  }\r\n  */\r\n\r\n/* Go from zero to full opacity */\r\n\r\n/*\r\n  @keyframes fadeEffect {\r\n    from {opacity: 0;}\r\n    to {opacity: 1;}\r\n  }\r\n  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQjs7QUFDQSxxQ0FBcUM7O0FBQ3JDO0lBQ0UsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBQ0EsZ0RBQWdEOztBQUNoRDtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBQ0EsMkNBQTJDOztBQUM3QztJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7QUFHQSwwQkFBMEI7O0FBQzFCLGlDQUFpQzs7QUFDakM7Ozs7Ozs7OztHQVNDOztBQUNELGlDQUFpQzs7QUFDakM7Ozs7O0dBS0MiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjaGVkdWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ucGFnZWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmRpdiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY2FsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuICAuY2FsIGJ1dHRvbiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cclxuICAuY2FsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAvKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xyXG4uY2FsIGJ1dHRvbi5zaG93UXRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuLmNhbCBidXR0b24uaGlkZVF0ciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5hdnk7XHJcbiAgICBjb2xvcjogc2lsdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNhbGNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUVmZmVjdCA1czsgXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcbiAgLyogRmFkaW5nIGVmZmVjdCB0YWtlcyAxIHNlY29uZCAqL1xyXG4gIC8qXHJcbiAgLnRhYmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICB9XHJcbiAgLnRhYmNvbnRlbnQge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlRWZmZWN0IDFzOyBcclxuICB9XHJcbiAgKi9cclxuICAvKiBHbyBmcm9tIHplcm8gdG8gZnVsbCBvcGFjaXR5ICovXHJcbiAgLypcclxuICBAa2V5ZnJhbWVzIGZhZGVFZmZlY3Qge1xyXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XHJcbiAgICB0byB7b3BhY2l0eTogMTt9XHJcbiAgfVxyXG4gICovIl19 */"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"schedule\">\n  <div class=\"display-5 pageheader\">Schedule Page</div>\n  <hr />\n\n  <div class=\"container-fluid\">\n    <div class=\"row mx-2 align-center\" style=\"height:auto;\">\n      <div\n        class=\"text-light col-xs-12\"\n        style=\"width:100%; border:1px solid #333;background-color:#003366;\"\n      >\n        <button class=\"btn btn-light tablinks ml-2 my-3\" (click)=\"showPageNotes()\">\n          <span *ngIf=\"showSchedNotes\">Hide Page Notes <i class=\"fa fa-minus pl-2\"></i></span>\n          <span *ngIf=\"!showSchedNotes\">Show Page Notes<i class=\"fa fa-plus pl-2\"></i></span>\n        </button>\n        <div id=\"pageNotes\" [hidden]=\"!showSchedNotes\">\n          <h3 class=\"pl-0\">Landshark Park Schedule Notes:</h3>\n          <p class=\"pl-4\">\n            1. Click on Quarter tab to display or hide events for those months.\n          </p>\n          <p class=\"pl-4\">\n            2. Races denoted with <i class=\"fa fa-check pr-2\"></i> are Kentucky\n            Derby Prep Races. Points for 1st, 2nd, 3rd and 4th place finishers are\n            also included.\n          </p>\n          <p class=\"pl-4\">\n            3. Tentative Schedule - subject to change without notice.\n          </p>\n          <p class=\"pl-4\">\n            4. I'm only listing events that I know of and are of interest to me.\n          </p>\n          </div>\n      </div>\n      \n      <div class=\"cal w-100 my-3 py-2\">\n        <button class=\"btn ml-2\" (click)=\"showQtr('q1')\" [ngClass]=\"{ 'showQtr': showQ1, 'hideQtr': !showQ1}\">\n          Q1: Jan-Mar\n          <span *ngIf=\"showQ1\">[hide <i class=\"fa fa-minus\"></i>]</span>\n          <span *ngIf=\"!showQ1\">[show <i class=\"fa fa-plus\"></i>]</span>\n        </button>\n        <button class=\"cal btn mx-2\" (click)=\"showQtr('q2')\" [ngClass]=\"{ 'showQtr': showQ2, 'hideQtr': !showQ2}\">\n          Q2: Apr-Jun\n          <span *ngIf=\"showQ2\">[hide <i class=\"fa fa-minus\"></i>]</span>\n          <span *ngIf=\"!showQ2\">[show <i class=\"fa fa-plus\"></i>]</span>\n        </button>\n        <button class=\"cal btn mx-2\" (click)=\"showQtr('q3')\" [ngClass]=\"{ 'showQtr': showQ3, 'hideQtr': !showQ3}\">\n          Q3: Jul-Sep\n          <span *ngIf=\"showQ3\">[hide <i class=\"fa fa-minus\"></i>]</span>\n          <span *ngIf=\"!showQ3\">[show <i class=\"fa fa-plus\"></i>]</span>\n        </button>\n        <button class=\"cal btn mr-2\" (click)=\"showQtr('q4')\" [ngClass]=\"{ 'showQtr': showQ4, 'hideQtr': !showQ4}\">\n          Q4: Oct-Dec\n          <span *ngIf=\"showQ4\">[hide <i class=\"fa fa-minus\"></i>]</span>\n          <span *ngIf=\"!showQ4\">[show <i class=\"fa fa-plus\"></i>]</span>\n        </button>\n      </div>\n\n      <div class=\"w-100 mb-5\">\n        <div id=\"qtr1\" class=\"tabcontent\" [hidden]=\"!showQ1\">\n          <h3 class=\"my-3\">Q1: Jan - Mar</h3>\n          <div class=\"row\">\n            <app-lspcalmonth [monthComp]=\"months[0]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[1]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[2]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n          </div>\n        </div>\n        <div id=\"qtr2\" class=\"tabcontent\" [hidden]=\"!showQ2\">\n          <h3 class=\"my-3\">Q2: Apr - Jun</h3>\n          <div class=\"row\">\n            <app-lspcalmonth [monthComp]=\"months[3]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[4]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[5]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n          </div>\n        </div>\n        <div id=\"qtr3\" class=\"tabcontent\" [hidden]=\"!showQ3\">\n          <h3 class=\"my-3\">Q3: Jul - Sep</h3>\n          <div class=\"row\">\n            <app-lspcalmonth [monthComp]=\"months[6]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[7]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[8]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n          </div>\n        </div>\n        <div id=\"qtr4\" class=\"tabcontent\" [hidden]=\"!showQ4\">\n          <h3 class=\"my-3\">Q4: Oct - Dec</h3>\n          <div class=\"row\">\n            <app-lspcalmonth [monthComp]=\"months[9]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[10]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n            <app-lspcalmonth [monthComp]=\"months[11]\" class=\"col-xs-12 col-lg-4\"></app-lspcalmonth>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.months = [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun',
            'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
        ];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.showSchedNotes = false;
        this.showQ1 = false;
        this.showQ2 = true;
        this.showQ3 = false;
        this.showQ4 = false;
    };
    ScheduleComponent.prototype.showPageNotes = function () {
        this.showSchedNotes = !this.showSchedNotes;
    };
    ScheduleComponent.prototype.showQtr = function (showQtr) {
        if (showQtr === 'q1') {
            this.showQ1 = !this.showQ1;
        }
        if (showQtr === 'q2') {
            this.showQ2 = !this.showQ2;
        }
        if (showQtr === 'q3') {
            this.showQ3 = !this.showQ3;
        }
        if (showQtr === 'q4') {
            this.showQ4 = !this.showQ4;
        }
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/services/cal-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cal-data.service.ts ***!
  \**********************************************/
/*! exports provided: CalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalDataService", function() { return CalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalDataService = /** @class */ (function () {
    function CalDataService() {
        this.janEvents = [
            {
                month: 'jan',
                date: '1/5/2019',
                race: [
                    {
                        trackLoc: 'Santa Anita Park',
                        raceName: 'Sham',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    }
                ]
            },
            {
                month: 'jan',
                date: '1/26/2019',
                race: [
                    {
                        trackLoc: 'Gulfstream Park',
                        raceName: 'Pegasus World Cup'
                    }
                ]
            }
        ];
        this.febEvents = [
            {
                month: 'feb',
                date: '2/2/2019',
                race: [
                    {
                        trackLoc: 'Aqueduct',
                        raceName: 'Withers',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    },
                    {
                        trackLoc: 'Gulfstream Park',
                        raceName: 'Holy Bull',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    },
                    {
                        trackLoc: 'Santa Anita Park',
                        raceName: 'Robert B. Lewis',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    }
                ]
            },
            {
                month: 'feb',
                date: '2/9/2019',
                race: [
                    {
                        trackLoc: 'Tampa Bay Downs',
                        raceName: 'Sam F. Davis',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    }
                ]
            },
            {
                month: 'feb',
                date: '2/16/2019',
                race: [
                    {
                        trackLoc: 'Fair Grounds',
                        raceName: 'Risen Star',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(50-20-10-5)'
                        }
                    },
                    {
                        trackLoc: 'Golden Gate Fields',
                        raceName: 'El Camino Real Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    }
                ]
            },
            {
                month: 'feb',
                date: '2/18/2019',
                race: [
                    {
                        trackLoc: 'Oaklawn Park',
                        raceName: 'Southwest',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(10-4-2-1)'
                        }
                    }
                ]
            }
        ];
        this.marEvents = [
            {
                month: 'mar',
                date: '3/2/2019',
                race: [
                    {
                        trackLoc: 'Gulfstream Park',
                        raceName: 'Fountain of Youth',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(50-20-10-5)'
                        }
                    }
                ]
            },
            {
                month: 'mar',
                date: '3/9/2019',
                race: [
                    {
                        trackLoc: 'Aqueduct',
                        raceName: 'Gotham',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(50-20-10-5)'
                        }
                    },
                    {
                        trackLoc: 'Tampa Bay Downs',
                        raceName: 'Tampa Bay Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(50-20-10-5)'
                        }
                    },
                    {
                        trackLoc: 'Turfway Park',
                        raceName: 'Jeff Ruby Stakes',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(20-8-4-2)'
                        }
                    }
                ]
            },
            {
                month: 'mar',
                date: '3/16/2019',
                race: [
                    {
                        trackLoc: 'Oaklawn Park',
                        raceName: 'Rebel - Division 1',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(37.5-15-7.5-3.75)'
                        }
                    },
                    {
                        trackLoc: 'Oaklawn Park',
                        raceName: 'Rebel - Division 2',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(37.5-15-7.5-3.75)'
                        }
                    }
                ]
            },
            {
                month: 'mar',
                date: '3/23/2019',
                race: [
                    {
                        trackLoc: 'Fair Grounds',
                        raceName: 'Louisiana Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    }
                ]
            },
            {
                month: 'mar',
                date: '3/24/2019',
                race: [
                    {
                        trackLoc: 'Sunland Park',
                        raceName: 'Sunland Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(50-20-10-5)'
                        }
                    }
                ]
            },
            {
                month: 'mar',
                date: '3/30/2019',
                race: [
                    {
                        trackLoc: 'Meydan Racecourse',
                        raceName: 'UAE Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    },
                    {
                        trackLoc: 'Gulfstream Park',
                        raceName: 'Florida Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    }
                ]
            },
        ];
        this.aprEvents = [
            {
                month: 'apr',
                date: '4/6/2019',
                race: [
                    {
                        trackLoc: 'Aqueduct',
                        raceName: 'Wood Memorial',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    },
                    {
                        trackLoc: 'Keeneland',
                        raceName: 'Blue Grass',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    },
                    {
                        trackLoc: 'Santa Anita Park',
                        raceName: 'Santa Anita Derby',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    }
                ]
            },
            {
                month: 'apr',
                date: '4/13/2019',
                race: [
                    {
                        trackLoc: 'Keeneland',
                        raceName: 'Lexington',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(20-8-4-2)'
                        }
                    },
                    {
                        trackLoc: 'Oaklawn Park',
                        raceName: 'Arkansas',
                        kentuckyDerby: {
                            isPrepRace: true,
                            kdPoints: '(100-40-20-10)'
                        }
                    }
                ]
            }
        ];
        this.mayEvents = [
            {
                month: 'may',
                date: '5/4/2019',
                race: [
                    {
                        trackLoc: 'Churchill Downs',
                        raceName: 'Kentucky Derby'
                    }
                ]
            },
            {
                month: 'may',
                date: '5/18/2019',
                race: [
                    {
                        trackLoc: 'Pimlico Racecourse',
                        raceName: 'Preakness Stakes'
                    }
                ]
            }
        ];
        this.junEvents = [
            {
                month: 'jun',
                date: '6/8/2019',
                race: [
                    {
                        trackLoc: 'Belmont Park',
                        raceName: 'Belmont Stakes'
                    }
                ]
            },
            {
                month: 'jun',
                date: '6/23/2019',
                race: [
                    {
                        trackLoc: 'Not Horse Racing',
                        raceName: 'Grandma Dee Birthday Party!!!'
                    }
                ]
            }
        ];
        this.julEvents = [
            {
                month: 'jul',
                date: '7/11/2019',
                race: [
                    {
                        trackLoc: 'Saratoga Race Course',
                        raceName: 'Opening Day'
                    }
                ]
            },
            {
                month: 'jul',
                date: '7/20/2019',
                race: [
                    {
                        trackLoc: 'Monmouth Park',
                        raceName: 'Haskell Invitational'
                    }
                ]
            }
        ];
        this.augEvents = [
            {
                month: 'aug',
                date: '8/24/2019',
                race: [
                    {
                        trackLoc: 'Saratoga Race Course',
                        raceName: 'Travers Stakes'
                    }
                ]
            }
        ];
        this.sepEvents = [];
        this.octEvents = [];
        this.novEvents = [
            {
                month: 'nov',
                date: '11/1/2019 - 11/2/2019',
                race: [
                    {
                        trackLoc: 'Santa Anita Park',
                        raceName: "Breeder's Cup Weekend"
                    }
                ]
            }
        ];
        this.decEvents = [];
    }
    CalDataService.prototype.getJanEvents = function () {
        return this.janEvents;
    };
    CalDataService.prototype.getFebEvents = function () {
        return this.febEvents;
    };
    CalDataService.prototype.getMarEvents = function () {
        return this.marEvents;
    };
    CalDataService.prototype.getAprEvents = function () {
        return this.aprEvents;
    };
    CalDataService.prototype.getMayEvents = function () {
        return this.mayEvents;
    };
    CalDataService.prototype.getJunEvents = function () {
        return this.junEvents;
    };
    CalDataService.prototype.getJulEvents = function () {
        return this.julEvents;
    };
    CalDataService.prototype.getAugEvents = function () {
        return this.augEvents;
    };
    CalDataService.prototype.getSepEvents = function () {
        return this.sepEvents;
    };
    CalDataService.prototype.getOctEvents = function () {
        return this.octEvents;
    };
    CalDataService.prototype.getNovEvents = function () {
        return this.novEvents;
    };
    CalDataService.prototype.getDecEvents = function () {
        return this.decEvents;
    };
    CalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalDataService);
    return CalDataService;
}());



/***/ }),

/***/ "./src/app/services/kd-horses.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/kd-horses.service.ts ***!
  \***********************************************/
/*! exports provided: KdHorsesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdHorsesService", function() { return KdHorsesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KdHorsesService = /** @class */ (function () {
    function KdHorsesService() {
        this.kdHorses = [
            {
                name: 'War of Will',
                kdpost: 1,
                lsprank: 6,
                kdpts: 60,
                sire: 'War Front',
                kdjockey: 'Tyler Gaffalione',
                lrjockey: 'Tyler Gaffalione',
                trainer: 'Mark Casse',
                lastrace: '3/23/2019 (Louisiana Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Disappointing ninth place finish in Louisiana Derby.  From rail post, he will need a great start to be a factor in the Kentucky Derby.'
            },
            {
                name: 'Tax',
                kdpost: 2,
                lsprank: 7,
                kdpts: 52,
                sire: 'Arch',
                kdjockey: 'Junior Alvarado',
                lrjockey: 'Junior Alvarado',
                trainer: 'Danny Gargan',
                lastrace: '4/6/2019 (Wood Memorial)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Won the Withers Stakes race, then finished second in the Wood Memorial.'
            },
            {
                name: 'By My Standards',
                kdpost: 3,
                lsprank: 10,
                kdpts: 100,
                sire: 'Goldencents',
                kdjockey: 'Gabriel Saez',
                lrjockey: 'Gabriel Saez',
                trainer: 'William Calhoun',
                lastrace: '3/23/2019 (Louisiana Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: '23-1 long shot winner of Louisiana Derby.  Saez with a nice trip and strong finish.'
            },
            {
                name: 'Gray Magician',
                kdpost: 4,
                lsprank: 18,
                kdpts: 41,
                sire: 'Graydar',
                kdjockey: 'Drayden Van Dyke',
                lrjockey: 'Joel Rosario',
                trainer: 'Peter Miller',
                lastrace: '3/30/2019 (UAE Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Nice second place in Southwest, but faded to finish third in Louisiana Derby.  Probably needs a few more points to qualify.'
            },
            {
                name: 'Improbable',
                kdpost: 5,
                lsprank: 2,
                kdpts: 65,
                sire: 'City Zip',
                kdjockey: 'Irad Ortiz Jr.',
                lrjockey: 'Jose Ortiz',
                trainer: 'Bob Baffert',
                lastrace: '4/13/2019 (Arkansas Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'This goofball may end up being my pick moments before the start of the race.  Discipline problems, but has a lot of talent.  Second place finishes in the Rebel Division 2 and Arkansas Derby races.  Excuses in both races, but a needs a little more improvement to win.'
            },
            {
                name: 'Vekoma',
                kdpost: 5,
                lsprank: 4,
                kdpts: 110,
                sire: 'Candy Ride',
                kdjockey: 'Javier Castellano',
                lrjockey: 'Javier Castellano',
                trainer: 'George Weaver',
                lastrace: '4/6/2019 (Blue Grass)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Easily beat the field from the outside post in the rain.  Needs more points to get in.'
            },
            {
                name: 'Maximum Security',
                kdpost: 7,
                lsprank: 3,
                kdpts: 100,
                sire: 'New Year Day',
                kdjockey: 'Luis Saez',
                lrjockey: 'Luis Saez',
                trainer: 'Jason Servis',
                lastrace: '3/30/2019 (Florida Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Lightly raced, but a ton of speed.  He could wire the field with a good break.  Impressive Florida Derby win.  Three of the past six Kentucky Derby winners won the Florida Derby.  Lighty raced, but the race was not a problem.'
            },
            {
                name: 'Tacitus',
                kdpost: 8,
                lsprank: 1,
                kdpts: 150,
                sire: 'Tapit',
                kdjockey: 'Jose Ortiz',
                lrjockey: 'Jose Ortiz',
                trainer: 'William Mott',
                lastrace: '4/6/2019 (Wood Memorial)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Most consistent horse this year, solid performer every time out.  Winner of the Tampa Bay Derby and Wood Memorial.  Impressive closing speed - good performance in all of his races.'
            },
            {
                name: 'Plus Que Parfait',
                kdpost: 9,
                lsprank: 13,
                kdpts: 104,
                sire: 'Point of Entry',
                kdjockey: 'Ricardo Santana Jr.',
                lrjockey: 'Jose Ortiz',
                trainer: 'Brendan Walsh',
                lastrace: '3/30/2019 (UAE Derby)',
                comments: 'American horse shipped to Dubai for the UAE Derby.'
            },
            {
                name: 'Cutting Humor',
                kdpost: 10,
                lsprank: 11,
                kdpts: 50,
                sire: 'First Samurai',
                kdjockey: 'Mike Smith',
                lrjockey: 'John Velazquez',
                trainer: 'Todd Pletcher',
                lastrace: '3/24/2019 (Sunland Park Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Last race was his best race - looked very strong at 9 furlongs.  Late jockey change - which I do not like.  But it is just business.'
            },
            {
                name: 'Code of Honor',
                kdpost: 13,
                lsprank: 8,
                kdpts: 74,
                sire: 'Noble Mission',
                kdjockey: 'John Velazquez',
                lrjockey: 'John Velazquez',
                trainer: 'Claude McGaughey III',
                lastrace: '3/30/2019 (Florida Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Florida Derby - could not overcome outside post position, but still finished third.  Good post position - could be a factor.'
            },
            {
                name: 'Win Win Win',
                kdpost: 14,
                lsprank: 12,
                kdpts: 50,
                sire: 'Hat Trick',
                kdjockey: 'Julian Pimental',
                lrjockey: 'Irad Ortiz Jr.',
                trainer: 'Michael Trombetta',
                lastrace: '4/6/2019 (Blue Grass)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Consistent performer, but not enough to win either the Blue Grass or Tampa Bay Derby prep races.'
            },
            {
                name: 'Master Fencer (JPN)',
                kdpost: 16,
                lsprank: 18,
                kdpts: 100,
                sire: '',
                kdjockey: 'Julien Leparoux',
                lrjockey: '',
                trainer: '',
                lastrace: '',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: ''
            },
            {
                name: 'Game Winner',
                kdpost: 16,
                lsprank: 5,
                kdpts: 85,
                sire: 'Candy Ride',
                kdjockey: 'Joel Rosario',
                lrjockey: 'Joel Rosario',
                trainer: 'Bob Baffert',
                lastrace: '4/6/2019 (Santa Anita Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Second place finishes in the Rebel Division 1 and Santa Anita Derby races.  Game Winner has not taken the next step of improvement after Breeders Cup Junvenile win last November.'
            },
            {
                name: 'Roadster',
                kdpost: 17,
                lsprank: 9,
                kdpts: 100,
                sire: 'Quality Road',
                kdjockey: 'Florent Geroux',
                lrjockey: 'Mike Smith',
                trainer: 'Bob Baffert',
                lastrace: '4/6/2019 (Santa Anita Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Looked good beating Game Winner in Santa Anita Derby coming off throat surgery.  Santa Anita Derby was only a six horse field in  - would have like to see Roadster race in a bigger field.'
            },
            {
                name: 'Long Range Toddy',
                kdpost: 18,
                lsprank: 14,
                kdpts: 53.5,
                sire: 'Take Charge Indy',
                kdjockey: 'Jon Court',
                lrjockey: 'Jon Court',
                trainer: 'Steve Asmussen',
                lastrace: '4/13/2019 (Arkansas Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Long Range Toddy was good, but not great in previous races.  Arkansas Derby failed to overcome bad post and off track conditions.'
            },
            {
                name: 'Spinoff',
                kdpost: 19,
                lsprank: 15,
                kdpts: 40,
                sire: 'Hard Spun',
                kdjockey: 'Manny Franco',
                lrjockey: 'John Velazquez',
                trainer: 'Todd Pletcher',
                lastrace: '3/23/2019 (Louisiana Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Nice second place finish in Louisiana Derby puts this colt on the list.'
            },
            {
                name: 'Country House',
                kdpost: 20,
                lsprank: 19,
                kdpts: 50,
                sire: 'Looking at Lucky',
                kdjockey: 'Flavien Prat',
                lrjockey: 'Joel Rosario',
                trainer: 'William Mott',
                lastrace: '4/13/2019 (Arkansas Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Distant third place finish in Arkansas Derby.  Worst post draw drops Landshark Park rankings to last.'
            },
            {
                name: 'Bodexpress',
                kdpost: 21,
                lsprank: 17,
                kdpts: 40,
                sire: 'Bodemeister',
                kdjockey: 'Chris Landeros',
                lrjockey: 'Nik Juarez',
                trainer: 'Gustavo Delgado',
                lastrace: '3/30/2019 (Florida Derby)',
                nextrace: '5/4/2019 (Kentucky Derby)',
                comments: 'Finished second to Maximum Security in Florida Derby.  Only horse in 2019 Kentucky Derby that has not won a race.'
            }
        ];
    }
    KdHorsesService.prototype.getKDHorses = function () {
        //this.rankedHorses = this.sortByKey(this.kdHorses, 'lsprank');
        this.rankedHorses = this.sortByKey(this.kdHorses, 'kdpost');
        return this.rankedHorses;
    };
    KdHorsesService.prototype.getRankedKDHorses = function () {
        this.rankedHorses = this.sortByKey(this.kdHorses, 'lsprank');
        return this.rankedHorses;
    };
    KdHorsesService.prototype.getPointsKDHorses = function () {
        this.rankedHorses = this.sortByKey(this.kdHorses, 'kdpts').reverse();
        return this.rankedHorses;
    };
    KdHorsesService.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    KdHorsesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KdHorsesService);
    return KdHorsesService;
}());



/***/ }),

/***/ "./src/app/services/preak-horses.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/preak-horses.service.ts ***!
  \**************************************************/
/*! exports provided: PreakHorsesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreakHorsesService", function() { return PreakHorsesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreakHorsesService = /** @class */ (function () {
    function PreakHorsesService() {
        this.horses = [
            {
                name: 'War of Will',
                post: 1,
                lsprank: 7,
                kdpts: 60,
                sire: 'War Front',
                jockey: 'Tyler Gaffalione',
                lrjockey: 'Tyler Gaffalione',
                trainer: 'Mark Casse',
                lastrace: '5/4/2019 (Kentucky Derby)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Disappointing ninth place finish in Louisiana Derby.  Rebounded nicely in Kentucky Derby.  Not sure if he has the stamina for one more race.'
            },
            {
                name: 'Bourbon War',
                post: 2,
                lsprank: 2,
                kdpts: 31,
                sire: 'Tapit',
                jockey: 'Irad Ortiz Jr.',
                lrjockey: 'Irad Ortiz Jr.',
                trainer: 'Mark Hennig',
                lastrace: '3/30/2019 (Florida Derby)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Very disappointing fourth place in Florida Derby left Bourbon War without enough points to enter Kentucky Derby.  The three horses who finished ahead of Bourbon War in Florida Derby - Maximum Security, Bodexpress and Code of Honor.'
            },
            {
                name: "Warrior's Charge",
                post: 3,
                lsprank: 10,
                //kdpts: ,
                sire: 'Munnings',
                jockey: 'Javier Castellano',
                lrjockey: '',
                trainer: 'Brad Cox',
                lastrace: '',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: "Warrior's Charge was not in the 2019 Triple Crown Series, so the owner has paid the $150,000.00 supplemental fee for entry into this race.  Just food for thought if your $5 win ticket is stressing you out before the race."
            },
            {
                name: 'Improbable',
                post: 4,
                lsprank: 1,
                kdpts: 65,
                sire: 'City Zip',
                jockey: 'Mike Smith',
                lrjockey: 'Irad Ortiz Jr.',
                trainer: 'Bob Baffert',
                lastrace: '5/4/2019 (Kentucky Derby)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: "Mike Smith will be the fourth jockey in Improbable's past four races.  Not sure if jockey changes are hurting the development of Improbable.  A good, but not great fourth place finish in the Kentucky Derby.  Preakness Stakes will likely be the make or break race for Improbable's career.  Either Improbable wins and competes future top graded stakes races.  If not, Improbable will likely be just another good horse for G3 or less races."
            },
            {
                name: 'Owendale',
                post: 5,
                lsprank: 3,
                //kdpts: ,
                sire: 'Into Mischief',
                jockey: 'Florent Geroux',
                lrjockey: 'Florent Geroux',
                trainer: 'Brad Cox',
                lastrace: '4/13/2019 (Lexington Stakes)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Lightly raced, but the winner of the Lexington Stakes last time out.'
            },
            {
                name: 'Market King',
                post: 6,
                lsprank: 12,
                //kdpts: ,
                //sire: 'City Zip',
                jockey: 'Jon Court',
                lrjockey: '',
                trainer: 'D. Wayne Lukas',
                lastrace: '',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: ''
            },
            {
                name: 'Alwaysmining',
                post: 7,
                lsprank: 9,
                //kdpts: ,
                //sire: 'City Zip',
                jockey: 'Daniel Centeno',
                lrjockey: 'Daniel Centeno',
                trainer: 'Kelly Rubley',
                lastrace: '4/20/2019 (Federico Tesio Stakes - Laurel Park)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Alwaysmining was not in the Kentucky Derby prep races, so a tough read on how well he will do in the Preakness Stakes.'
            },
            {
                name: 'Signalman',
                post: 8,
                lsprank: 4,
                kdpts: 38,
                sire: 'General Quarters',
                jockey: 'Brian Hernandez Jr.',
                lrjockey: 'Brian Hernandez Jr.',
                trainer: 'Kenneth McPeek',
                lastrace: '4/6/2019 (Blue Grass Stakes)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: "Third place finish in the Blue Grass Stakes behind Vekoma and Win Win Win.  Signalman's other 2019 race was a seventh place finish in the Fountain of Youth."
            },
            {
                name: 'Bodexpress',
                post: 9,
                lsprank: 5,
                kdpts: 40,
                sire: 'Bodemeister',
                jockey: 'John Velazquez',
                lrjockey: 'Nik Juarez',
                trainer: 'Gustavo Delgado',
                lastrace: '5/4/2019 (Kentucky Derby)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: '14th place finish in Kentucky Derby, but did leave from 20th post position.  I will give him that excuse - hopefully he saved some energy for Preakness Stakes.'
            },
            {
                name: 'Everfast',
                post: 10,
                lsprank: 13,
                //kdpts: ,
                sire: 'Take Charge Indy',
                jockey: 'Joel Rosario',
                lrjockey: '',
                trainer: 'Dale Romans',
                lastrace: '',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Amazing second place finish in Holy Bull at 128-1 odds.  Maybe Everfast has one more race in him.'
            },
            {
                name: 'Laughing Fox',
                post: 11,
                lsprank: 11,
                //kdpts: ,
                sire: 'Union Rags',
                jockey: '',
                lrjockey: 'Ricardo Santana Jr.',
                trainer: 'Steven Asmussen',
                lastrace: '5/4/2019 (Oaklawn Invitational',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Fourth place finish in Arkansas Derby ended any chance of getting into Kentucky Derby.  '
            },
            {
                name: 'Anothertwistafate',
                post: 12,
                lsprank: 6,
                kdpts: 38,
                sire: 'Scat Daddy',
                jockey: 'Jose Ortiz',
                lrjockey: 'Javier Castellano',
                trainer: 'Blaine Wright',
                lastrace: '4/13/2019 (Lexington Stakes)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'I do not like the post position.  Had enough Kentucky Derby to qualify as an alternate, but owner decided to pass and prep/train for Preakness Stakes race.  Good horse, looking to take next step up.'
            },
            {
                name: 'Win Win Win',
                post: 13,
                lsprank: 8,
                kdpts: 50,
                sire: 'Hat Trick',
                jockey: 'Julian Pimental',
                lrjockey: 'Julian Pimental',
                trainer: 'Michael Trombetta',
                lastrace: '5/4/2019 (Kentucky Derby)',
                nextrace: '5/18/2019 (Preakness Stakes)',
                comments: 'Consistent performer, but not enough to win either the Blue Grass or Tampa Bay Derby prep races.  Ninth place finish in Kentucky Derby.'
            }
        ];
    }
    PreakHorsesService.prototype.getPreaknessHorses = function () {
        this.rankedHorses = this.sortByKey(this.horses, 'post');
        return this.rankedHorses;
    };
    PreakHorsesService.prototype.getRankedPreaknessHorses = function () {
        this.rankedHorses = this.sortByKey(this.horses, 'lsprank');
        return this.rankedHorses;
    };
    PreakHorsesService.prototype.getPointsPreaknessHorses = function () {
        this.rankedHorses = this.sortByKey(this.horses, 'kdpts').reverse();
        return this.rankedHorses;
    };
    PreakHorsesService.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    PreakHorsesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreakHorsesService);
    return PreakHorsesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Computer\Angular\apps\lsp-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map