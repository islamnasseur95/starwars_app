import globalApi from "../../api";

export const getStarWarsFilmsApi = (episode_id: number) => {
    globalApi.post('/films' , {
        episode_id,
        isSecured: true
    })
}