import {
    HttpServiceHeaders,
    HttpServiceParams,
} from '../../domain/http/HttpService'

export class HttpRequest {
    static async execute<T>({
        url,
        body,
        headers,
        method,
        responseParser,
    }: HttpServiceParams): Promise<T> {
        try {
            const response = await fetch(url, {
                method,
                headers: this.headersParser(headers),
                body,
            })
            const result = await response.text()
            if (responseParser === 'JSON') {
                return JSON.parse(result) as T
            }

            return result as T
        } catch (error) {
            throw error
        }
    }

    private static headersParser(headers: HttpServiceHeaders[]) {
        const values = headers.map(({ name, value }): [string, string] => {
            return [name, String(value)]
        })

        return new Headers(values)
    }
}
