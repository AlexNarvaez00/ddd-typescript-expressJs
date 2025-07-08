export type HttpServiceHeaderValue = string | number | boolean

export interface HttpServiceHeaders {
    name: string
    value: HttpServiceHeaderValue
}

export class HttpServiceHeadersFactory {
    public static create(
        name: string,
        value: HttpServiceHeaderValue
    ): HttpServiceHeaders {
        return {
            name,
            value,
        }
    }
}

export interface HttpServiceParams {
    url: string
    headers: HttpServiceHeaders[]
    body?: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    responseParser?: 'JSON' | 'TEXT'
}

export interface HttpService {
    get<T>(params: Omit<HttpServiceParams, 'method'>): Promise<T>
    post<T>(params: Omit<HttpServiceParams, 'method'>): Promise<T>
}
