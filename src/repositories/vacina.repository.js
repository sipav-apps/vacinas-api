import { prisma } from "../services/prisma.js";
import { nulifyObjectStrings } from "./util.js";

export const createVacina = async (data) => {
  data = nulifyObjectStrings(data);
  const vacina = await prisma.vacina.create(data);
  return vacina;
};

