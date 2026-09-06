import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usuarios from "./usuarios.js";

dotenv.config();

console.log("MONGO_URI existe?", !!process.env.MONGO_URI);

const app = express();
const PORT = 3000;

app.use(express.json());

// CONECTAR AO MONGODB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Deu erro ao conectar com o MongoDB:", error);
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

// INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});