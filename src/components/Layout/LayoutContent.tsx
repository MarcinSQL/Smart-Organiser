import { Container, Toolbar, Box, Skeleton } from "@mui/material";
import Copyright from "../Copyright";
import { ILayoutContent } from "modules/types/dashboard/layout.types";

import classes from "./classes/Layout.module.css";
import {
  useGetProfileAvatarQuery,
  useGetProfileDataQuery,
} from "modules/logic/dashboard/queries";

export default function LayoutContent(props: ILayoutContent) {
  const { isLoading } = useGetProfileDataQuery();
  const { isLoading: avatarIsLoading } = useGetProfileAvatarQuery();

  return (
    <Box component="main" className={classes["layout__content"]}>
      <Toolbar />
      <Container>
        {isLoading || avatarIsLoading ? (
          <Skeleton variant="rounded" className={classes["layout__content__skeleton"]} />
        ) : (
          props.children
        )}

        <Copyright />
      </Container>
    </Box>
  );
}
