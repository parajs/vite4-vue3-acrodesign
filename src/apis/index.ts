import type { KVObject } from "@/types"

const apiPrefix = getEnvValue('VITE_API_PREFIX')

export function indexlist(params?: KVObject) {
    return useAxiosHttp(`${apiPrefix}/subject/index/list`, {
        method: 'get',
        params: params
    })

}