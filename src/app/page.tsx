import { Textarea, FormControl, FormLabel, FormErrorMessage, Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  textarea: string
}

export default function Home() {
  // useFormフックの初期化
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // フォーム送信時の処理
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h1>必須項目</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.textarea}>
          <Textarea
            id="textarea"
            placeholder="入力してください"
            {...register("textarea", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {!!errors.textarea && !!errors.textarea.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="blue">
          出力値を確認
        </Button>
      </form>
    </>
  );
}