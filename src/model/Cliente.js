import {Schema, model} from 'mongoose';

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    cpf_cnpj: {
        type: Number,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
    cep: {
        type: Number,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

export default model('Cliente', ClienteSchema);