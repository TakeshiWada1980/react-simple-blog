import { z } from "zod";

const requiredMsg = "入力が必須の項目です。";
export const validationSchema = z.object({
  name: z
    .string()
    .min(1, requiredMsg)
    .max(30, "30文字以内で入力してください。"),
  email: z
    .string()
    .min(1, requiredMsg)
    .email("メールアドレスの形式で入力してください。"),
  message: z
    .string()
    .min(1, requiredMsg)
    .max(500, "500文字以内で入力してください。"),
});
