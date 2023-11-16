import { Button, Container, Popover, Grid } from "@mui/material";
import TextInput from "components/UI/TextInput";
import { TextFieldSize } from "components/UI/TextInput";
import useUserProfileFormPassword from "modules/logic/dashboard/useUserProfileFormPassword";
import { IUserProfileForms } from "modules/types/dashboard/userProfile.types";

export default function UserProfileFormPassword(props: IUserProfileForms) {
  const { popoverId, open, anchorEl, onClose } = props;
  const { register, control, handleSubmit, onSubmit } =
    useUserProfileFormPassword();
  return (
    <Popover
      id={popoverId}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Container component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          type="password"
          required
          size={TextFieldSize.small}
          label="Nowe hasło"
          {...register("password", { required: true })}
        />
        <TextInput
          control={control}
          type="password"
          required
          size={TextFieldSize.small}
          label="Powtórz nowe hasło"
          {...register("confirmPassword", { required: true })}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mb: 2, mt: 2 }}
        >
          Edytuj
        </Button>
      </Container>
    </Popover>
  );
}
