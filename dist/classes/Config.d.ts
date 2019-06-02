export declare class Config {
    private apiUrl;
    private ua;
    private base64Token;
    private verbose;
    readonly targetUrl: string;
    readonly authToken: string;
    debug: boolean;
    constructor(url: string, user: string, password: string, userAgent?: string);
    getRequest(path: string, parameters?: object): Promise<import("axios").AxiosResponse<any>>;
    postRequest(path: string, data?: object): Promise<import("axios").AxiosResponse<any>>;
}
