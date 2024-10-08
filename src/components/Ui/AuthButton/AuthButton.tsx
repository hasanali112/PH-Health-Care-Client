import {
  getTokenFormLocalStorage,
  removItemFromLocalStorage,
} from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getTokenFormLocalStorage();
  const router = useRouter();

  const handleLogout = () => {
    removItemFromLocalStorage();
    router.refresh();
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          LogIn
        </Button>
      )}
    </>
  );
};

export default AuthButton;
