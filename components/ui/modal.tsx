import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "./dialog";
  
  interface ModalProps {
      title: string,
      isOpen: boolean;
      onClose: () => void;
      children: React.ReactNode;
  };
  
  const Modal: React.FC<ModalProps> = ({
      title,
      isOpen,
      onClose,
      children
  }) => {
      const onChange = (open: boolean) => {
          if(!open){
              onClose();
          }
      };
  
      return (  
          <Dialog open={isOpen} onOpenChange={onChange} >
              <DialogContent className="w-[330px] md:max-w-fit">
                  <DialogHeader className="flex items-start justify-start md:items-center md:justify-center">
                      <DialogTitle>{title}</DialogTitle>
                  </DialogHeader>
                  <div className="w-[300px] md:w-full">{children}</div>
              </DialogContent>
          </Dialog>
      )
  }
  
  export default Modal;