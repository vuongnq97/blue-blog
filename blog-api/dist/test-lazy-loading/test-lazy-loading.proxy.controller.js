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
exports.TestLazyLoadingProxyController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const test_lazy_loading_controller_1 = require("./test-lazy-loading.controller");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let TestLazyLoadingProxyController = class TestLazyLoadingProxyController {
    lazyModuleLoader;
    moduleRef;
    constructor(lazyModuleLoader) {
        this.lazyModuleLoader = lazyModuleLoader;
    }
    async getStatus() {
        if (!this.moduleRef) {
            this.moduleRef = await this.lazyModuleLoader.load(() => import('./test-lazy-loading.module.js').then((m) => m.TestLazyLoadingModule));
        }
        const controller = this.moduleRef.get(test_lazy_loading_controller_1.TestLazyLoadingController, {
            strict: false,
        });
        return controller.getStatus();
    }
};
exports.TestLazyLoadingProxyController = TestLazyLoadingProxyController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestLazyLoadingProxyController.prototype, "getStatus", null);
exports.TestLazyLoadingProxyController = TestLazyLoadingProxyController = __decorate([
    (0, common_1.Controller)('test-lazy-loading'),
    __metadata("design:paramtypes", [core_1.LazyModuleLoader])
], TestLazyLoadingProxyController);
//# sourceMappingURL=test-lazy-loading.proxy.controller.js.map