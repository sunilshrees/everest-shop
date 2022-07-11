import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/desk.jpg';

const About = () => {
    return (
        <main>
            <PageHero title='about' />
            <Wrapper className='page section section-center'>
                <img src={aboutImg} alt='desk' />
                <article>
                    <div className='title'>
                        <h2>Our Story</h2>
                        <div className='underline'></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Reprehenderit, provident, alias, voluptates soluta
                        cum quia id placeat error rem deleniti repellat
                        voluptatem repudiandae incidunt aut labore fuga aliquid.
                        Eius, fugit. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Cumque expedita laboriosam inventore
                        ipsum labore facilis nostrum, sit quaerat excepturi.
                        Cum. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dignissimos perspiciatis officia laboriosam
                        officiis repellat ut numquam, iusto ab amet repudiandae
                        ducimus. Mollitia iure at tempore eligendi asperiores
                        nulla eaque tempora consequatur sit vero sed illum sint
                        quaerat reprehenderit maiores ut deleniti, omnis
                        reiciendis excepturi distinctio qui nostrum ea illo.
                        Eveniet.
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 350px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-dark);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default About;
