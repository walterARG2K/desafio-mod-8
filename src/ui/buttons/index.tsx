import { FirstButton, SecondButton, ThirdButton } from "./types";

type buttonTypes = {
    type: "First" | "Second" | "Third";
    children: string;
    click?: () => any;
};

export function MainButtons({ type, children, click }: buttonTypes) {
    const types = {
        First: FirstButton,
        Second: SecondButton,
        Third: ThirdButton,
    };
    return types[type](children, click);
}
