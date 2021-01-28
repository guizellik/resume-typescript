import React from 'react'
import Contact from './Contact'
import Education from './Education'
import { Educacao } from '../../types'
import { Contato } from '../../types'

interface SidebarProps {
    contatos: Contato[],
    educacao: Educacao[]
}

const Sidebar = (props: SidebarProps) => {
    const { contatos, educacao } = props

    return (
        <aside>
            < Contact contatos={contatos} />
            < Education educacao={educacao}/>
        </aside>
    )
}

export default Sidebar