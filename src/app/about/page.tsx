import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './about.css';


export default function About() {
  return (
    <section className='about-container'>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFTFXFKWol--g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687490979694?e=1750896000&v=beta&t=uoyKPPFQ50P5fsiqRJN8Tiq4ExBBB-kqfP0etPGPcxM" 
        alt="Minha Foto"
        className='about-image'
      />
      <h1 className='about-title'>Sobre Mim</h1>
      <p className='about-description'>
        Olá! Meu nome é Gabriel e sou um desenvolvedor de software com experiência em desenvolvimento Fullstack. 
        Tenho mais de 10 de experiência na area de TI, atualmente utilizando tecnologias como Java, Spring Boot, Node.js, React, Next.js e entre outras.
      </p>
      <div className='about-links'>
        <a href="https://github.com/gabrielborc" target="_blank" rel="noopener noreferrer" className='about-link'>
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-chiarelo-59925a4a/" target="_blank" rel="noopener noreferrer" className='about-link'>
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}
