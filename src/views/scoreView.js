export const createScoreElement = (score, totalScore = 10) => {
    const element = document.createElement('div');
    element.classList.add("scoreResult");
    element.innerHTML = String.raw`
    <h2 id="show-score">Your result is ${score} / ${totalScore}</h2>`;
    return element ;
}