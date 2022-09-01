import { BsList } from 'react-icons/bs'
import { BreadcrumbContainer, BreadcrumbItem } from './styles'
import {BsChevronRight} from 'react-icons/bs'
interface BreadcrumbProps {
    list: string[]
}

export default function Breadcrumb(props: BreadcrumbProps) {
    return (
        <BreadcrumbContainer>
            {
                props.list.map((item, index) => {
                    if(index < props.list.length - 1){
                        return (
                            <>
                                <BreadcrumbItem key={item}>
                                    <p>{item}</p>
                                    <div className="background"></div>
                                </BreadcrumbItem>
                                <span className="divisor"><BsChevronRight/></span>
                            </>
                        )
                    }else{
                        return (
                            <>
                                <BreadcrumbItem key={item}>
                                <p className="last">{item}</p>
                                <div className="background"></div>
                                </BreadcrumbItem>
                            </>
                        )
                    }
                })
            }
        </BreadcrumbContainer>
    )
}