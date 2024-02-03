import { yupResolver } from "@hookform/resolvers/yup";
import { IEditAvatar } from "modules/types/dashboard/userProfile.types";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEditAvatarMutation } from "./mutations";

interface IFormInput {
  img: string;
}

export default function useUserProfileFormAvatar() {
  const mutation = useEditAvatarMutation();

  let userSchema = yup.object().shape({
    img: yup.string().required("Wymagane jest podanie nowego awatara"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IEditAvatar> = (imgSrc) => {
    const URL = imgSrc.img.substring(imgSrc.img.indexOf(",") + 1);

    const img = {
      img: URL,
    };

    mutation.mutate(img);
  };

  return { register, handleSubmit, control, onSubmit };
}
