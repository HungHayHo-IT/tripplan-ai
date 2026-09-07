import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { usegoogleAuth } from "../../services/authApi";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";

const LoginDialog = ({ open, onClose, onLoginSuccess }) => {
  const handleLogin = usegoogleAuth({
    onSuccess: () => {
      onClose();
      onLoginSuccess?.();
      toast.success("Login success");
    },
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] p-6">
        <DialogHeader className="space-y-2 items-center text-center">
          <DialogTitle className="text-xl font-semibold">Đăng nhập</DialogTitle>
          <DialogDescription className="text-sm text-gray-500 leading-relaxed">
            Đăng nhập để mở khóa các lịch trình do AI đề xuất và lưu kế hoạch
            của bạn.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
        </div>

        <DialogFooter className="grid grid-cols-1 gap-3 mt-4">
          {/* <Button type="submit" className="w-full rounded-md" disabled={true}>
            Login
          </Button> */}
          <Button
            onClick={handleLogin}
            type="submit"
            className="w-full rounded-md border border-gray-300 bg-white text-gray-700 
                 flex items-center justify-center gap-3 py-2.5
                 font-medium shadow-sm
                 hover:bg-gray-50 hover:shadow-md
                 active:scale-[0.98]
                 transition-all duration-150"
          >
            <FcGoogle className="text-xl" />
            <span>Đăng nhập với Google</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
