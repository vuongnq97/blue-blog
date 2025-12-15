"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const users_module_1 = require("../users/users.module");
const client_id_guard_1 = require("./guards/client-id.guard");
const response_envelope_interceptor_1 = require("./interceptors/response-envelope.interceptor");
const auth_exception_filter_1 = require("./filters/auth-exception.filter");
const login_logger_middleware_1 = require("./middleware/login-logger.middleware");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(login_logger_middleware_1.LoginLoggerMiddleware).forRoutes('auth/login');
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, jwt_1.JwtModule.register({ secret: 'topsecret', signOptions: { expiresIn: '1h' } })],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            client_id_guard_1.ClientIdGuard,
            jwt_auth_guard_1.JwtAuthGuard,
            response_envelope_interceptor_1.ResponseEnvelopeInterceptor,
            auth_exception_filter_1.AuthExceptionFilter,
            {
                provide: core_1.APP_GUARD,
                useExisting: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useExisting: response_envelope_interceptor_1.ResponseEnvelopeInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useExisting: auth_exception_filter_1.AuthExceptionFilter,
            },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map