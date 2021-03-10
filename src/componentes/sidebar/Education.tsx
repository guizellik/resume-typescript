import React from 'react'
import { Educacao } from '../../types'

interface EducationProps {
    educacao: Educacao[]
}

const Education = (props: EducationProps) => {
    const { educacao } = props;


    return (
        <>
            <div className="sidebar">
                <h3>Education</h3>
                <div className="lista-de-formacao">
                    {
                        educacao.map((item) => (
                            <li key={item.id}>
                                <h4>{item.instituicao}</h4>
                                <p>{item.curso}</p>
                            </li>
                        ))

                    }
                </div>
                </div>
        </>
    )
}

export default Education