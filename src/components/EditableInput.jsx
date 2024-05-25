import React, { useState, useRef, useEffect } from "react";

export default function EditableInput() {
    const [isInput, setIsInput] = useState(false);
    const inputRef = useRef(null);

    const handleDoubleClick = () => {
        setIsInput(true);
    };

    const handleBlur = () => {
        setIsInput(false);
    };

    useEffect(() => {
        if (isInput && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isInput]);

    return (
        <>
            {isInput ? (
                <input
                    ref={inputRef}
                    onBlur={handleBlur}
                    defaultValue="Double-click to edit"
                />
            ) : (
                <p onDoubleClick={handleDoubleClick}>Double-click to edit</p>
            )}
        </>
    );
}
