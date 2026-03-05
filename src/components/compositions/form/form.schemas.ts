// Dependencies
import z from "zod";

export const formSchemas = z.object({
    tenantName: z.string().trim().min(1, "O nome do locatário é obrigatório."),

    tenantCpf: z.string().trim().min(1, "O CPF do locatário é obrigatório."),

    rentalPrice: z.string().trim().min(1, "O valor do aluguel é obrigatório."),

    expirationDate: z
        .string()
        .trim()
        .min(1, "A data de vencimento do aluguel é obrigatória.")
        .max(2, "Formato inválido, informe somente o dia, por exemplo: 15"),
});
