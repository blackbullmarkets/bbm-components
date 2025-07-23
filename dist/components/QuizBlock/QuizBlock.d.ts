interface QuizAnswer {
    answer: string;
    isRightAnswer: boolean;
    selected: boolean;
    variant: string;
}
interface QuizProps {
    quizQuestion: string;
    options: QuizAnswer[];
    nextButton: React.ReactNode;
}
export default function QuizBlock({ quizQuestion, options, nextButton, }: QuizProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=QuizBlock.d.ts.map