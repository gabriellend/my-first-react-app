import React, { useState, useRef, useEffect } from 'react';

export default function EditableInput({ placeholder }) {
  const [isInput, setIsInput] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

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
          type="text"
          value={value ? value : placeholder}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => (e.key === 'Enter' ? setIsInput(false) : null)}       
          onBlur={() => setIsInput(false)}
        />
      ) : (
        <p onDoubleClick={() => setIsInput(true)}>{value ? value : placeholder}</p>
      )}
    </>
  );
}
