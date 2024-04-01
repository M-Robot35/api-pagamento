import fs, { readFileSync} from 'fs'


export const readFile = async (path:string, data:any) => {
    const file = await readFileSync(path)
    return file
}