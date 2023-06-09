
/**
 * Receber code(string) = Redirecionar o Usuário para autorizar o git
 * Recuperar o access_token no github = enviar credenciais do app(id e secret) para git com codigo recebido recebe token do git
 * Recuperar infos do user no github = com o token acessar api e obter dados
 * Verificar se o usuário existe no DB
 * --- SIM = Gera um Token
 * --- NAO = Cria no DB, Gera um token 
 * Retornar o Token com as infos do user
 */
import axios from "axios"
import prismaClient from "../prisma"
import { sign } from "jsonwebtoken"

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


        const { login, id, avatar_url, name } = response.data

        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })

        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    login,
                    avatar_url,
                    name
                }
            })
        }

        const token = sign({
            user: {
                github_id: user.github_id,
                avatar_url: user.avatar_url,
                id: user.id,
            }
        }, process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1H'
            }
        )

        return { token, user }

    }
}

export { AuthenticateUserService }
