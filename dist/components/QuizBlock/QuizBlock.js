"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useState } from "react";
import QuizOption from "../QuizOption/QuizOption";
export default function QuizBlock({ quizQuestion, options, nextButton, }) {
    const [buttonState, setButtonState] = useState("inactive");
    const [answers, setAnswers] = useState(options);
    const [showNext, setShowNext] = useState(false);
    function selectAnswer(i) {
        setButtonState("primary");
        const newAnswers = [...options];
        newAnswers.map((ans, index) => {
            ans.variant = index === i ? "selected" : "unselected";
        });
        setAnswers(newAnswers);
    }
    function submitAnswer() {
        const newAnswers = [...options];
        newAnswers.map((ans) => {
            if (ans.variant === "selected") {
                if (ans.isRightAnswer) {
                    ans.variant = "success";
                    setButtonState("inactive");
                    setShowNext(true);
                }
                else {
                    ans.variant = "error";
                }
            }
        });
        setAnswers(newAnswers);
    }
    return (_jsxs("div", { className: "bg-lightgray p-14 rounded-xm", children: [_jsx(Typography, { variant: "h4", color: "text-black-default", children: quizQuestion }), _jsx("ul", { className: "last:mb-0", children: answers &&
                    answers.map((answer, i) => (_jsx(QuizOption, { onClickFn: () => selectAnswer(i), variant: answer.variant, answer: answer.answer }, i))) }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { id: "submitButton", variant: buttonState, label: "Submit", size: "lg", onClickFn: submitAnswer, bold: true }), showNext && nextButton] }), _jsx("ul", { children: options &&
                    options.map((option, i) => (_jsx("li", { children: option.selected && option.answer }, i))) })] }));
}
//# sourceMappingURL=QuizBlock.js.map