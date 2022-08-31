import { TagHomeListContainer, TagContainer } from './styles'
import { useQuery } from '@apollo/client'
import { LOAD_TAG } from '../../../api/Tags'
import { useEffect, useState } from 'react'
import { Tag } from '../../../models/Tag'
import Loading from '../../shared/Loading'
import { client } from '../../../App'

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
        
        const luminance = (0.299 * parseInt(tag.color.slice(1,3), 16) + 0.587 * parseInt(tag.color.slice(3,5), 16) + 0.114 * parseInt(tag.color.slice(5), 16))/255;
        let color = "#FFFFFF"
        if(luminance > 0.5){
            color = "#000000"
        }

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