import { prisma } from "../services/prisma.js";
import { nulifyObjectStrings } from "./util.js";

export const createDoenca = async (data) => {
  data = nulifyObjectStrings(data);
  const doenca = await prisma.doenca.create(data);
  return doenca;
};