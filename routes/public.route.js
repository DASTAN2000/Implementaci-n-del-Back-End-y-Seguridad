/*
import { Router } from "express";
import path from "path";

const router = Router()

const __dirname = import.meta.dirname
const publicPath = path.join(__dirname, '../public')

router.get('/login', (req, res) =>{
    res.sendFile(publicPath + "/login.html")
})

router.get('/profile', (req, res) =>{
    res.sendFile(publicPath + "/profile.html")
})

export default router
*/
// codigo de chat a ver si funciona
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

// Configuración de __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../public');

router.get('/login', (req, res) => {
    res.sendFile(publicPath + "/login.html");
});

router.get('/profile', (req, res) => {
    res.sendFile(publicPath + "/profile.html");
});

export default router;
//funciona