import { TagHomeListContainer, TagContainer } from './styles'
import { useQuery } from '@apollo/client'
import { LOAD_TAG } from '../../../api/Tags'
import { useEffect, useState } from 'react'
import { Tag } from '../../../models/Tag'
import Loading from '../../shared/Loading'
import { client } from '../../../App'
import { colorByBackground } from '../../../utilities/colorByBackground'

export default function TagHomeList() {
    const [tags, setTags] = useState<Tag[]>([])

    const { error, loading, data } = useQuery(LOAD_TAG)

    useEffect(() => {
        if (data) {
            setTags(data.getAllTags)
        }
    }, [data])

    useEffect(() => {
        refetchLoadTags()
    }, [])

    const refetchLoadTags = async () => {
        await client.refetchQueries({
            include: [LOAD_TAG],
        });
    }

    const tagsList = tags.map(tag => {
        const color = colorByBackground(tag.color)
        
        return (
            <TagContainer key={tag.id} background={tag.color} color={color}>
                <p>{tag.name}</p>
            </TagContainer>
        )
    })

    if (loading) return <Loading />

    return (
        <TagHomeListContainer>
            <h2>Categories</h2>
            <div className='tags'>
                {tagsList}
            </div>
        </TagHomeListContainer>
    )
}