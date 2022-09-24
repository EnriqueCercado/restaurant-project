import Config from './Config'

export default{
    getResumeTable(number){
        return Config.get(`table/resume/${number}`)
    },

    getPDF(){
        return Config.get(`factura/pdf`)
    },

    getXML(){
        return Config.get(`factura/xml`)
    },

    get(param){
        const queryString = window.location.search

        const params = new URLSearchParams(queryString)
        
        return params.get(param)
    },

    has(param){
        const queryString = window.location.search

        const params = new URLSearchParams(queryString)
            
        if(params.has(param)){
                return true
        } else{
            return false
        }
    },

    delete(param){
        const queryString = window.location.search
        const params = new URLSearchParams(queryString)
        params.delete(param)
        params.toString()
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    },

    set(param, value){
        const queryString = window.location.search
        const params = new URLSearchParams(queryString)
        params.set(param, value)
        params.toString()
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    },

    append(param, value){
        const queryString = window.location.search
        const params = new URLSearchParams(queryString)
        params.append(param, value)
        params.toString()
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    }
}