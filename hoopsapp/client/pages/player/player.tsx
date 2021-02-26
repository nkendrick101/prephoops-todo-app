
import {Player } from '../../components'

/* PlayerStats, PlayerList */


interface Player {
    id: number
    name: string
    answer: string
    points:  number
    user_id: number
}
const fetchPlayers = async (): Promise<Array<Player> | string> => {
    const api = ''
    try {
        const response = await fetch(api)
        const { data } = await response.json()
        return data
    } catch (error) {
        if (error) {
            return error.message
        }
    }
}
const baseApi = '';
const userApi = '';
const fetchAllPlayers = async (url: string): Promise<Player[]> => {
    const response = await fetch(url)
    const { data } = await response.json()
    return data
}

const fetchPlayer = async (url: string, id: number): Promise<Record<string, string>> => {
    const response = await fetch(`${url}/${id}`)
    const { data } = await response.json()
    return data
}


const runAsyncFunctions = async () => {
    try {
        const players = await fetchAllPlayers(baseApi)
        Promise.all(
            players.map(async user => {
                // eslint-disable-next-line no-unused-vars
                const name = await fetchPlayer(userApi, user.id)

            })
        )
    } catch (error) {
        console.log(error)
    }
}
runAsyncFunctions()

// eslint-disable-next-line no-empty-pattern
function player({ }: Player) {
    return (
        <div />
    );
};

export default player;
