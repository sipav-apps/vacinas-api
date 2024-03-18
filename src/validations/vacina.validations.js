import * as yup from "yup";

export const vacinaValidation = yup.object({
  nome: yup.string().required(),
  id_vacina: yup.number().nullable(),
  qtd_reforco: yup.number().required(),
  idade_primeira_dose: yup.number().required(),
  periodicidade: yup.number().nullable(),
  informacao: yup.string().required(),
});
