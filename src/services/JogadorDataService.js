
import http from "../http-common";

class JogadorDataService {

    async authenticate(data){

        console.log('JogadorDataService.authenticate: ', data);
        const response = await http.post(`/jogador/login`, data);
        return response;
    }

    async get(nickname){

        console.log('JogadorDataService.get: ', nickname);
        return await http.get('/jogador/'+nickname);
    }

    async list(){

        console.log('JogadorDataService.list: ');
        return await http.get(`/jogador/list`);
    }

    async delete(nickname){

        console.log('JogadorDataService.delete: ', nickname);
        return await http.get(`/jogador/delete/`+nickname);
    }

    async update(data){

        console.log('JogadorDataService.update: ', data);
        return await http.post(`/update/jogador`, data);
    }
    
    async create(data){

        console.log('JogadorDataService.create: ', data);
        return await http.post(`/jogador/store`, data);
    }  
 
}

export default new JogadorDataService();
