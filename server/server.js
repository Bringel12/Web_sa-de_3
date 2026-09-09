import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usuarios from "./usuarios.js";
import cors from "cors";

dotenv.config();

console.log("MONGO_URI existe?", !!process.env.MONGO_URI);

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());


// CONECTAR AO MONGODB
const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Conectado ao MongoDB");

    } catch (error) {

        console.error(
            "Deu erro ao conectar com o MongoDB:",
            error
        );

    }
};

connectDB();


// PEGAR TODOS OS USUÁRIOS
app.get("/usuarios", async (req, res) => {

    try {

        const usuariosBanco = await usuarios.find();

        res.json(usuariosBanco);

    } catch (error) {

        res.status(500).json({
            error: "Erro ao buscar usuários",
            detalhes: error.message
        });

    }

});


// LOGIN
app.post("/login", async (req, res) => {

    try {

        const { email, senha } = req.body;

        const usuario = await usuarios.findOne({
            email: email
        });

        if (!usuario) {

            return res.status(401).json({
                sucesso: false,
                mensagem: "E-mail ou senha incorretos"
            });

        }

        if (usuario.senha !== senha) {

            return res.status(401).json({
                sucesso: false,
                mensagem: "E-mail ou senha incorretos"
            });

        }

        res.json({

            sucesso: true,

            mensagem: "Login realizado com sucesso",

            usuario: {
                id: usuario._id,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }

        });

    } catch (error) {

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao realizar login",
            detalhes: error.message
        });

    }

});


// INICIAR SERVIDOR
app.listen(PORT, () => {

    console.log(
        `O servidor está rodando na porta ${PORT}`
    );

});