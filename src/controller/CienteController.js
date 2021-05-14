import Cliente from '../model/Cliente'

class ClineteController{
    async index(req, res) {
        try{
            const response = await Cliente.find({ ...req.query });

            return res.json(response);
        }catch (erro) {
            return res.status(400).json({ error: erro.message });
        }
    }

    async show(req, res) {
        const {id} = req.params;

        try{
            const response = await Cliente.findOne({
                _id: id,
                ...req.query,
            });

            return res.json(response);
        } catch (erro) {
            return res.status(400).json({ error: erro.message });
        }
    }

    async store(req, res) { 
        const emailExiste = await Cliente.findOne({ email: req.body.email });

        if(emailExiste)
            return res.status(400).json({ error: 'Este email já foi cadastrado no sistema.' });
        
        try{    
            const response = await Cliente.create(req.body);

            return res.json(response);            
        }catch(erro){
            return res.json({ error: erro.message })
        }
    }

    async destroy(req, res) {
        const {id} = req.params;

        try {
            await Cliente.findByIdAndDelete({ _id: id });

            return res.json({message: 'Cliente deletado com sucesso!'})
        }catch (erro) {
            return res.json({ error: erro.message })
        }
    }
}

export default new ClineteController();