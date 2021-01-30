/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha na API');
    })
    .then((response) => response)
    .catch((err) => {
      console.error(err);
    });
  // console.log(dbExterno);
  // console.log('Info q o Next nos dá: ', context.query);
  return {
    props: {
      dbExterno,
    },
  };
}
