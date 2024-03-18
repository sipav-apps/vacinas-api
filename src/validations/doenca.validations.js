import * as yup from "yup";

export const doencaValidation = yup.object({
  nome: yup.string().required(),
  id_doencao: yup.number().nullable(),
  informacao: yup.string().required(),
});
