import ReactDOM from "react-dom";
import Video from "./video";
// import Script from "next/script";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingbottom: "20px",
  overflowY: "scroll",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "0px",
  zIndex: 1000,
};

export default function Modal({ open, content, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="" style={OVERLAY_STYLES} />
      <div
        style={MODAL_STYLES}
        className="bg-black/50 rounded-xl fixed w-full h-full text-white h-screen"
      >
        <div className=" p-4 mt-3">
          <button className="" onClick={onClose}>
            X
          </button>
        </div>
        <div className=" h-full grid content-center relative">
          <div className=" flex justify-center overflow-hidden relative">
            <Video src={content} />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
