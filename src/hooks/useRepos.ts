import { useQuery} from '@tanstack/react-query'
import api from '../api/metasApi'
import { Imetas } from './types'

async function fetchRepos() {
    const { data } = await api.get<Imetas[]>('/api/metas');
    return data;
}

export function useFetchRepositories() {
    return useQuery(['repos'], fetchRepos);
}
