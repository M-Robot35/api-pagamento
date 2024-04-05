import { UserPrisma } from "../core/model/UserPrisma";
import { UserSearch } from "../core/database/interface-model/User.entity";
//
import { PaymentRepository } from "../core/database/interface-model/Payment.Repository";
import { PaymentPrisma } from "../core/model/PaymentPrisma";
//
import ResponseRequest,{statusResponse} from "../helpers/ResponseRequest";


export const ReqRes = ResponseRequest

// database
export async function Database(){
  return new UserSearch(new UserPrisma)
}

// busca usuario por id
export const findUserId = async (id:string|number)=>{{
  const x = await Database()
  return x.findById(id)  
} }

// salva os dados de pagamento no Bd
export const paymentRespository = new PaymentRepository(new PaymentPrisma)




/**
 * Implementar algo para passar aos filhos
 */
class ControllerBase {  

  constructor(){

  }

}

export default ControllerBase
