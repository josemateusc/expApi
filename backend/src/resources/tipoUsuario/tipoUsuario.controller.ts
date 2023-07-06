import { Request, Response } from 'express';
import { listTiposUsuarios } from './tipoUsuario.service';

const index = async (req: Request, res: Response) => {
  try {
    const tipos = await listTiposUsuarios();
    res.send(200).json(tipos);
  } catch (e) {
    res.send(500).json(e);
  }
};

export default { index };
