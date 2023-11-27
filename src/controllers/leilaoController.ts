import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import leilaoService from "../services/leilaoService";

class leilaoController{

    constructor(){}

    async criarLeilao(req: Request, res: Response){
        const dados: Prisma.leilaoCreateInput = req.body;
        
        if(dados.dono !== "" && dados.lances !== ""){
            const novoleilao = await leilaoService.criarLeilao(dados)
            res.status(200).json({
                status: 'ok',
                novoleilao: novoleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeiloes(req: Request, res: Response){
        const leiloes = leilaoService.listarLeiloes();

        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
    }

    async updateLeiloes(req: Request, res: Response){
        const dados: Prisma.leilaoCreateInput = req.body;
        const leiloes = leilaoService.atualizarLeilao

        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
    }

    async deleteLeiloes(req: Request, res: Response){
        const dados: Prisma.leilaoCreateInput = req.body;
        const leilao = leilaoService.deletarLeilao
        res.status(200).json({
            status: 'ok',
            leilao: leilao
        })
    }
}

export default new leilaoController;