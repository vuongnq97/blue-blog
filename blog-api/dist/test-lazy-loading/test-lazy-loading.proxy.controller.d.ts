import { LazyModuleLoader } from '@nestjs/core';
export declare class TestLazyLoadingProxyController {
    private readonly lazyModuleLoader;
    private moduleRef?;
    constructor(lazyModuleLoader: LazyModuleLoader);
    getStatus(): Promise<{
        message: string;
        timestamp: string;
    }>;
}
