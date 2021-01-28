import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const BackgroundImage = styled.div`
//   flex: 1;
//   background-image: url(${db.bg});
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz CSS da Alura</title>
        <meta name="title" content="Quiz CSS da Alura" />
        <meta name="description" content="Imersão React/Next.js - Alura" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.mjpancheri.vercel.app/" />
        <meta property="og:title" content="Quiz CSS da Alura" />
        <meta property="og:description" content="Imersão React/Next.js - Alura" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.mjpancheri.vercel.app/" />
        <meta property="twitter:title" content="Quiz CSS da Alura" />
        <meta property="twitter:description" content="Imersão React/Next.js - Alura" />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                {`Jogar [${name}]`}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mjpancheri/aluraquiz" />
    </QuizBackground>
  );
}
