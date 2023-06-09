
/**
 * Receber code(string)
 * Recuperar o access_token no github
 * Recuperar infos do iser no github
 * Verificar se o usuário existe no DB
 * --- SIM = Gera um Token
 * --- NAO = Cria no DB, Gera um token 
 * Retornar o Token com as infos do user
 */
import axios from "axios"

interface IAccesTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token"
        const { data: accessTokenResponse } = await axios.post<IAccesTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                Accept: "application/json"
            }
        })

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })


        return response.data

    }
}

export { AuthenticateUserService }
