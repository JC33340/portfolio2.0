import JavaScript from './techsvg/JavaScript'
import TypeScript from './techsvg/TypeScript'
import React from './techsvg/React'
import Node from './techsvg/Node'
import Next from './techsvg/Next'
import HTML from './techsvg/HTML'
import CSS from './techsvg/CSS'
import Tailwind from './techsvg/Tailwind'
import Python from './techsvg/Python'
import Django from './techsvg/Django'
import MySQL from './techsvg/MySQL'
import type { technologyType } from './TechnologyIcon'

const indexObject: { name: technologyType; svg: React.ReactNode }[] = [
    { name: 'JavaScript', svg: <JavaScript /> },
    { name: 'TypeScript', svg: <TypeScript /> },
    { name: 'React', svg: <React /> },
    { name: 'NodeJS', svg: <Node /> },
    { name: 'NextJS', svg: <Next /> },
    { name: 'HTML', svg: <HTML /> },
    { name: 'CSS', svg: <CSS /> },
    { name: 'Tailwind', svg: <Tailwind /> },
    { name: 'Python', svg: <Python /> },
    { name: 'Django', svg: <Django /> },
    { name: 'MySQL', svg: <MySQL /> },
]

export default indexObject
