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

    getTable(){
        const queryString = window.location.search

        const params = new URLSearchParams(queryString)
        
        return params.get('mesa')
    }
}