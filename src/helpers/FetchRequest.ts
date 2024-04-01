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
        this.autorization = option['autorization'];

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

    }

    patch(){

    }

    delete(id: string): void {
        
    }

    update(id: string): void {
        
    }
}