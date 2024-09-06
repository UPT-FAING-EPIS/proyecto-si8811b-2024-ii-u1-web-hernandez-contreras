import { render ,screen,fireEvent } from "@testing-library/react";
import login from './login';

describe ("<Login/>", () => {
    test("Test del Login", () => {
    render(<Login/>);
        const usertest =screen.getByText(/username:/i);
        const passwordtest =screen.getByText(/password:/i);
        const buttontest =screen.getByText(/acceder:/i);

        expect (usertest).toBeInTheDocument();
        expect (passwordtest).toBeInTheDocument();
        expect (buttontest).toBeInTheDocument();
    });
});