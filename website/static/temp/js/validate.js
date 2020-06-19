import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import zh from'vee-validate/dist/locale/zh_CN'

Validator.addLocale(zh);
const config = {
    locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

const dict = {
    zh_CN: {
        messages: {
            username: (field)=> '请输入'+field,
            required: (field)=> '请输入'+field
        },
        attributes:{
            username:"用户名",
            password:"密码"
        }
    }
};

Validator.updateDictionary(dict);