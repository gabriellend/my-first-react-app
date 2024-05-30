import '@/styles/Section.css';
import EditableInput from './EditableInput';

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
          <EditableInput placeholder="Name" />
        </div>
      ) : (
        <h3 className="title">{title}</h3>
      )}
      <div className="info">
        {inputsArray.map((_, index) =>
          title !== 'Header' && index === 1 ? (
            <EditableInput placeholder={placeholders[index]} key={index} />
          ) : (
            <EditableInput placeholder={placeholders[index]} key={index} />
          ),
        )}
      </div>
    </div>
  );
}
