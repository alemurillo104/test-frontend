
export interface ClientResponse {
    ok: boolean,
    data: {
        max: number,
        list: ListItemResponse[]
    }
}

export interface ListItemResponse {
    substring: string,
    value: number
}