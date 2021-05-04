// storage 封装
const STORAGE_KEY = 'mall'
export default {
    // input 必须是一个 object
    setItem(sessionValue){
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionValue))
    },
    // out put 也肯定是一个 object
    getItem(){
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(){
        sessionStorage.removeItem(STORAGE_KEY)
    }
}