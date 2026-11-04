const GAME_WORDS = [
  'REACT', 'JAVASCRIPT', 'TYPESCRIPT', 'HTML', 'ANGULAR', 'SOLID', 'NODE',
  'VUEJS', 'SVELTE', 'EXPRESS', 'MONGODB', 'POSTGRES', 'DOCKER', 'KUBERNETES',
  'WEBPACK', 'VITE', 'TAILWIND',
];

export interface ScrambleWordsState {
  words: string[];
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  totalWords: number;
}

export type ScrambleWordsAction =
  | { type: 'CHECK_ANSWER' }
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME'; payload: ScrambleWordsState };

const shuffle = <T,>(items: T[]) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const scramble = (word: string) => {
  if (!word) return '';
  const letters = word.split('');
  let mixed = shuffle(letters).join('');
  if (mixed === word && letters.length > 1) mixed = `${word.slice(1)}${word[0]}`;
  return mixed;
};

export const getInitialState = (): ScrambleWordsState => {
  const words = shuffle(GAME_WORDS);
  const currentWord = words[0] ?? '';
  return {
    words,
    currentWord,
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scramble(currentWord),
    skipCounter: 0,
    totalWords: words.length,
  };
};

const moveToNextWord = (state: ScrambleWordsState, remainingWords: string[]): ScrambleWordsState => {
  const currentWord = remainingWords[0] ?? '';
  return {
    ...state,
    words: remainingWords,
    currentWord,
    scrambledWord: scramble(currentWord),
    guess: '',
  };
};

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction,
): ScrambleWordsState => {
  switch (action.type) {
    case 'SET_GUESS':
      return { ...state, guess: action.payload.toUpperCase() };
    case 'CHECK_ANSWER': {
      if (state.isGameOver || !state.guess.trim()) return state;
      if (state.guess.trim() === state.currentWord) {
        return { ...moveToNextWord(state, state.words.slice(1)), points: state.points + 1 };
      }
      const errorCounter = state.errorCounter + 1;
      return { ...state, errorCounter, guess: '', isGameOver: errorCounter >= state.maxAllowErrors };
    }
    case 'SKIP_WORD':
      if (state.isGameOver || state.skipCounter >= state.maxSkips) return state;
      return { ...moveToNextWord(state, state.words.slice(1)), skipCounter: state.skipCounter + 1 };
    case 'START_NEW_GAME':
      return action.payload;
    default:
      return state;
  }
};
