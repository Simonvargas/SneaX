
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='Github'>
                <a className='footerLink'  href='https://github.com/Simonvargas/SneaX' target='_blank' rel='noreferrer'>
                    <i class='fab fa-github fa-2x' />
                </a>
            </div>
            <div className='teams'>
                <div className='Joon'>
                    <h1 className='team-name'>Joon C.</h1>
                    <a className='footerLink'  href='https://github.com/88joonyc' target='_blank' rel='noreferrer'>
                        <i class='fab fa-github fa-2x' />
                    </a>

                </div>
                <div className='Jun'>
                    <h1 className='team-name'>Jun L.</h1>
                    <a className='footerLink'  href='https://github.com/88joonyc' target='_blank' rel='noreferrer'>
                        <i class='fab fa-github fa-2x' />
                    </a>
                </div>
                <div className='Simon'>
                    <h1 className='team-name'>Simon V.</h1>
                    <a className='footerLink'  href='https://github.com/Simonvargas' target='_blank' rel='noreferrer'>
                        <i class='fab fa-github fa-2x' />
                    </a>
                </div>
                <div className='Vivian'>
                    <h1 className='team-name'> Vivian C.</h1>
                    <a className='footerLink'  href='https://github.com/itsvivrant' target='_blank' rel='noreferrer'>
                        <i class='fab fa-github fa-2x' />
                    </a>
                </div>


            </div>


        </div>
    )
}

export default Footer;