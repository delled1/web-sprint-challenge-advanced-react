import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange 
    render(<CheckoutForm />)

    //Act
    const header = screen.getByText(/checkout form/i)
    expect(header.textContent).toBe('Checkout Form')

});


test("form shows success message on submit with form details", async () => {

    //Arrange
    render(<CheckoutForm/>)

    // query for each input field with RTL matchers
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button")

    // fill out the form
    userEvent.type(firstName, "Eric")
    userEvent.type(lastName, "Della")
    userEvent.type(address, "123456 hometown road")
    userEvent.type(city, "Disneyland")
    userEvent.type(state, "California")
    userEvent.type(zip, "12345")

    // //click button
    userEvent.click(button)

    const successMessage = await screen.findByTestId("successMessage");
    expect(successMessage).toBeDefined();
   
  
});
