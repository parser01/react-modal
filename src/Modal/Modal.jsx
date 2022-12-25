import "./modal.css";

const Modal = ({ isActive, setIsActive, children }) => {
	if (isActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return (
		<div
			className={isActive ? "modal modal_active" : "modal"}
			onClick={() => setIsActive(false)}
		>
			<div className="modal__box" onClick={(e) => e.stopPropagation()}>
				<div className="modal__content">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
