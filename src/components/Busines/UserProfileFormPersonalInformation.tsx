import { LoadingButton } from "@mui/lab";
import { Container, Popover, Grid } from "@mui/material";
import TextInput from "components/UI/TextInput";
import { TextFieldSize } from "components/UI/TextInput";
import useUserProfileFormPersonalInformation from "modules/logic/dashboard/useUserProfileFormPersonalInformation";
import { IUserProfileForms } from "modules/types/dashboard/userProfile.types";

export default function UserProfileFormPersonalINformation(
  props: IUserProfileForms
) {
  const { popoverId, open, anchorEl, onClose } = props;
  const { register, control, handleSubmit, onSubmit, isLoading } =
    useUserProfileFormPersonalInformation();
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
        <Grid container spacing={2} sx={{ pt: 2, pb: 2 }}>
          <Grid item xs={4}>
            <TextInput
              control={control}
              type="text"
              required
              size={TextFieldSize.small}
              label="Imię"
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={8}>
            <TextInput
              control={control}
              type="text"
              required
              size={TextFieldSize.small}
              label="Nazwisko"
              {...register("surname", { required: true })}
            />
          </Grid>
        </Grid>
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
        >
          <span>Edytuj</span>
        </LoadingButton>
      </Container>
    </Popover>
  );
}
