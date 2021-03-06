import {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
  getCancelMessage?(): string;
}


export interface ReftrofitResponse<T = any> extends AxiosResponse<T> {
  [key: string]: any;
}
export interface Interceptor {
  handler(
    context: RequestConfig | ReftrofitResponse): RequestConfig | ReftrofitResponse;
}
export function GET(path: string): Function;

export function POST(path: string): Function;

export function PUT(path: string): Function;

export function Del(path: string): Function;

export function Body(path: string): Function;


export function HEAD(path: string): Function;

export function PATCH(path: string): Function;

export function Path(name: string): Function;

export function BaseUrl(name: string): Function;

export function Query(name: string): Function;

export function Header(name: string): Function;

export function Head(name: string): Function;

export function Headers(header: string[]): Function;

export interface ReftrofitError extends AxiosError {
  [key: string]: any;
}

export type ErrorHandler = (rep: ReftrofitError) => void;
declare namespace Retrofit {
  export class RetrofitBuilder {
    public create<T>(target: object): T;
  }

  export class Builder {
    addReqInterceptor(fn: Interceptor): Builder;

    setDebug(flag: boolean): Builder;

    addRespInterceptor(fn: Interceptor): Builder;

    setTimeout(time: number): Builder;

    setBaseUrl(url: string): Builder;

    setHeaders(header: {
      [key: string]: string;
    }): Builder;

    setErrorHandler(handler: ErrorHandler): Builder;

    build(): RetrofitBuilder;
  }
}
export default Retrofit;
