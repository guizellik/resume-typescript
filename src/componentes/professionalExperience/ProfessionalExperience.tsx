import React from 'react'
import { Experiencia } from '../../types';

interface ProfessionalExperienceProps {
    experienceList: Experiencia[]
}

const ProfessionalExperience = (props: ProfessionalExperienceProps) => {
    const {experienceList} = props;

    return (
        <>
            <div className="experience">
                <h2>Professional Education</h2>
                { experienceList.map((item) => {
                        const {cargo, periodo, empresa, local, conteudo} = item
                        return (
                            <div className="experience-item">
                                <div>
                                    <h4>{cargo}</h4>
                                    <span>{periodo}</span>
                                    <strong>{empresa}</strong>
                                    <span>{local}</span>
                                </div>
                                <p>
                                    {conteudo}
                                </p>
                            </div>
                        )

                    }
                )}
            </div>
        </>
    )
}

export default ProfessionalExperience