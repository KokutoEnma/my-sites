
import Parallax from 'views/components/Parallax'
import TitleSection from './TitleSection'
import BlogListSection from './BlogListSection'


export default function BlogScreen() {

    return (
        <>
            <Parallax name='Blog' />
            <TitleSection />
            <BlogListSection />
        </>
    )
}