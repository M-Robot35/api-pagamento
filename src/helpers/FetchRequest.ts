import axios from "axios";

interface FetchInterface{
    autorization?:string|undefined,
    body?:any
}

export class FetchRequest {
    private url: string;
    private autorization: string | undefined;
    private body:any


    constructor(url:string,option:FetchInterface){
        this.url = url;
        this.autorization = option['autorization']??null;
        this.body = option['body']??null

        this.checked()
    }    

    private checked(){
        const urlRegex= /^https?:\/\//g
        
        if(!urlRegex.test(this.url)){
            throw new Error('URL inválida..!')
        }        
    }

    async get(): Promise<any>{
        const response = await axios.get(this.url,{data: this.body?? null,
            headers: {
            'Authorization': this.autorization ? `Bearer ${this.autorization}` : null
            }
        })        
        return await response.data
     }

    async post(){
        const response = await axios.post(this.url,{data: this.body?? null,
            headers: {
            'Authorization': this.autorization ? `Bearer ${this.autorization}` : null
        }})
        return response.data
    }

    put(){
        throw  new Error('Não implementado')
    }

    patch(){
        throw  new Error('Não implementado')
    }

    delete(id: string): void {
        throw  new Error('Não implementado')
    }

    update(id: string): void {
        throw  new Error('Não implementado')
    }
}