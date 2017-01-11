"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var users_service_1 = require('./users.service');
var BlogComponent = (function () {
    function BlogComponent(_userService) {
        this._userService = _userService;
    }
    BlogComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (Users) { return _this.Users = Users; });
    };
    BlogComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'blog',
            templateUrl: 'app/blog.template.html',
            providers: [users_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map