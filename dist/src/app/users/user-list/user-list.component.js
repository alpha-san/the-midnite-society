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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../user.service");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.getIndexOfUser = function (userId) {
            return _this.users.findIndex(function (user) {
                return user._id === userId;
            });
        };
        this.deleteUser = function (userId) {
            var idx = _this.getIndexOfUser(userId);
            if (idx !== -1) {
                _this.users.splice(idx, 1);
                _this.selectUser(null);
            }
            return _this.users;
        };
        this.addUser = function (user) {
            _this.users.push(user);
            _this.selectUser(user);
            return _this.users;
        };
        this.updateUser = function (user) {
            var idx = _this.getIndexOfUser(user._id);
            if (idx !== -1) {
                _this.users[idx] = user;
                _this.selectUser(user);
            }
            return _this.users;
        };
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getUsers()
            .then(function (users) {
            if (users !== undefined) {
                _this.users = users.map(function (user) {
                    return user;
                });
            }
        });
    };
    UserListComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.createNewUser = function () {
        var user = {
            firstName: '',
            lastName: '',
            details: '',
            email: '',
            phone: '',
            createdAt: new Date(),
            modifiedAt: new Date()
        };
        this.selectUser(user);
        // UserModel.createUser('', '', '', '', '').then(res => {
        //   this.selectUser(<IUserModel>res);
        // }, err => {
        //   if (err) { 
        //     console.log(err.message);
        //   }
        // });
        // var user: User = {
        //   firstName: '',
        //   lastName: '',
        //   details: '',
        //   email: '',
        //   phone: ''
        // }
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map