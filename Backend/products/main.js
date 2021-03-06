(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\91906\Desktop\AngularLibraryApp-main\AngularLibraryApp-main\angular-library\Frondend\src\main.ts */"zUnb");


/***/ }),

/***/ "2PFQ":
/*!******************************************************!*\
  !*** ./src/app/update-book/update-book.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function() { return UpdateBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "I9o5");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UpdateBookComponent {
    constructor(router, bookService, _auth) {
        this.router = router;
        this.bookService = bookService;
        this._auth = _auth;
        this.bookItem = {
            title: '',
            author: '',
            genre: '',
            image: ''
        };
    }
    ngOnInit() {
        let bookId = localStorage.getItem("editBookId");
        this.bookService.getBook(bookId)
            .subscribe((data) => {
            this.bookItem = JSON.parse(JSON.stringify(data));
        });
    }
    editBook() {
        this.bookService.editBook(this.bookItem);
        alert("success");
        this.router.navigate(['/books']);
    }
}
UpdateBookComponent.??fac = function UpdateBookComponent_Factory(t) { return new (t || UpdateBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UpdateBookComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateBookComponent, selectors: [["app-update-book"]], decls: 33, vars: 5, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "panel"], [1, "panel-body"], [3, "ngSubmit"], ["updatebookform", "ngForm"], [1, "form-group"], ["type", "text", "name", "b_title", "placeholder", "Type Title Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "titleErr"], ["type", "text", "name", "b_auth", "placeholder", "Type Author Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "b_genre", "placeholder", "Type Genre Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "b_image", "placeholder", "Chose Image Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function UpdateBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Edit Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UpdateBookComponent_Template_form_ngSubmit_10_listener() { return ctx.editBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Book Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_15_listener($event) { return ctx.bookItem.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_20_listener($event) { return ctx.bookItem.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Book Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_24_listener($event) { return ctx.bookItem.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Book Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_28_listener($event) { return ctx.bookItem.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n.card-body[_ngcontent-%COMP%]{\n    background-color:#f8f9fa ; \n }\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGLHFGQUFxRjtBQUNyRix3RkFBd0Y7QUFFeEY7SUFDSSx5QkFBeUI7Q0FDNUI7QUFFQTtJQUNHLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2YiLCJmaWxlIjoidXBkYXRlLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGRyaWNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxleCBCcnVzaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuXG4uY2FyZC1ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4ZjlmYSA7IFxuIH1cblxuIGgze1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibHVlO1xufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-book',
                templateUrl: './update-book.component.html',
                styleUrls: ['./update-book.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "74I5":
/*!***********************************!*\
  !*** ./src/app/author.service.ts ***!
  \***********************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthorService {
    constructor(http) {
        this.http = http;
        this.item = {
            name: '',
            genre: '',
            book1: '',
            book2: '',
            book3: '',
            image: ''
        };
    }
    getAuthors() {
        return this.http.get("http://localhost:3000/authors");
    }
    getAuthor(id) {
        return this.http.get("http://localhost:3000/author/" + id);
    }
    newAuthor(item) {
        return this.http.post("http://localhost:3000/authors/insert", { "author": item })
            .subscribe(data => { console.log(data); });
    }
    editAuthor(author) {
        console.log("client update");
        return this.http.put("http://localhost:3000/authors/update", author)
            .subscribe(data => {
            console.log(data);
        });
    }
    deleteAuthor(id) {
        return this.http.delete("http://localhost:3000/authors/remove/" + id);
    }
}
AuthorService.??fac = function AuthorService_Factory(t) { return new (t || AuthorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthorService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthorService, factory: AuthorService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 72, vars: 0, consts: [[1, "card", 2, "width", "100%"], [1, "card-header", 2, "width", "100"], [1, "card-body", 2, "width", "100"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "panel"], [1, "panel-body"], [1, "col-md-4", "col-sm-6", "text-center"], ["href", "#", 1, "story-title"], ["alt", "", "src", "https://cdn2.penguin.com.au/authors/original/87518au.jpg", 1, "rounded-circle", 2, "width", "180px", "height", "200px"], [1, "col-md-8", "col-sm-6"], [1, "label", "label-default"], ["alt", "", "src", "https://media.npr.org/assets/news/2010/04/20/twain_custom-32181771941946f9382cacc422e3b0abe027a1b4-s800-c85.jpg", 1, "rounded-circle", 2, "width", "180px", "height", "200px"], ["alt", "", "src", "https://d3i6fh83elv35t.cloudfront.net/static/2015/01/3312466_hemingway1-e1540217117842-1024x789.jpg", 1, "rounded-circle", 2, "width", "180px", "height", "200px"], ["alt", "", "src", "https://cdn.britannica.com/40/1340-050-39EB4F43/photograph-Victor-Hugo-Nadar.jpg", 1, "rounded-circle", 2, "width", "180px", "height", "200px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\"The book is a film that takes place in the mind of the reader. That's why we go to movies and say, \"Oh, the book is better\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "-Paulo Coelho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\u201CGood friends, good books and a sleepy conscience: this is the ideal life\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "-Mark Twain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\u201CThere is no friend as loyal as a book\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "-Ernest Hemingway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\u201CTo learn to read is to light a fire; every syllable that is spelled out is a spark\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "-Victor Hugo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\nh3[_ngcontent-%COMP%] {\n    font-family:'Alex Brush','Aldrich','Oswald',arial narrow,sans-serif;\n    color:red;\n    font-size: 50px;\n  }\nh4[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n}\n.card-body[_ngcontent-%COMP%]{\n   background-color:#f8f9fa ; \n}\nh2[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYscUZBQXFGO0FBQ3JGLHdGQUF3RjtBQUN4RjtJQUNJLG1FQUFtRTtJQUNuRSxTQUFTO0lBQ1QsZUFBZTtFQUNqQjtBQUVGO0lBQ0ksc0RBQXNEO0FBQzFEO0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7QUFHQTtJQUNJLHNEQUFzRDtJQUN0RCxXQUFXO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZHJpY2g6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGV4IEJydXNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5oMyB7XG4gICAgZm9udC1mYW1pbHk6J0FsZXggQnJ1c2gnLCdBbGRyaWNoJywnT3N3YWxkJyxhcmlhbCBuYXJyb3csc2Fucy1zZXJpZjtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbmg0e1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxhcmlhbCBuYXJyb3csc2Fucy1zZXJpZjtcbn1cblxuLmNhcmQtYm9keXtcbiAgIGJhY2tncm91bmQtY29sb3I6I2Y4ZjlmYSA7IFxufVxuXG5cbmgye1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxhcmlhbCBuYXJyb3csc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmx1ZTtcbn0gXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vt0":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, nxt) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return nxt.handle(tokenizedReq);
    }
}
TokenInterceptorService.??fac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DBaU":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../author.service */ "74I5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AuthorsComponent_div_6_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AuthorsComponent_div_6_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const author_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.editAuthor(author_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AuthorsComponent_div_6_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AuthorsComponent_div_6_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const author_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.deleteAuthor(author_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AuthorsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AuthorsComponent_div_6_button_21_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AuthorsComponent_div_6_button_22_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const author_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", author_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](author_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](author_r1.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", author_r1.book1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", author_r1.book2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", author_r1.book3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0._auth.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0._auth.loggedIn());
} }
class AuthorsComponent {
    constructor(authorService, router, _auth) {
        this.authorService = authorService;
        this.router = router;
        this._auth = _auth;
        this.title = "Author List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ngOnInit() {
        this.authorService.getAuthors().subscribe((data) => {
            this.authors = JSON.parse(JSON.stringify(data));
            console.log(this.authors);
        });
    }
    editAuthor(author) {
        localStorage.setItem("editAuthorId", author._id.toString());
        this.router.navigate(['update/authors']);
    }
    deleteAuthor(author) {
        this.authorService.deleteAuthor(author._id)
            .subscribe((data) => {
            this.authors = this.authors.filter(p => p !== author);
        });
    }
}
AuthorsComponent.??fac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthorsComponent, selectors: [["app-authors"]], decls: 8, vars: 2, consts: [[1, "card", 2, "width", "100"], [1, "card-header", 2, "width", "100"], [1, "card-body", 2, "width", "100"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-3", "col-sm-3", "text-center"], ["alt", "", 1, "rounded-circle", 2, "width", "150px", "height", "150px", 3, "src"], [1, "col", "col-lg-2"], [1, "col-xs-9"], [1, "text-muted"], [1, "label", "label-default", 2, "font-family", "courier,'new courier'"], ["class", "btn btn-warning", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "id", "btnspace2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 2, "cursor", "pointer", 3, "click"], ["id", "btnspace2", 1, "btn", "btn-danger", 2, "cursor", "pointer", 3, "click"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AuthorsComponent_div_6_Template, 26, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.authors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n#btnspace[_ngcontent-%COMP%]{\n    margin-left: 70px;\n}\n#btnspace2[_ngcontent-%COMP%]{\n    margin-left: 73px;   \n}\nh2[_ngcontent-%COMP%] {\n    font-family:'Alex Brush','Aldrich','Oswald',arial narrow,sans-serif;\n    color:red;\n    font-size: 70px;\n  }\nh4[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n}\n.card-body[_ngcontent-%COMP%]{\n   background-color:#f8f9fa ; \n}\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYscUZBQXFGO0FBQ3JGLHdGQUF3RjtBQUV4RjtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsU0FBUztJQUNULGVBQWU7RUFDakI7QUFFRjtJQUNJLHNEQUFzRDtBQUMxRDtBQUVBO0dBQ0cseUJBQXlCO0FBQzVCO0FBR0E7SUFDSSxzREFBc0Q7SUFDdEQsV0FBVztBQUNmIiwiZmlsZSI6ImF1dGhvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGRyaWNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxleCBCcnVzaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuXG4jYnRuc3BhY2V7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbiNidG5zcGFjZTJ7XG4gICAgbWFyZ2luLWxlZnQ6IDczcHg7ICAgXG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTonQWxleCBCcnVzaCcsJ0FsZHJpY2gnLCdPc3dhbGQnLGFyaWFsIG5hcnJvdyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cblxuaDR7XG4gICAgZm9udC1mYW1pbHk6J0FsZHJpY2gnLCdPc3dhbGQnLGFyaWFsIG5hcnJvdyxzYW5zLXNlcmlmO1xufVxuXG4uY2FyZC1ib2R5e1xuICAgYmFja2dyb3VuZC1jb2xvcjojZjhmOWZhIDsgXG59XG5cblxuaDN7XG4gICAgZm9udC1mYW1pbHk6J0FsZHJpY2gnLCdPc3dhbGQnLGFyaWFsIG5hcnJvdyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibHVlO1xufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authors',
                templateUrl: './authors.component.html',
                styleUrls: ['./authors.component.css']
            }]
    }], function () { return [{ type: _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "EeA+":
/*!**********************************************************!*\
  !*** ./src/app/update-author/update-author.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAuthorComponent", function() { return UpdateAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../author.service */ "74I5");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UpdateAuthorComponent {
    constructor(router, authorService, _auth) {
        this.router = router;
        this.authorService = authorService;
        this._auth = _auth;
        this.authorItem = {
            name: '',
            genre: '',
            book1: '',
            book2: '',
            book3: '',
            image: ''
        };
    }
    ngOnInit() {
        let authorId = localStorage.getItem("editAuthorId");
        this.authorService.getAuthor(authorId)
            .subscribe((data) => {
            this.authorItem = JSON.parse(JSON.stringify(data));
        });
    }
    editAuthor() {
        this.authorService.editAuthor(this.authorItem);
        alert("success");
        this.router.navigate(['/authors']);
    }
}
UpdateAuthorComponent.??fac = function UpdateAuthorComponent_Factory(t) { return new (t || UpdateAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UpdateAuthorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateAuthorComponent, selectors: [["app-update-author"]], decls: 40, vars: 7, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "panel"], [1, "panel-body"], [3, "ngSubmit"], ["updateauthorform", "ngForm"], [1, "form-group"], ["type", "text", "name", "a_name", "placeholder", "Type Name Of Author", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a_genre", "placeholder", "Type Genre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a_book1", "placeholder", "Type Name Of Book1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a_book2", "placeholder", "Type Name Of Book2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a_book3", "placeholder", "Type Name Of Book3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "a_image", "placeholder", "Chose Image Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function UpdateAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Edit Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UpdateAuthorComponent_Template_form_ngSubmit_10_listener() { return ctx.editAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Author Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_15_listener($event) { return ctx.authorItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Author Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_19_listener($event) { return ctx.authorItem.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Book1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_23_listener($event) { return ctx.authorItem.book1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Book2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.authorItem.book2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Book3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_31_listener($event) { return ctx.authorItem.book3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Author Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateAuthorComponent_Template_input_ngModelChange_35_listener($event) { return ctx.authorItem.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n.card-body[_ngcontent-%COMP%]{\n    background-color:#f8f9fa ; \n }\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1hdXRob3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYscUZBQXFGO0FBQ3JGLHdGQUF3RjtBQUV4RjtJQUNJLHlCQUF5QjtDQUM1QjtBQUVBO0lBQ0cseUNBQXlDO0lBQ3pDLFdBQVc7QUFDZiIsImZpbGUiOiJ1cGRhdGUtYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxkcmljaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZXggQnJ1c2g6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcblxuLmNhcmQtYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmEgOyBcbiB9XG5cbiBoM3tcbiAgICBmb250LWZhbWlseTonQWxkcmljaCcsJ09zd2FsZCcsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmx1ZTtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-author',
                templateUrl: './update-author.component.html',
                styleUrls: ['./update-author.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "I9o5":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class BookService {
    constructor(http) {
        this.http = http;
        this.item = {
            title: '',
            author: '',
            genre: '',
            image: ''
        };
    }
    getBooks() {
        return this.http.get("http://localhost:3000/books");
    }
    getBook(id) {
        return this.http.get("http://localhost:3000/book/" + id);
    }
    newBook(item) {
        return this.http.post("http://localhost:3000/books/insert", { "book": item })
            .subscribe(data => { console.log(data); });
    }
    editBook(book) {
        console.log("client update");
        return this.http.put("http://localhost:3000/books/update", book)
            .subscribe(data => {
            console.log(data);
        });
    }
    deleteBook(id) {
        return this.http.delete("http://localhost:3000/books/remove/" + id);
    }
}
BookService.??fac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BookService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: BookService, factory: BookService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PRiU":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "I9o5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BooksComponent_div_6_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BooksComponent_div_6_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.editBook(book_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BooksComponent_div_6_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BooksComponent_div_6_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.deleteBook(book_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BooksComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, BooksComponent_div_6_button_18_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, BooksComponent_div_6_button_19_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", book_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](book_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", book_r1.genre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0._auth.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0._auth.loggedIn());
} }
class BooksComponent {
    constructor(bookService, router, _auth) {
        this.bookService = bookService;
        this.router = router;
        this._auth = _auth;
        this.title = "Book List";
    }
    ngOnInit() {
        this.bookService.getBooks().subscribe((data) => {
            this.books = JSON.parse(JSON.stringify(data));
            console.log(this.books);
        });
    }
    editBook(book) {
        localStorage.setItem("editBookId", book._id.toString());
        this.router.navigate(['update/books']);
    }
    deleteBook(book) {
        this.bookService.deleteBook(book._id)
            .subscribe((data) => {
            this.books = this.books.filter(p => p !== book);
        });
    }
}
BooksComponent.??fac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
BooksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BooksComponent, selectors: [["app-books"]], decls: 8, vars: 2, consts: [[1, "card", 2, "width", "100%"], [1, "card-header", 2, "width", "100"], [1, "card-body", 2, "width", "100"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-3", "col-sm-3", "text-center"], ["alt", "", 1, "rounded-circle", 2, "width", "150px", "height", "150px", 3, "src"], [1, "col", "col-lg-2"], [1, "col-xs-9"], [1, "label", "label-default"], [1, "text-muted", 2, "font-family", "courier,'new courier'"], ["class", "btn btn-warning", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "id", "btnspace2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 2, "cursor", "pointer", 3, "click"], ["id", "btnspace2", 1, "btn", "btn-danger", 2, "cursor", "pointer", 3, "click"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, BooksComponent_div_6_Template, 23, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n#btnspace[_ngcontent-%COMP%]{\n    margin-left: 70px;\n}\n#btnspace2[_ngcontent-%COMP%]{\n    margin-left: 73px;   \n}\nh2[_ngcontent-%COMP%] {\n    font-family:'Alex Brush','Aldrich','Oswald',arial narrow,sans-serif;\n    color:red;\n    font-size: 70px;\n  }\nh4[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n}\n.card-body[_ngcontent-%COMP%]{\n   background-color:#f8f9fa ; \n}\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGLHFGQUFxRjtBQUNyRix3RkFBd0Y7QUFFeEY7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksbUVBQW1FO0lBQ25FLFNBQVM7SUFDVCxlQUFlO0VBQ2pCO0FBRUY7SUFDSSxzREFBc0Q7QUFDMUQ7QUFFQTtHQUNHLHlCQUF5QjtBQUM1QjtBQUdBO0lBQ0ksc0RBQXNEO0lBQ3RELFdBQVc7QUFDZiIsImZpbGUiOiJib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZHJpY2g6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGV4IEJydXNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5cbiNidG5zcGFjZXtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuI2J0bnNwYWNlMntcbiAgICBtYXJnaW4tbGVmdDogNzNweDsgICBcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OidBbGV4IEJydXNoJywnQWxkcmljaCcsJ09zd2FsZCcsYXJpYWwgbmFycm93LHNhbnMtc2VyaWY7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuXG5oNHtcbiAgICBmb250LWZhbWlseTonQWxkcmljaCcsJ09zd2FsZCcsYXJpYWwgbmFycm93LHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkLWJvZHl7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmEgOyBcbn1cblxuXG5oM3tcbiAgICBmb250LWZhbWlseTonQWxkcmljaCcsJ09zd2FsZCcsYXJpYWwgbmFycm93LHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsdWU7XG59IFxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-books',
                templateUrl: './books.component.html',
                styleUrls: ['./books.component.css']
            }]
    }], function () { return [{ type: _book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "R6oq":
/*!*************************************!*\
  !*** ./src/app/books/book.model.ts ***!
  \*************************************/
/*! exports provided: BookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModel", function() { return BookModel; });
class BookModel {
    constructor(title, author, genre, image) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.image = image;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'products';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-interceptor.service */ "9vt0");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./books/books.component */ "PRiU");
/* harmony import */ var _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-book/new-book.component */ "mrGN");
/* harmony import */ var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-book/update-book.component */ "2PFQ");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authors/authors.component */ "DBaU");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-author/new-author.component */ "ef6T");
/* harmony import */ var _update_author_update_author_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-author/update-author.component */ "EeA+");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
        _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_11__["NewBookComponent"],
        _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_12__["UpdateBookComponent"],
        _authors_authors_component__WEBPACK_IMPORTED_MODULE_13__["AuthorsComponent"],
        _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_14__["NewAuthorComponent"],
        _update_author_update_author_component__WEBPACK_IMPORTED_MODULE_15__["UpdateAuthorComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
                    _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_11__["NewBookComponent"],
                    _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_12__["UpdateBookComponent"],
                    _authors_authors_component__WEBPACK_IMPORTED_MODULE_13__["AuthorsComponent"],
                    _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_14__["NewAuthorComponent"],
                    _update_author_update_author_component__WEBPACK_IMPORTED_MODULE_15__["UpdateAuthorComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZO7/":
/*!*****************************************!*\
  !*** ./src/app/authors/author.model.ts ***!
  \*****************************************/
/*! exports provided: AuthorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModel", function() { return AuthorModel; });
class AuthorModel {
    constructor(name, genre, book1, book2, book3, image) {
        this.name = name;
        this.genre = genre;
        this.book1 = book1;
        this.book2 = book2;
        this.book3 = book3;
        this.image = image;
    }
}


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    loginUser(user) {
        return this.http.post("http://localhost:3000/login", user);
    }
    signupUser(user) {
        return this.http.post("http://localhost:3000/signup", user)
            .subscribe(data => {
            console.log(data);
        });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    loggedUserIn() {
        return !!localStorage.getItem('token1');
    }
    logIn() {
        return !!(localStorage.getItem('token1') || localStorage.getItem('token'));
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ef6T":
/*!****************************************************!*\
  !*** ./src/app/new-author/new-author.component.ts ***!
  \****************************************************/
/*! exports provided: NewAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuthorComponent", function() { return NewAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authors_author_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authors/author.model */ "ZO7/");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../author.service */ "74I5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NewAuthorComponent {
    constructor(authorService, router) {
        this.authorService = authorService;
        this.router = router;
        this.title = "Add Author";
        this.authorItem = new _authors_author_model__WEBPACK_IMPORTED_MODULE_1__["AuthorModel"]('', '', '', '', '', '');
    }
    ngOnInit() {
    }
    AddAuthor() {
        this.authorService.newAuthor(this.authorItem);
        console.log("called");
        alert("success");
        this.router.navigate(['/authors']);
    }
}
NewAuthorComponent.??fac = function NewAuthorComponent_Factory(t) { return new (t || NewAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewAuthorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewAuthorComponent, selectors: [["app-new-author"]], decls: 52, vars: 16, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "panel"], [1, "panel-body"], [3, "ngSubmit"], ["addauthorform", "ngForm"], [1, "form-group"], ["type", "text", "name", "a_name", "placeholder", "Type Name Of Author", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["aname", "ngModel"], [1, "text-danger"], ["type", "text", "name", "a_genre", "placeholder", "Type Genre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["agenre", "ngModel"], ["type", "text", "name", "a_book1", "placeholder", "Type Name Of Book1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["book1", "ngModel"], ["type", "text", "name", "a_book2", "placeholder", "Type Name Of Book2(optional)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a_book3", "placeholder", "Type Name Of Book3(optional)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "a_image", "placeholder", "Chose Image Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bimage", "ngModel"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function NewAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NewAuthorComponent_Template_form_ngSubmit_10_listener() { return ctx.AddAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Author Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_15_listener($event) { return ctx.authorItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Author Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_22_listener($event) { return ctx.authorItem.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Book1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_29_listener($event) { return ctx.authorItem.book1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Book2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_36_listener($event) { return ctx.authorItem.book2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Book3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_40_listener($event) { return ctx.authorItem.book3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Author Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewAuthorComponent_Template_input_ngModelChange_44_listener($event) { return ctx.authorItem.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r1.valid || _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r2.valid || _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r3.valid || _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.book3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.authorItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r4.valid || _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n.card-body[_ngcontent-%COMP%]{\n    background-color:#f8f9fa ; \n }\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hdXRob3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYscUZBQXFGO0FBQ3JGLHdGQUF3RjtBQUV4RjtJQUNJLHlCQUF5QjtDQUM1QjtBQUVBO0lBQ0cseUNBQXlDO0lBQ3pDLFdBQVc7QUFDZiIsImZpbGUiOiJuZXctYXV0aG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxkcmljaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZXggQnJ1c2g6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcblxuLmNhcmQtYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmEgOyBcbiB9XG5cbiBoM3tcbiAgICBmb250LWZhbWlseTonQWxkcmljaCcsJ09zd2FsZCcsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmx1ZTtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-author',
                templateUrl: './new-author.component.html',
                styleUrls: ['./new-author.component.css']
            }]
    }], function () { return [{ type: _author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Books");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Authors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class HeaderComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.title = "Library Manager";
    }
    ngOnInit() {
    }
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('token1');
        this._router.navigate(['/login']);
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 8, consts: [["id", "title-main"], [1, "card-header"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["class", "nav-link", "routerLink", "/login", 4, "ngIf"], ["class", "nav-link", "routerLink", "/signup", 4, "ngIf"], ["routerLink", "/", 1, "nav-link"], ["class", "nav-link", "routerLink", "/books", 4, "ngIf"], ["class", "nav-link", "routerLink", "/add/books", 4, "ngIf"], ["class", "nav-link", "routerLink", "/authors", 4, "ngIf"], ["class", "nav-link", "routerLink", "/add/authors", 4, "ngIf"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/signup", 1, "nav-link"], ["routerLink", "/books", 1, "nav-link"], ["routerLink", "/add/books", 1, "nav-link"], ["routerLink", "/authors", 1, "nav-link"], ["routerLink", "/add/authors", 1, "nav-link"], [1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HeaderComponent_a_6_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, HeaderComponent_a_8_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, HeaderComponent_a_13_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, HeaderComponent_a_15_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, HeaderComponent_a_17_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, HeaderComponent_a_19_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, HeaderComponent_a_21_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx._auth.logIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx._auth.logIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._auth.logIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._auth.logIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._auth.loggedIn() || ctx._auth.loggedUserIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\nh1[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n#title-main[_ngcontent-%COMP%]{\n    text-align: center;\n    background-color:#f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRixxRkFBcUY7QUFDckYsd0ZBQXdGO0FBRXhGO0lBQ0ksc0RBQXNEO0lBQ3RELFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGRyaWNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxleCBCcnVzaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuXG5oMSxhe1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxhcmlhbCBuYXJyb3csc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmx1ZTtcbn1cbiN0aXRsZS1tYWlue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mrGN":
/*!************************************************!*\
  !*** ./src/app/new-book/new-book.component.ts ***!
  \************************************************/
/*! exports provided: NewBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookComponent", function() { return NewBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _books_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books/book.model */ "R6oq");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "I9o5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NewBookComponent {
    constructor(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.title = "Add Book";
        this.bookItem = new _books_book_model__WEBPACK_IMPORTED_MODULE_1__["BookModel"]('', '', '', '');
    }
    ngOnInit() {
    }
    AddBook() {
        this.bookService.newBook(this.bookItem);
        console.log("called");
        alert("success");
        this.router.navigate(['/books']);
    }
}
NewBookComponent.??fac = function NewBookComponent_Factory(t) { return new (t || NewBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewBookComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewBookComponent, selectors: [["app-new-book"]], decls: 44, vars: 14, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "panel"], [1, "panel-body"], [3, "ngSubmit"], ["addbookform", "ngForm"], [1, "form-group"], ["type", "text", "name", "b_title", "placeholder", "Type Title Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bname", "ngModel"], [1, "text-danger"], ["type", "text", "name", "b_auth", "placeholder", "Type Author Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bauth", "ngModel"], ["type", "text", "name", "b_genre", "placeholder", "Type Genre Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bgenre", "ngModel"], ["type", "file", "name", "b_image", "placeholder", "Chose Image Of Book", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["book", "ngModel"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function NewBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NewBookComponent_Template_form_ngSubmit_10_listener() { return ctx.AddBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Book Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewBookComponent_Template_input_ngModelChange_15_listener($event) { return ctx.bookItem.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewBookComponent_Template_input_ngModelChange_22_listener($event) { return ctx.bookItem.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Book Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewBookComponent_Template_input_ngModelChange_29_listener($event) { return ctx.bookItem.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Book Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewBookComponent_Template_input_ngModelChange_36_listener($event) { return ctx.bookItem.image = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Empty Value Not Supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r1.valid || _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r2.valid || _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r3.valid || _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bookItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r4.valid || _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@import url('http://fonts.googleapis.com/css?family=Oswald:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Aldrich:300,400:latin,latin-ext');\n@import url('http://fonts.googleapis.com/css?family=Alex Brush:300,400:latin,latin-ext');\n.card-body[_ngcontent-%COMP%]{\n    background-color:#f8f9fa ; \n }\nh3[_ngcontent-%COMP%]{\n    font-family:'Aldrich','Oswald',sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGLHFGQUFxRjtBQUNyRix3RkFBd0Y7QUFFeEY7SUFDSSx5QkFBeUI7Q0FDNUI7QUFFQTtJQUNHLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2YiLCJmaWxlIjoibmV3LWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQ6MzAwLDQwMDpsYXRpbixsYXRpbi1leHQnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGRyaWNoOjMwMCw0MDA6bGF0aW4sbGF0aW4tZXh0Jyk7XG5AaW1wb3J0IHVybCgnaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxleCBCcnVzaDozMDAsNDAwOmxhdGluLGxhdGluLWV4dCcpO1xuXG4uY2FyZC1ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4ZjlmYSA7IFxuIH1cblxuIGgze1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibHVlO1xufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-book',
                templateUrl: './new-book.component.html',
                styleUrls: ['./new-book.component.css']
            }]
    }], function () { return [{ type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignupComponent {
    constructor(router, authServices) {
        this.router = router;
        this.authServices = authServices;
        this.user = {
            email1: '',
            number1: '',
            password1: '',
            password2: ''
        };
    }
    ngOnInit() {
    }
    signupUser() {
        this.authServices.signupUser(this.user);
        alert("success");
        this.router.navigate(['/login']);
    }
}
SignupComponent.??fac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 43, vars: 18, consts: [[1, "py-5"], [1, "row"], [1, "col-md-6", "mx-auto"], ["id", "formLogin", 1, "anchor"], [1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit"], ["usersignup", "ngForm"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Email", "pattern", "^[a-z0-9.%+]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email1", "ngModel"], [1, "text-danger"], ["type", "text", "name", "number", "placeholder", "Phone Number", "minlength", "10", "maxlength", "10", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["number1", "ngModel"], ["type", "password", "name", "password1", "placeholder", "Password", "minlength", "8", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass1", "ngModel", "password1", "ngModel"], ["type", "text", "name", "password2", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "pattern", "ngModelChange"], ["pass2", "ngModel", "password2", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() { return ctx.signupUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.email1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Enter a Valid Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.number1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Enter a Valid Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_28_listener($event) { return ctx.user.password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Enter a Valid Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Re-Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_36_listener($event) { return ctx.user.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Enter the matching password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Sign UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.email1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r1.valid || _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.number1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r2.valid || _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r3.valid || _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("pattern", ctx.user.password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r5.valid || _r5.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]], styles: [".card-header[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNEQUFzRDtJQUN0RCxXQUFXO0FBQ2YiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OidBbGRyaWNoJywnT3N3YWxkJyxhcmlhbCBuYXJyb3csc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmx1ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authors/authors.component */ "DBaU");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/books.component */ "PRiU");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-author/new-author.component */ "ef6T");
/* harmony import */ var _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-book/new-book.component */ "mrGN");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _update_author_update_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-author/update-author.component */ "EeA+");
/* harmony import */ var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-book/update-book.component */ "2PFQ");














const routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"] },
    { path: 'add/books',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_8__["NewBookComponent"] },
    { path: 'update/books', component: _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_11__["UpdateBookComponent"] },
    { path: 'authors', component: _authors_authors_component__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"] },
    { path: 'add/authors',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_7__["NewAuthorComponent"] },
    { path: 'update/authors', component: _update_author_update_author_component__WEBPACK_IMPORTED_MODULE_10__["UpdateAuthorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.user = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser(this.user)
            .subscribe(res => {
            if (res.token) {
                localStorage.setItem('token', res.token);
                alert("success");
                this._router.navigate(['/']);
            }
            if (res.token1) {
                localStorage.setItem('token1', res.token1);
                alert("success");
                this._router.navigate(['/']);
            }
            if (res.msg) {
                alert("Wrong:Try Again!!");
            }
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 9, consts: [[1, "py-5"], [1, "row"], [1, "col-md-6", "mx-auto"], ["id", "formLogin", 1, "anchor"], [1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit"], ["userlogin", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "email", "name", "username", "pattern", "^[a-z0-9.%+]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "text-danger"], ["for", "password"], ["type", "password", "name", "password", "minlength", "8", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "User Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Enter The Valid Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Enter The Valid Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r1.valid || _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("d-none", _r2.valid || _r2.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: [".card-header[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family:'Aldrich','Oswald',arial narrow,sans-serif;\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0RBQXNEO0lBQ3RELFdBQVc7QUFDZiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTonQWxkcmljaCcsJ09zd2FsZCcsYXJpYWwgbmFycm93LHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsdWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map