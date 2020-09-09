interface IJSONResponse<T> {
    success: boolean;
    error: number;
    message: string;
    data: T;
}

export interface IResponse<T>{
    data: IJSONResponse<T>
    limit?: number;
    page?: number;
    start?: number;
    total?: number;
}


export interface IError {
    code: number;
    message: string;
}

export interface IAppStore {
    isAuth: boolean;
    setAuth(value: boolean): void;
}
