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
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService) {
        this.userService = userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent.prototype.createUser = function (user) {
        var _this = this;
        this.userService.createUser(user).then(function (newUser) {
            _this.createHandler(newUser);
        });
    };
    UserDetailsComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.userService.updateUser(user).then(function (updatedUser) {
            _this.updateHandler(updatedUser);
        });
    };
    UserDetailsComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId).then(function (deletedUserId) {
            _this.deleteHandler(deletedUserId);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "deleteHandler", void 0);
    UserDetailsComponent = __decorate([
        core_1.Component({
            selector: 'user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map