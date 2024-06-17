import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./utils/contactFormValidationSchema";
import { FormData, FormSubmissionResponse } from "./types";
import { contactApiEndpoint } from "./envConfig";
import { delayedPostFetcher } from "./utils/delayedPostFetcher";
import { FetchLoading } from "./FetchLoading";
import styles from "./styles/Contact.module.css";
import cn from "classnames";

const fetcher = delayedPostFetcher<FormData, FormSubmissionResponse>(3000);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // prettier-ignore
  const {
    reset, register, handleSubmit, formState: { errors },
  } = useForm<FormData>({ mode: "onChange",resolver: zodResolver(validationSchema)});

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // console.log(JSON.stringify(data)); // フォームの入力内容を確認するためのデバッグ用
    try {
      const res = await fetcher(contactApiEndpoint, data);
      if (res.message === "success!") {
        console.log(`フォーム送信成功 \n${JSON.stringify(res)}`);
        alert("フォーム送信が完了しました。");
        reset();
      } else {
        console.error(`フォーム送信失敗 \n${JSON.stringify(res)}`);
      }
    } catch (error) {
      console.error(`フォーム送信に失敗しました。${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold">お問合わせフォーム</h1>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* 名前 */}
        <div className={styles.container}>
          <label htmlFor="name" className={styles.label}>
            お名前
          </label>
          <div className={styles.subContainer}>
            <input
              {...register("name")}
              id="name"
              type="text"
              className={cn(styles.input, isSubmitting && styles.disabledInput)}
              placeholder="お名前を入力してください。"
              disabled={isSubmitting}
            />
            <p className={styles.validationMessage}>{errors.name?.message}</p>
          </div>
        </div>
        {/* メールアドレス */}
        <div className={styles.container}>
          <label htmlFor="email" className={styles.label}>
            メールアドレス
          </label>
          <div className={styles.subContainer}>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={cn(styles.input, isSubmitting && styles.disabledInput)}
              placeholder="メールアドレスを入力してください。"
              disabled={isSubmitting}
            />
            <p className={styles.validationMessage}>{errors.email?.message}</p>
          </div>
        </div>
        {/* 本文 */}
        <div className={styles.container}>
          <label htmlFor="message" className={styles.label}>
            本文
          </label>
          <div className={styles.subContainer}>
            <textarea
              {...register("message")}
              id="message"
              className={cn(styles.input, isSubmitting && styles.disabledInput)}
              rows={8}
              placeholder="本文を入力してください。"
              disabled={isSubmitting}
            />
            <p className={styles.validationMessage}>
              {errors.message?.message}
            </p>
          </div>
        </div>
        {/* クリアボタンと送信ボタン */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              styles.button,
              styles.submitButton,
              isSubmitting && styles.disabledButton
            )}
          >
            送信
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            className={cn(
              styles.button,
              styles.clearButton,
              isSubmitting && styles.disabledButton
            )}
            onClick={handleReset}
          >
            クリア
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        {isSubmitting && <FetchLoading msg="フォームの情報を送信中です..." />}
      </div>
    </div>
  );
};

export default Contact;
