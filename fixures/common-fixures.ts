import {test as baseTest} from '../fixures/pom-fixures';
import CommonUtils from '../utils/CommonUtils';


type commonFixuresType = {
    commonUtils : CommonUtils
}
export const test = baseTest.extend<commonFixuresType>({
    commonUtils : async({ },use)=>{
        use(new CommonUtils());
    }
})