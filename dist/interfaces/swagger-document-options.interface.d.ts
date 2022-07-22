export declare type OperationIdFactory = ((controllerKey: string, methodKey: string, pathVersionKey?: string) => string) | ((controllerKey: string, methodKey: string, pathVersionKey?: string) => string);
export interface SwaggerDocumentOptions {
    include?: Function[];
    extraModels?: Function[];
    ignoreGlobalPrefix?: boolean;
    deepScanRoutes?: boolean;
    includeOnlyVersion?: string;
    operationIdFactory?: OperationIdFactory;
}
