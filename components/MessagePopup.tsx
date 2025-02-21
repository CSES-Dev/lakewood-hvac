import { X } from "lucide-react";
import { useEffect, useState } from "react";

type ConfirmationPopupProps = {
    title: string;
    message: string;
    onClose: () => void;
};

function MessagePopup({ title, message, onClose }: ConfirmationPopupProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 200);

        const fadeOutTimer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 200);
        }, 10000);

        return () => {
            clearTimeout(fadeOutTimer);
        };
    }, [onClose]);

    return (
        <div
            className={`fixed top-[19vh] left-0 right-0 px-16 max-md:px-5 z-48 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="bg-input-background bg-opacity-75 text-[#1E1E1E] p-6 rounded-2xl backdrop-blur-md shadow-lg">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-[#1E1E1E] font-bold">
                        <X size={24} />
                    </button>
                </div>
                <p className="mt-3 text-lg">{message}</p>
            </div>
        </div>
    );
}

export default MessagePopup;
