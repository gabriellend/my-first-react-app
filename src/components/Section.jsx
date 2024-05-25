import '@/styles/Section.css';
import EditableInput from './EditableInput';

export default function Section({title, initialInputNumber, canAddInputs = true}) {
    const sectionStyle = `section ${title === 'Experience' ? 'experience-section' : ''}`;
    const inputsArray = Array.from({length: initialInputNumber}, (_, index) => index);

    return (
        <div className={sectionStyle}>
           <h3>{title}</h3>
            {inputsArray.map((_, index) =>
                <EditableInput key={index} />
            )}
        </div>
    );
}