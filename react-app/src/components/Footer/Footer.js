
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='Github'>
                <a className='footerLink'  href='https://github.com/Simonvargas/SneaX' target='_blank' rel='noreferrer'>
                    <i className='fab fa-github fa-2x' />
                </a>
            </div>
            <div className='team-members'>

                <div className='teammate jun'>
                    <div>
                    <h1 className='team-name'>Jun L.</h1>
                    </div>
                    <div className='git-link-icons'>
                        <a className='footerLink'  href='https://github.com/88joonyc' target='_blank' rel='noreferrer'>
                            <i className='fab fa-github fa-2x' />
                        </a>
                        <a className='footerLink' href='https://www.linkedin.com/in/itisjun/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>
                    </div>
                </div>
                <div className='teammate paul'>
                    <div>
                    <h1 className='team-name'>Paul C.</h1>
                    </div>
                    <div className='git-link-icons'>
                        <a className='footerLink'  href='https://github.com/88joonyc' target='_blank' rel='noreferrer'>
                            <i className='fab fa-github fa-2x' />
                        </a>
                        <a className='footerLink' href='https://www.linkedin.com/in/pchang1216/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>
                    </div>

                </div>
                <div className='teammate simon'>
                    <div>
                    <h1 className='team-name'>Simon V.</h1>
                    </div>
                    <div className='git-link-icons'>
                        <a className='footerLink'  href='https://github.com/Simonvargas' target='_blank' rel='noreferrer'>
                            <i className='fab fa-github fa-2x' />
                        </a>
                        <a className='footerLink' href='https://www.linkedin.com/in/simon-vargas-aa0b6a14b/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>

                    </div>
                </div>
                <div className='teammate vivian'>
                    <div>
                    <h1 className='team-name'> Vivian C.</h1>
                    </div>
                    <div className='git-link-icons'>
                        <a className='footerLink'  href='https://github.com/itsvivrant' target='_blank' rel='noreferrer'>
                            <i className='fab fa-github fa-2x' />
                        </a>
                        <a className='footerLink' href='https://www.linkedin.com/in/vivian-ngoc-che/' target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin fa-2x'></i>
                        </a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Footer;
