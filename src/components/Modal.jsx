import { Button } from "./Button";

export const Modal = ({ title, description }) => {
  return (
    <dialog id="my_modal_1" className="modal-box">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="py-4">{description}</p>
      <div className="modal-action">
        <Button
          children={"Close"}
          onClick={() => document.getElementById("my_modal_1").close()}
        />
      </div>
    </dialog>
  );
};
