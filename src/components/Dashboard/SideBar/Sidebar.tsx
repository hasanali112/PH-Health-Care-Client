import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItem";
import { UserRole } from "@/type/common";
import SidebarItem from "./SidebarItem";
import { getTokenFormLocalStorage } from "@/services/auth.services";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [useRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getTokenFormLocalStorage();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h1">
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(useRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
