import '@/styles/Section.css';
import EditableInput from '@/components/EditableInput';

export default function Section({
  title,
  initialInputNumber,
}) {
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

  return (
    <div className={sectionStyle}>
      {title === 'Header' ? (
        <div className="name">
          <h1><EditableInput placeholder="Name" /></h1>
        </div>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      <div className="info">
        {inputsArray.map((_, index) =>       
          <EditableInput placeholder={placeholders[index]} key={index} />
        )}
      </div>
      {title !== 'Header' && (
          <ul>
            <li>
              <EditableInput placeholder={'Describe your accomplistments'} /> 
            </li>
          </ul>
        )}
    </div>
  );
}
