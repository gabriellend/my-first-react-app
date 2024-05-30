import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '@/styles/Section.css';
import EditableInput from '@/components/EditableInput';
import Button from '@/components/Button';

export default function Section({ title, initialInputNumber }) {
  const [listItems, setListItems] = useState([{ id: uuid() }]);
  console.log(listItems);
  const sectionStyle = `section ${
    title === 'Header'
      ? 'header-section'
      : title === 'Education'
        ? 'education-section'
        : 'experience-section'
  }`;
  const inputsArray = Array.from(
    {
      length: initialInputNumber,
    },
    (_, index) => index,
  );
  const placeholders =
    title === 'Header'
      ? ['Address', 'Phone', 'Email']
      : title === 'Education'
        ? ['School and Location', 'Dates']
        : ['Role and Company', 'Dates'];

  const addLine = () => {
    setListItems(prevState => [...prevState, { id: uuid() }]);
  };

  const deleteLine = id => {
    setListItems(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <div className={sectionStyle}>
      {title === 'Header' ? (
          <h1 className="name">
            <EditableInput placeholder="Name" />
          </h1>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      <div className="info">
        {inputsArray.map((_, index) => (
          <EditableInput placeholder={placeholders[index]} />
        ))}
      </div>
      {title !== 'Header' && (
        <div>
          <ul>
            {listItems.map(item => (
              <li key={item.id}>
                <div className="list-item">
                  <EditableInput
                    placeholder={'Describe your accomplistments'}
                  />
                  <Button
                    action="delete"
                    deleteLine={() => deleteLine(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <Button action={'add'} addLine={addLine} />
        </div>
      )}
    </div>
  );
}
