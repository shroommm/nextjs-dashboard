import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe('Home component', () => {
    it('render welcome message', () => {
        // ARRANGE
        render(<Home />)

        // ACT
        const myElem = screen.getByText('Welcome to Acme.')

        // ASSERT
        expect(myElem).toBeInTheDocument();
    })

    it('render element with text "log in"', () => {
        // ARRANGE
        render(<Home />)

        // ACT
        const myElem = screen.getByText(/log in/i) // "/***/i": searching element/component with text, case insensitive

        // ASSERT
        expect(myElem).toBeInTheDocument();
    })

    it('render images correctly', () => {
        // ARRANGE
        render(<Home />)

        // ACT
        // const myElem = screen.getByRole('image', {
        const myElems = screen.getAllByAltText("Screenshots of the dashboard project showing desktop and mobile versions")

        // ASSERT
        myElems.map(e => {
            expect(e).toBeInTheDocument();
        })
    })
})

