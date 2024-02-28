import Link from "next/link";
import { Button } from "../button";
import Modal from "../modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserNotLoggedInModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Want To Access The Links 🙂"
    >
      <div className="flex flex-col m-2 space-y-4">
        <h2>
          You are not logged in please LogIn to get access of scenepacks and
          youtube tutorial links
        </h2>
        <div className="flex flex-row items-center space-x-5">
          <Link href="/login">
            <Button>LogIn</Button>
          </Link>
          <Link href="/sign-up">
            <Button>SignUp</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default UserNotLoggedInModal;
