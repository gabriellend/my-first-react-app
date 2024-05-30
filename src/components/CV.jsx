import Section from './Section';
import '@/styles/CV.css';

export const CV = () => {
    return (
        <div className='cv'>
           <Section title="Header" initialInputNumber={3} />
           <Section title="Education" initialInputNumber={2} />
           <Section title="Experience" initialInputNumber={2} />
        </div>
    )
}