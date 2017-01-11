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
var FaderComponent = (function () {
    function FaderComponent() {
        this.visibility = 'shown';
        this.isVisible = true;
    }
    FaderComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FaderComponent.prototype, "isVisible", void 0);
    FaderComponent = __decorate([
        core_1.Component({
            selector: 'my-fader',
            template: "\n  <div *ngIf=\"visibility == 'shown'\" >\n      <ng-content></ng-content><br/>\n     \n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FaderComponent);
    return FaderComponent;
}());
exports.FaderComponent = FaderComponent;
//# sourceMappingURL=fader.component.js.map