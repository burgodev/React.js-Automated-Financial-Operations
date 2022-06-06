const acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard:
    /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
};

export const checkCardIsSupported = (value) => {
  let cardIcon = "";
  let accepted = false;

  if (value.length > 15) {
    value.replace(/\D/g, "");

    if (
      acceptedCreditCards.visa.test(value) &&
      value.match(acceptedCreditCards.visa)
    ) {
      cardIcon = "visa";
      accepted = true;
    } else if (
      acceptedCreditCards.mastercard.test(value) &&
      value.match(acceptedCreditCards.mastercard)
    ) {
      cardIcon = "mastercard";
      accepted = true;
    }
  }
  return { cardIcon, accepted };
};
