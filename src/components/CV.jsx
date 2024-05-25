import Section from './Section';
import '@/styles/CV.css';

export const CV = () => {
    return (
        <div className='cv'>
           <Section title="" initialInputNumber={4} canAddInputs={false} />
           <Section title="Education" initialInputNumber={4} />
           <Section title="Experience" initialInputNumber={5} />
        </div>
    )
}