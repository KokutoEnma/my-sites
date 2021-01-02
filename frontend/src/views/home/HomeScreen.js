import EducationSection from 'views/home/EducationSection'
import ExperienceSection from 'views/home/ExperienceSection'
import Parralax from 'views/components/Parallax'

export default function Screen() {
    return (
        <>
            <Parralax name='Website' />
            <EducationSection />
            <ExperienceSection />
        </>
    )

}