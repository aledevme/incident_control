const incidentController = {} 
const Incident = require('../models/Incident.model')
const Store = require('../models/Store.model')

incidentController.getIncidents = async (req, res) =>{
    try {
        const res = await Incident.find()

        res.send(res)
    } catch (error) {
        
    }
} 
incidentController.saveIncident = async (req, res) => {
    try {
        const { name, observation, employee, store} = req.body
        
        const newIncident = new Incident({
            name : name, 
            observation : observation, 
            employee : employee, 
            store : store
        })

        await newIncident.save()

        await Store.findByIdAndUpdate(store, {
            $push:{
                incidents:newIncident
            }
        })

        res.send(newIncident)

    } catch (error) {
        res.send(error)
    }
}


module.exports = incidentController 