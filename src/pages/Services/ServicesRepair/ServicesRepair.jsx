import React from 'react'

import './_servicesRepair.scss'

import data from '../../../utils/data/data'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Typography from '@mui/material/Typography';

const titleStyle = {

}

const ServicesRepair = () => {
    return (
        <div className="servicesRepair">
            <Accordion className="servicesRepair__accordeon">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='servicesRepair__summary'
                >
                    <Typography className='servicesRepair__title'>Будівельний етап</Typography>
                </AccordionSummary>
                <AccordionDetails className='servicesRepair__details'>
                    {data?.accordeonStages?.map((accordeonStagesItem, index) => (
                        <div className="serviceRepair__item" key={index}>
                            <div className="serviceRepair__image">
                                <img src={accordeonStagesItem.image} alt="accordeon-image" loading='lazy' />
                            </div>
                            <div className="serviceRepair__text">
                                <span>{accordeonStagesItem.text}</span>
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion className="servicesRepair__accordeon">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-engi"
                >
                    <Typography className='servicesRepair__title'>Інженерні роботи</Typography>
                </AccordionSummary>
                <AccordionDetails className='servicesRepair__details'>
                    {data?.accordeonEngeenier?.map((accordeonEngeenierItem, index) => (
                        <div className="serviceRepair__item" key={index}>
                            <div className="serviceRepair__image">
                                <img src={accordeonEngeenierItem.image} alt="accordeon-image" loading='lazy' />
                            </div>
                            <div className="serviceRepair__text">
                                <span>{accordeonEngeenierItem.text}</span>
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion className="servicesRepair__accordeon">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-engi"
                >
                    <Typography className='servicesRepair__title'>Передчистове оздоблення</Typography>
                </AccordionSummary>
                <AccordionDetails className='servicesRepair__details'>
                    {data?.accordeonPreCleaning?.map((accordeonPreCleaningItem, index) => (
                        <div className="serviceRepair__item" key={index}>
                            <div className="serviceRepair__image">
                                <img src={accordeonPreCleaningItem.image} alt="accordeon-image" loading='lazy' />
                            </div>
                            <div className="serviceRepair__text">
                                <span>{accordeonPreCleaningItem.text}</span>
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion className="servicesRepair__accordeon">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-engi"
                >
                    <Typography className='servicesRepair__title'>Чистове оздоблення</Typography>
                </AccordionSummary>
                <AccordionDetails className='servicesRepair__details'>
                    {data?.accordeonCleaning?.map((accordeonCleaningItem, index) => (
                        <div className="serviceRepair__item" key={index}>
                            <div className="serviceRepair__image">
                                <img src={accordeonCleaningItem.image} alt="accordeon-image" loading='lazy' />
                            </div>
                            <div className="serviceRepair__text">
                                <span>{accordeonCleaningItem.text}</span>
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion className="servicesRepair__accordeon">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-engi"
                >
                    <Typography className='servicesRepair__title'>Фінальний етап</Typography>
                </AccordionSummary>
                <AccordionDetails className='servicesRepair__details'>
                    {data?.accordeonFinish?.map((accordeonFinishItem, index) => (
                        <div className="serviceRepair__item" key={index}>
                            <div className="serviceRepair__image">
                                <img src={accordeonFinishItem.image} alt="accordeon-image" loading='lazy' />
                            </div>
                            <div className="serviceRepair__text">
                                <span>{accordeonFinishItem.text}</span>
                            </div>
                        </div>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ServicesRepair