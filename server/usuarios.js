import mongoose from "mongoose";
// meu modelo
const Usuarios = mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    tipo: String,
    telefone: String,
    foto: String,
    ativo: Boolean,
    createdAt: Date,

})
export default mongoose.model("Usuarios", Usuarios);