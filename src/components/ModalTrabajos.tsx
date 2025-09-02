import React from "react";
import "../styles/components.css";

interface ModalTrabajosProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalTrabajos({ open, onClose, children }: ModalTrabajosProps) {
    if (!open) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};