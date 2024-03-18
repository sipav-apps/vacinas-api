import { doencaValidation } from "../validations/doenca.validations.js";
import { createDoenca } from "../repositories/doenca.repository.js";

export const create = async (req, res) => {
  try {
    await doencaValidation.validate(req.body);
    const doenca = await createDoenca({ data: req.body });
    res.status(201).json(doenca);
    return;
  } catch (e) {
    res.status(400).json(e);
    return;
  }
};
