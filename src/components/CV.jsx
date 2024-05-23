import HeaderSection from '@/components/header/HeaderSection';
import EducationSection from '@/components/education/EducationSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import '@/styles/CV.css';

export const CV = () => {
    return (
        <div className='cv'>
            <HeaderSection />
            <EducationSection />
            <ExperienceSection />
        </div>
    )
}