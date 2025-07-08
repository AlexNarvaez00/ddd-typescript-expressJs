import { HttpService, HttpServiceParams } from '../../domain/http/HttpService'
import { HttpRequest } from './HttpRequest'

export class Api implements HttpService {
    async get<T>(params: Omit<HttpServiceParams, 'method'>): Promise<T> {
        return await HttpRequest.execute({
            ...params,
            method: 'GET',
        })
    }
    async post<T>(params: Omit<HttpServiceParams, 'method'>): Promise<T> {
        return await HttpRequest.execute({
            ...params,
            method: 'POST',
        })
    }
}
