/*
interface QuestionsObject {
    [key:number]: {
        correct: string[]
        given: string[]
    }
}
*/

const score = (questionsObject) => {
  const questionsCount = Object.keys(questionsObject).length;
  const correctAnswers = Object.values(questionsObject).reduce(
    (acc, answer) => {
      const correct =
        answer.given.filter(
          (givenAnswer, index) => givenAnswer !== answer.correct[index]
        ).length > 0
          ? 0
          : 1;

      return acc + correct;
    },
    0
  );

  return ((correctAnswers / questionsCount) * 100).toFixed(2);
};

module.exports = score;
